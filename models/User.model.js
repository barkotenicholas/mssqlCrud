import { poolPromise } from "../database/config.js";
import mssql from "mssql";


export const AddUser = async (user) => {

    const pool = await poolPromise  
    const rs = await pool.request()
        .input('firstName', mssql.VarChar, user.firstName)
        .input('lastName', mssql.VarChar, user.lastName)
        .input('email', mssql.VarChar, user.email)
        .input('password', mssql.VarChar, user.hashedPassword)
        .execute('spCreateUser')

    return rs.rowsAffected;

}
