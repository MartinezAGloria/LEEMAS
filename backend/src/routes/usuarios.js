import {Router} from "express"
const router = Router()
const {crearUsuario} = require ('../controllers/user.controller')

router.route('/')
    .post(crearUsuario)

export default router;