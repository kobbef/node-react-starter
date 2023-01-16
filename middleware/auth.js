const jwt = require("jsonwebtoken");
const config = require("../config/config");

module.exports = authenticate = (req, res, next) => {
  // // Find the token from the request header
  // const header = req.header("Authorization");
  // // `Bearer f2b0156f-cf95-4e29-9f57-51296a481c6a`
  // const token = header.split(" ")[1];
  // if (!token) {
  //   return res.status(401).send("No token, authorization denied");
  // }
  // try {
  //   // const decoded = jwt.verify(token, config.jwtPublic);
  //   if (token !== "f2b0156f-cf95-4e29-9f57-51296a481c6a") {
  //     throw new Error("Token not valid");
  //   }
  //   next();
  // } catch (e) {
  //   res.status(401).send("Token not valid");
  // }
  next();
};
