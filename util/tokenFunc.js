const jwt = require("jsonwebtoken");

const signTokenFunc = (payload) => {
  try {
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });
  } catch (e) {
    console.log(e.message, " err in sign token");
    return null;
  }
};
const verifyTokenFunc = (token) => {
  try {
    const isVerified = jwt.verify(token, process.env.JWT_SECRET);
    // console.log("isVerified",isVerified)
    return isVerified;
  } catch (e) {
    console.log(e, e.message, "err in token verify");
    return null;
  }
};

module.exports = { signTokenFunc, verifyTokenFunc };
