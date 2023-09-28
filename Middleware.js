const jwt = require("jsonwebtoken");
const authMiddleware = async (req, res, next) => {

    const { authorization } = req.headers;

    const token = authorization?.split(" ")[1];

    try {

        if (token) {

            const decoded = await jwt.verify(token, "pravin");

            if (decoded) {
                req.userId = decoded.user_id
                next()
            }
            else {

                res.send({ msg: "Token is not valid" })
            }

        }
        else{

            res.send({msg:"Please login first"})
        }


    } catch (error) {

        res.send({ msg: "Please login first" })
    }
}

module.exports = authMiddleware