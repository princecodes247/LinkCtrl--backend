const UserService = require('../services/user.service');
const response = require('../utils/response');

class UserContoller {
  async create(req, res) {
    const result = await UserService.create(req.body);
    res.status(200).send(response('User created', result));
  }

  async getAll(req, res) {
    const result = await UserService.getAll();
    res.status(200).send(response('All users', result));
  }

  async getOne(req, res) {
    const result = await UserService.getOne(req.params.userId);
    res.status(200).send(response('User data', result));
  }

  async update(req, res) {
    const result = await UserService.update(req.params.userId, req.body);
    res.status(200).send(response('User updated', result));
  }

  async delete(req, res) {
    const result = await UserService.delete(req.params.userId);
    res.status(200).send(response('User deleted', result));
  }
}

module.exports = new UserContoller();
