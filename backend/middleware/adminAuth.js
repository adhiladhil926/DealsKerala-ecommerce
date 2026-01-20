import jwt from "jsonwebtoken"
export default function adminAuth(req, res, next) {
    const header = req.headers.authorization;

    if (!header) return res.status(401).json({ msg: "No token found" });

    const token = header.split(" ")[1] 
    if (!token) return res.status(401).json({ msg: "token not found" })
    if (!token) return res.status(401).json({ msg: "Token missing" });

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);

        // Check if user role is admin
        if (verified.role !== "admin") {
            return res.status(403).json({ msg: "Access denied. Admin only." });
        }

        req.user = verified;
        next();
    } catch (err) {
        res.status(400).json({ msg: "Invalid token" });
    }

}
  