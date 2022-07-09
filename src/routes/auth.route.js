const router = require('express').Router();
const AuthController = require('../controllers/auth.controller');
const upload = require('../middlewares/multer.middleware');

router.post('/sign-up', upload('image'), AuthController.signup);
router.post('/sign-in', AuthController.signin);
router.post('/request-email-verification', AuthController.RequestEmailVerification);
router.post('/verify-email', AuthController.VerifyEmail);
router.post('/request-password-reset', AuthController.RequestPasswordReset);
router.post('/reset-password', AuthController.resetPassword);

module.exports = router;
