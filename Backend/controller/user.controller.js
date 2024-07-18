import User from "../model/user.model.js";
import bcryptjs from "bcryptjs"

export const signup = async (req, res) => {
    try {
        const { fullname, email, password } = req.body
        const user = await User.findOne({ email })

        if (user) {
            return res.status(400).json({ message: "User already exists" })
        }

        const hashpassword = await bcryptjs.hash(password, 10)
        const createUser = new User({
            fullname: fullname,
            email: email,
            password: hashpassword,
        })
        await createUser.save()
        console.log()
        res.status(200).json({ message: "User created successfully", user: createUser })
    } catch (error) {
        console.log("Error:", error)
        res.status(500).json({ message: "Internal server error" })
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user by email
        const user = await User.findOne({ email });

        // Check if user exists
        if (!user) {
            return res.status(400).json({ message: "Invalid username and password" });
        }

        // Compare passwords
        const isMatch = await bcryptjs.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: "Invalid username and password" });
        }

        // Login successful, return user data
        return res.status(200).json({
            message: "Login successful",
            user: {
                _id: user._id,
                fullname: user.fullname,
                email: user.email,
            }
        });
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}