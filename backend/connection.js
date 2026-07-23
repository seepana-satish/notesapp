const mongoose = require('mongoose');

const uri = "mongodb+srv://satish:Satish2233@satish.ngv7oqs.mongodb.net/notesapp?retryWrites=true&w=majority";

mongoose.connect(uri)
  .then(() => {
    console.log("✅ SUCCESS: Connected to MongoDB!");
    process.exit(0);
  })
  .catch((err) => {
    console.log("❌ FAILED:", err.message);
    process.exit(1);
  });