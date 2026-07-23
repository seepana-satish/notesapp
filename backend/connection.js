const mongoose = require('mongoose');

const uri = process.env.MONGO_URI;

mongoose.connect(uri)
  .then(() => {
    console.log("✅ SUCCESS: Connected to MongoDB!");
    process.exit(0);
  })
  .catch((err) => {
    console.log("❌ FAILED:", err.message);
    process.exit(1);
  });