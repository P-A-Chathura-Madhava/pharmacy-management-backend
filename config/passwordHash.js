import bcrypt from "bcrypt";

const hashPassword = async (password) => {
    const salt = await bcrypt.genSaltSync(10);
    const pass = await bcrypt.hash(password, salt);
    return pass;
}

const matchPassword = async(password, encryptedPassword) => {
    return await bcrypt.compare(password, encryptedPassword);
}

export {hashPassword, matchPassword};