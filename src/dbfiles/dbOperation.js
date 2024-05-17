
// signin page
const sql = require('mssql');
const config = require('./dbConfig');



const getEmployees = async(firstname,password) => {
    try{
        let pool = await  sql.connect(config);
        let employees =await  pool.request().query(`SELECT  * from Users WHERE Username='${firstname}' AND Password='${password}'`)
        console.log(employees);
        return employees;
    }
    catch(error){
        console.log(error);
    }
}
const createEmployee = async(Employee) => {
    try{
        let pool = await  sql.connect(config);
        let employees = await pool.request()
        .query(`INSERT INTO Users VALUES
        ('${Employee.NAME}','${Employee.Username}','${Employee.Password}','${Employee.Mobile}','${Employee.email}')
        `)
        return employees;
    }
    catch(error){
        console.log(error);
    }
}
module.exports ={
    createEmployee,
    getEmployees,

}