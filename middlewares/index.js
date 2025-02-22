import jwt from "jsonwebtoken";

export const authorizeToken = async (req, res, next) => {
  try {
    const token = req.header("Authorization").split(" ")[1];
    const decode = await jwt.verify(token, process.env.JWT_SECRET);
    if (!decode) {
      return res.status(401).json({ message: "Unauthorized, token expired" });
    }
    console.log("decode : ", decode);
    next();
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
