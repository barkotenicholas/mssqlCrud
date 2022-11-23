import { Router } from "express";
import  {createUser ,updateuser }  from '../controllers/auth.controller.js'
const router = Router()

router.post('/',createUser)
router.get('/',(req,res)=>{

})

router.put('/',updateuser)

export default router