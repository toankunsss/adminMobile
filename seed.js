require('dotenv').config();
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

const User = require('./models/User');
const Category = require('./models/Category');
const Product = require('./models/Product');
const Order = require('./models/Order');
const OrderItem = require('./models/OrderItem');
const Cart = require('./models/Cart');
const Payment = require('./models/Payment');
const Review = require('./models/Review');
const Wishlist = require('./models/Wishlist');
const Address = require('./models/Address');
const Notification = require('./models/Notification');

const dbPath = path.resolve(__dirname, '../db.json');
const db = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));

async function seed() {
  await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  // Clear collections
  await Promise.all([
    User.deleteMany({}),
    Category.deleteMany({}),
    Product.deleteMany({}),
    Order.deleteMany({}),
    OrderItem.deleteMany({}),
    Cart.deleteMany({}),
    Payment.deleteMany({}),
    Review.deleteMany({}),
    Wishlist.deleteMany({}),
    Address.deleteMany({}),
    Notification.deleteMany({}),
  ]);

  // Insert data
  await User.insertMany(db.users.map(u => ({...u, _id: u.id || String(u._id)})));
  await Category.insertMany(db.categories.map(c => ({...c, _id: c.id || String(c._id)})));
  await Product.insertMany(db.products.map(p => {
    let colors = p.colors;
    // Nếu colors là string, thử parse JSON
    if (typeof colors === 'string') {
      try {
        colors = JSON.parse(colors);
      } catch {
        colors = [];
      }
    }
    // Nếu colors không phải mảng, gán []
    if (!Array.isArray(colors)) {
      colors = [];
    }
    return {
      ...p,
      colors,
      _id: p.id || String(p._id)
    };
  }));
  await Order.insertMany(db.orders.map(o => ({...o, _id: o.id || String(o._id)})));
  await OrderItem.insertMany(db.order_items.map(oi => ({...oi, _id: oi.id || String(oi._id)})));
  await Cart.insertMany(db.cart.map(ca => ({...ca, _id: ca.id || String(ca._id)})));
  await Payment.insertMany(db.payments.map(p => ({...p, _id: p.id || String(p._id)})));
  await Review.insertMany(db.reviews.map(r => ({...r, _id: r.id || String(r._id)})));
  await Wishlist.insertMany(db.wishlist.map(w => ({...w, _id: w.id || String(w._id)})));
  await Address.insertMany(db.address.map(a => ({...a, _id: a.id || String(a._id)})));
  await Notification.insertMany(db.notification.map(n => ({...n, _id: n.id || String(n._id)})));

  console.log('Database seeded successfully!');
  mongoose.disconnect();
}

seed().catch(err => {
  console.error('Seeding error:', err);
  mongoose.disconnect();
});
