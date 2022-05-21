const Hero = require("../models/Hero");

/**
 * @route POST /user
 * @desc Create User 
 * @access Public
 */
const saveUser = async (token, email) => {
  try {
    const hero = new Hero({
      token: token,
      email: email,
    });

    await hero.save();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

 /**
 * @route GET /user
 * @desc READ User count
 * @access Public 
 */
const countUser = async () => {
  try{
    
    const hero = await Hero.find();
    return hero.length;

  } catch(error){
    console.log(error);
    throw error;
  }
}

module.exports = { saveUser, countUser };
