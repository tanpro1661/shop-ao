import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.status(401).json("Token is not valid");
      }
      req.user = user;
      next();
    });
  } else {
    return res.send("You are not authenticated!");
  }
};

export const verifyTokenAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (
      req.user._id === req.params.id ||
      req.user.isAdmin === req.body.isAdmin
    ) {
      next();
    } else {
      return res.status(403).json("You are not allowed");
    }
  });
};
export const verifyTokenAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return res.status(403).json("You are not allowed");
    }
  });
};
