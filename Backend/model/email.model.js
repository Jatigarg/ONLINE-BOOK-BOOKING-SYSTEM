import mongoose from "mongoose";

const useremailSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    }
})

const Useremail = mongoose.model("Useremail", useremailSchema)

export default Useremail