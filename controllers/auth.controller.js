import { AddUser } from "../models/User.model.js";
import  bcrypt  from "bcrypt";
export const createUser = async (req, res) => {

    try {

        const { firstName, lastName, email, password } = req.body
        const hashedPassword = await bcrypt.hash(password, 9)
        await AddUser({ firstName, lastName, email, hashedPassword })
        res.status(200).send({
            message:'user created successfully'
        })

    } catch (error) {
        res.status(400).send({ message: error.message });
    }
}


export const updateuser = async (req,res)=>{
    res.status(200).json({
        message:'update'
    })
}



