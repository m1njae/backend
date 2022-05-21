const Hero = require("../models/Hero");

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

// TODO. Hero 컬렉션에서 전체 조회 -> 리스트 -> length 길이(여기까지가 서비스) -> response(컨트롤러)

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
