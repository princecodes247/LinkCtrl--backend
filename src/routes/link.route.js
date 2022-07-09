const router = require('express').Router();
const LinkController = require('../controllers/link.controller');
const auth = require('../middlewares/auth.middleware');
const upload = require('../middlewares/multer.middleware');
const { role } = require('../config');

router.post('/', LinkController.create);
router.post('/:linkId', LinkController.createRandom);
router.get('/', auth(role.ADMIN), LinkController.getAll);
router.get('/:linkId', auth(role.USER), LinkController.getOne);
router.put('/:linkId', auth(role.USER), upload('image'), LinkController.update);
router.delete('/:linkId', auth(role.USER), LinkController.delete);
// router.get("/user/:id", auth(role.USER), LinkController.getByUserId);

module.exports = router;
