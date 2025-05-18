# BaoCaoMobile Admin API

## Features
- Node.js + Express.js REST API
- MongoDB with Mongoose ODM
- Modular structure: models, controllers, routes
- CRUD and filter endpoints for: users, categories, products, orders, order_items, cart, payments, reviews, wishlist, address, notification
- Error handling and validation
- Environment-based configuration

## Folder Structure
```
admin/
  models/         # Mongoose schemas
  controllers/    # Business logic
  routes/         # Express routers
  server.js       # Main entry point
  .env            # Environment variables
```

## Setup Instructions

1. **Install dependencies**
   ```powershell
   cd admin
   npm install express mongoose dotenv cors body-parser
   ```

2. **Configure environment**
   - Edit `.env` for your MongoDB URI and port if needed.

3. **Run the server**
   ```powershell
   node server.js
   ```
   The API will be available at `http://localhost:5000/api/`

## API Endpoints
- Users: `/api/users` (CRUD)
- Categories: `/api/categories` (CRUD)
- Products: `/api/products` (CRUD)
- Orders: `/api/orders` (CRUD, filter by user)
- Order Items: `/api/order_items` (CRUD, filter by order)
- Cart: `/api/cart` (CRUD, filter by user)
- Payments: `/api/payments` (CRUD, filter by order)
- Reviews: `/api/reviews` (CRUD, filter by product)
- Wishlist: `/api/wishlist` (CRUD, filter by user)
- Address: `/api/address` (CRUD, filter by user, select)
- Notification: `/api/notification` (CRUD, filter by user)

## Notes
- All endpoints accept and return JSON.
- Use query params for filtering (e.g., `/api/orders/by-user?user_id=...`).
- Use POST/PUT for create/update, DELETE for remove.
- See each route/controller for details.
