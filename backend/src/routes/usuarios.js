const {Router} = require("express")
const router = Router()
const {crearUsuario} = require('../controllers/user.controller')
const {autorizar, validar} = require ('../middlewares')

router.route('/')
    .post([autorizar.verifyToken, autorizar.isAdmin, validar.checkDuplicateUsernameOrEmail],crearUsuario)

module.exports = router;