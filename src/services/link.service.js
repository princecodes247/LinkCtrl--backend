const Link = require('../models/link.model');

const CustomError = require('../utils/custom-error');

class LinkService {
  async create(data) {
    return new Link(data).save();
  }

  async quickCreate(data) {
    return new Link({ url: data.url }).save();
  }

  async getAll() {
    return Link.find({}, { password: 0, __v: 0 });
  }

  async getByUserId(userId) {
    return Link.find({ user: userId }, { password: 0, __v: 0 });
  }

  async getOne(linkId) {
    const link = await Link.findOne({ _id: linkId }, { password: 0, __v: 0 });
    if (!link) throw new CustomError('Link does not exist');

    return link;
  }

  async updateTags(linkId, tags) {
    const link = await Link.findOne({ _id: linkId }, { password: 0, __v: 0 });
    link.tags = [...tags];
    if (!link) throw new CustomError('Link does not exist');

    return link;
  }

  async update(linkId, data) {
    const link = await Link.findOneAndUpdate({ id: linkId }, { $set: data }, { new: true });

    if (!link) throw new CustomError("Link dosen't exist", 404);

    return link;
  }

  async useLink(linkId) {
    const link = await Link.findOneAndUpdate(
      { id: linkId },
      { $push: { clicks: new Date() } },
      { __v: 0 }
    );
    if (!link) throw new CustomError("Link dosen't exist", 404);
    // Check for password
    if (link.password) {
      // throw new CustomError("This link is password protected", 401);
      delete link.password;
      delete link.url;
      link.password = true;
      return link;
    }
    // Check for max clicks
    if (link.max_clicks !== 0 && link.clicks.length >= link.max_clicks) {
      throw new CustomError('This link has reached its max clicks', 401);
    }
    // Check for expiration
    if (link.expires && link.expires < new Date()) {
      throw new CustomError('This link has expired', 401);
    }
    // Check for data types
    if (link.dataTypes.length > 0) {
      throw new CustomError('This link has data types', 401);
    }

    return link;
  }

  async delete(linkId) {
    const link = await Link.findOne({ id: linkId });
    link.remove();
    return link;
  }
}

module.exports = new LinkService();
