const express = require('express');
const Razorpay = require('razorpay');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 1770;
RAZORPAY_KEY_ID=""
RAZORPAY_KEY_SECRET=""
app.use(bodyParser.json());
app.use(cors());

const instance = new Razorpay({
  key_id: '',
  key_secret: '',
});

app.post('/create/orderId', (req, res) => {
  const options = {
    amount: req.body.amount,  // amount in the smallest currency unit
    currency: 'INR',
    receipt: 'order_rcptid_11',
  };
  instance.orders.create(options, (err, order) => {
    if (err) {
      return res.status(500).json(err);
    }
    res.json(order);
  });
});

app.post('/verify', (req, res) => {
  // Add verification logic here if needed
  res.send('Payment verification logic here');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
