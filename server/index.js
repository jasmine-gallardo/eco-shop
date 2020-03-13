require('dotenv/config');
const express = require('express');

const db = require('./database');
const ClientError = require('./client-error');
const staticMiddleware = require('./static-middleware');
const sessionMiddleware = require('./session-middleware');

const app = express();

app.use(staticMiddleware);
app.use(sessionMiddleware);

app.use(express.json());

app.get('/api/health-check', (req, res, next) => {
  db.query('select \'successfully connected\' as "message"')
    .then(result => res.json(result.rows[0]))
    .catch(err => next(err));
});

app.get('/api/products', (req, res, next) => {
  const sql = `
    select "productId",
        "name",
        "price",
        "image",
        "shortDescription"
      from "products"
  `;
  db.query(sql)
    .then(result => res.status(200).json(result.rows))
    .catch(err => next(err));
});

app.get('/api/products/:productId', (req, res, next) => {
  const productId = req.params.productId;
  const sql = `
    select *
      from "products"
    where "productId" = $1
  `;
  const values = [productId];

  db.query(sql, values)
    .then(result => {
      if (result.rows.length === 0) {
        return (
          next(new ClientError(`cannot ${req.method} ${req.originalUrl}`, 404))
        );
      }
      return res.status(200).json(result.rows[0]);
    })
    .catch(err => next(err));
});

app.get('/api/cart', (req, res, next) => {
  const cartId = req.session.cartId;
  if (!req.session.cartId) {
    return [];
  } else {
    const sql = `select "c"."cartItemId",
                "c"."price",
                "p"."productId",
                "p"."image",
                "p"."name",
                "p"."shortDescription"
            from "cartItems" as "c"
            join "products" as "p" using ("productId")
          where "c"."cartId" = $1
          `;

    const values = [cartId];

    db.query(sql, values)
      .then(result => res.status(200).json(result.rows))
      .catch(err => next(err));
  }
});

app.post('/api/cart', (req, res, next) => {
  const productId = req.body.productId;

  if (!parseInt(productId, 10)) {
    return res.status(400).json({ error: 'invalid productId' });
  }

  const sql = `
    select "price"
      from "products"
    where "productId" = $1
    `;

  const values = [productId];

  db.query(sql, values)
    .then(result => {
      const price = result.rows[0].price;
      const sql = `
        insert into "carts" ("cartId", "createdAt")
        values (default, default)
        returning "cartId"
      `;
      if (!result.rows.length === 0) {
          throw new ClientError(`cannot ${req.method} ${req.originalUrl}`, 404);
      }

      if (req.session.cartId) {
        const cartId = req.session.cartId;
        const queriedCartId = [{ cartId: cartId }];
        return { queriedCartId, price };
      } else {
        return (
          db.query(sql)
            .then(result => {
              const queriedCartId = result.rows;
              return { queriedCartId, price };
            })
        );
      }

    })
    .then(result => {
      const productId = req.body.productId;
      const price = result.price;
      const cartIdResult = result.queriedCartId[0].cartId;
      req.session.cartId = cartIdResult;

      const sql = `
        insert into "cartItems" ("cartId", "productId", "price")
        values ($1, $2, $3)
        returning "cartItemId"
      `;

      const values = [cartIdResult, productId, price];

      return (
        db.query(sql, values)
          .then(result => {
            const cartItemId = result.rows[0];
            return cartItemId;
          })
      );
    })
    .then(result => {
      const cartItemId = result.cartItemId;
      const sql = `
        select "c"."cartItemId",
              "c"."price",
              "p"."productId",
              "p"."image",
              "p"."name",
              "p"."shortDescription"
          from "cartItems" as "c"
          join "products" as "p" using ("productId")
        where "c"."cartItemId" = $1
      `;
      const values = [cartItemId];

      return (
        db.query(sql, values)
          .then(result => res.status(201).json(result.rows[0]))
      );
    })
    .catch (err => next(err));
});

app.use('/api', (req, res, next) => {
  next(new ClientError(`cannot ${req.method} ${req.originalUrl}`, 404));
});

app.use((err, req, res, next) => {
  if (err instanceof ClientError) {
    res.status(err.status).json({ error: err.message });
  } else {
    console.error(err);
    res.status(500).json({
      error: 'an unexpected error occurred'
    });
  }
});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', process.env.PORT);
});
