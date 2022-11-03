const imovelController = require("../controllers/imovelController");

const router = require("express").Router();
router.get('/', imovelController.getImovel)

module.exports = router