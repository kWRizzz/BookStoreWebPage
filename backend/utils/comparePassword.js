const bcryptjs= require('bcryptjs')


const comparePassword= async (password,hash) => {
    const compare= bcryptjs.compareSync(password,hash);
    return compare 
}


module.exports=comparePassword