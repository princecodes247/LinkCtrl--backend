const router = require('express').Router();
const LinkController = require('../controllers/link.controller');

router.use('/auth', require('./auth.route'));
router.use('/users', require('./user.route'));
router.use('/links', require('./link.route'));

router.get('/use/:linkId', LinkController.useLink);

module.exports = router;
