const AuthService = require('../services/auth.service');
const response = require('../utils/response');

class AuthContoller {
  async signup(req, res) {
    const result = await AuthService.signup(req.body);
    res.status(201).send(response('User created', result));
  }

  async signin(req, res) {
    const result = await AuthService.signin(req.body);
    res.status(200).send(response('User login successful', result));
  }

  async updatePassword(req, res) {
    const result = await AuthService.updatePassword(req.params.userId, req.body);
    res.status(200).send(response('Password updated', result));
  }

  async RequestEmailVerification(req, res) {
    const result = await AuthService.RequestEmailVerification(req.query.email);
    res.status(200).send(response('Email verfication link sent', result));
  }

  async VerifyEmail(req, res) {
    const result = await AuthService.VerifyEmail(req.body);
    res.status(200).send(response('Email verified successfully', result));
  }

  async RequestPasswordReset(req, res) {
    const result = await AuthService.RequestPasswordReset(req.query.email);
    res.status(200).send(response('Password reset link sent', result));
  }

  async resetPassword(req, res) {
    const result = await AuthService.resetPassword(req.body);
    res.status(200).send(response('Password updated', result));
  }
}

module.exports = new AuthContoller();
