const bcryptjs=require('bcryptjs')


const hashPassword= async (password) => {
    const salt = bcryptjs.genSaltSync(10);
    const hash = bcryptjs.hashSync(password,salt)
    return hash
}



module.exports=hashPassword