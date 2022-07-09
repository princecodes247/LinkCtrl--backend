const router = require('express').Router();
const UserController = require('../controllers/user.controller');
const auth = require('../middlewares/auth.middleware');
const upload = require('../middlewares/multer.middleware');
const { role } = require('../config');

router.post('/', auth(role.ADMIN), upload('image'), UserController.create);
router.get('/', auth(role.USER), UserController.getAll);
router.get('/:userId', auth(role.USER), UserController.getOne);
router.put('/:userId', auth(role.USER), upload('image'), UserController.update);
router.delete('/:userId', auth(role.USER), UserController.delete);

module.exports = router;
