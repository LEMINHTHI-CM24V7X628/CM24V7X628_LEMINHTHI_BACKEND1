const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      unique: true,
    },
    address: String,
    phone: String,
    favorite: Boolean,
  },
  { timestamps: true }
);

// Bổ sung: Xóa trường __v và đổi _id thành id khi JSONify
contactSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

module.exports = mongoose.model("Contact", contactSchema);