# Eco Shop - Shopping Cart App
A full stack Node.js and React shopping cart app.

## Technologies Used
- React.js
- Node.js
- Express
- PostgreSQL
- Webpack 4
- HTML5
- Bootstrap 4
- FontAwesome
- AWS EC2

## Live Demo

[Try Eco Shop]( https://eco-shop.jasminegallardo.com/ "Eco Shop")

## Features
- User can view catalog of products
- User can view product details
- User can add a product to cart
- User can view cart summary
- User can place an order

## Preview

![Eco Shop Preview](server/public/images/preview-eco-shop.gif "Eco Shop Preview")

## Development

### System Requirements
- Node.js 10 or higher
- NPM 6 or higher
- PostgreSQL 10 or higher

### Getting Started

1. Clone this repository.
```shell
git clone https://github.com/jasmine-gallardo/eco-shop
cd eco-shop
```

2. Install all dependencies with NPM.
``` shell
npm install
```

3. Start PostgreSQL server in another terminal.
```shell
sudo service postgresql start
```

4. In your first terminal, create the database.
```shell
createdb ecoShop
```

5. Import the database to PostgreSQL.
```shell
npm run db:import
```

6. Use pgweb to access the database.
```shell
pgweb --db=ecoShop
```

7. Start the project. You can view the application by opening http://localhost:3000 in your browser.
```shell
npm run dev
```
