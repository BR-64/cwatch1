const mongoose = require('mongoose');

const formSchema = new mongoose.Schema(
  {
    topic: String,
    scope: String,
    suspect: String,
    details: String,
    province: String,
    district: String,
    subdistrict: String,
    reporter: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Cases', formSchema);
