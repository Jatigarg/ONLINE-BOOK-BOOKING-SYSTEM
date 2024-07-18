import Useremail from '../model/email.model.js'

export const email = async (req, res) => {
    try {
        const { email } = req.body
        const user = await Useremail.findOne({ email })

        if (user) {
            return res.status(400).json({ message: "Email already insert" })
        }

        const createUser = new Useremail({
            email: email
        })
        
        await createUser.save()
        console.log()
        res.status(200).json({ message: "Thanks for submit" }) // , user:createUser

    } catch (error) {
        console.log("Error:", error)
        res.status(500).json({ message: "Internal server error" })
    }
}