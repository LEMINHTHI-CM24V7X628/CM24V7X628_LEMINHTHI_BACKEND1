const ContactModel = require("../models/contact.model");

class ContactService {
  constructor() {
    // Khởi tạo model để tương tác với MongoDB
    this.Contact = ContactModel;
  }

  // Tạo một liên hệ mới
  async create(payload) {
    // Hàm này sau sẽ có thêm logic kiểm tra trùng lặp
    const contact = new this.Contact(payload);
    return await contact.save();
  }

  // Lấy tất cả hoặc tìm kiếm theo tên
  async findAll(filter) {
    return await this.Contact.find(filter);
  }

  // Tìm kiếm theo ID
  async findById(id) {
    return await this.Contact.findById(id);
  }

  // Cập nhật theo ID
  async update(id, payload) {
    const filter = {
      _id: id,
    };
    const update = {
      $set: payload,
    };
    const options = { new: true }; // Trả về đối tượng sau khi update
    return await this.Contact.findOneAndUpdate(filter, update, options);
  }

  // Xóa theo ID
  async delete(id) {
    return await this.Contact.findByIdAndDelete(id);
  }

  // Xóa tất cả
  async deleteAll() {
    return await this.Contact.deleteMany({});
  }

  // Lấy tất cả liên hệ yêu thích
  async findAllFavorite() {
    return await this.Contact.find({ favorite: true });
  }
}

module.exports = ContactService;