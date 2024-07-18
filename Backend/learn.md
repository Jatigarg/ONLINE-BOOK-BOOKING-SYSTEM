# data hosting

## Step 1(installation)

- install express
- install nodemon ("start": "nodemon index.js")
- ("type": "module",)
- define main file ("main": "index.js",)

## step 2(security)

- Security (.env file)
- import env npm
- then (import dotenv from "dotenv")(dotenv.config();)
- write imp data in .env file (PORT = 4001)
- then for acess this data in main= index.js
- const PORT = process.env.PORT || 4000;

## step 3(mongodb confirm)

- install mongoes (import mongoose from "mongoose";)

### 1) First link a database:-

- Copy mongodb url
- in(.env) file (MongoDBURI = "mongodb://localhost:27017/jatinStore")
- in link at end (jatinstore) is the database we create name
- then import (const MongoDBURI = process.env.MongoDBURI) in main file

### 2) Second(Check databse connected or not)

- try {
    mongoose.connect(MongoDBURI ,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    console.log("connected")
} catch (error) {
    console.log("Error:", error)
}

### 3) Third create the structure of data base

- import mongoes

#### mongoes schema(define data base structure)

- const bookSchema = mongoose.Schema({
    name: String,
    price: Number,
    image: String,
    title: String
})

#### Name of database jatinbook sub element

- const Book = mongoose.model("Book", bookSchema)
- here Book is the name of element in jatinbookstore schema where our data is store
- (export default Book) export because we work on this data base for data

### 4) Setup the request handle

- import Book
- export const getBook = async(req,res) =>{
    try {
        const book = await Book.find()
        res.status(200).json(book)
    } catch (error) {
        console.log("Error:",error)
        res.status(500).json(error)
    }
}
- getBook function handle the request
- mtlab iss k pass rquest ayegi tab ye kya karega
- tab ye book(variable) m Book database ka data lekar ayega
- aur usse return ker dega

### 5) Handle ho gyi request(request aygi kase)

- express import karo
- getBook import (jo ane per handle karega)
- request route per ayegi(const router = express.Router())
- sari router ki property (router variable k pass)
- (router.get("/", getBook))
- mtlab jase hi (/) legaye vase hi request aa jaye aur usse getBook handle ker le

### 6) (/) per ate hi request chalu ho gyi but kis route domain per request user k pass jani chiye

- uss n liye (5) bali file ko import ker lege = called(a)
- (app.use("/book" , a)) mtlab (/book) per jase hi jaye vase hi (/) per jo data handle kiya tha bo clent k pass cahe jaye
- an uss time jab router define kiya tha tab (/) route per data handle ho jaye
- and in index.js hmm n (/) -- > (/book) ho jaye tab handle kare ko bola h

### 7) check in post amaster it work completely

## Step 4 (Acess mongodb data to frontened)

### mongo db m sucessful data le liya ab usse frontened m use karege

#### 1) install axios in frontened

#### 2) Configure frontened to backened

- import cors(npm)
- (import  cors  from "cors";)
- (app.use(cors())) after (const app = express())

#### 3) use the data(go the frontened component where we use data)

- Import axios (import axios from 'axios';)

##### Handle the data

- const [book, setbook] = useState([])
    useEffect(() => {
        const getBook = async () => {
            try {
                const res = await axios.get("<http://localhost:4001/book>")
                console.log(res.data)
                setbook(res.data)
            } catch (error) {
                console.log("Error:", error)
            }
        }
        getBook();
    }, [])

  - In this we store the data from the backend to the variable book with error handling
  - handle all data inside a function and get this lonk from the postman
  - then where we want to use data. use (book) as a variable at that place

##### To handle the data with a specific conditon

- const [book, setbook] = useState([])
    useEffect(() => {
        const getBook = async () => {
            try {
                const res = await axios.get("<http://localhost:4001/book>")
                console.log(res.data.filter((data) => {
                    return data.category === 'Free'
                }))
                setbook(res.data.filter((data) => {
                    return data.category === 'Free'
                }))
            } catch (error) {
                console.log("Error:", error)
            }
        }
        getBook();
    }, [])

## Step 5 (how to take data from the user)(LOGIN OR SIGNUP)(BACKEND)

### 1) app.use(express.json())

- To Take the data from the body

### 2) bcrypt js

- To make password secure

### 3) LOGIN & SIGNUP(ALL DONE IN PREVIOUS EXPLANATATION)

- First create a data model (user model)
- Then define the controller(DISCUSS LATER)
- Define routes (router.post("/login", login))
- Import routes in index.js(import userRoute from "./route/user.route.js")
- Define EXPRESS routes (app.use("/users",userRoute))
- Final URL(localhost:3000/users/login) --> Call express by using owm router then own router call backend where all handlong done

### 4) CONTROLLER(FORMATE SAME AS THE PREVIOUS DESCISION)

#### SIGNUP (ONE THING (ASYN) and (AWAIT) where any work with data)

##### 1) Take data from the body

- const { fullname, email, password } = req.body

##### 2) Check email put not already exit(if yes return a res error)

- (const user = await User.findOne({ email }))

##### 3) Take data with make data secure

- const hashpassword = await bcryptjs.hash(password, 10)
        const createUser = new User({
            fullname: fullname,
            email: email,
            password: hashpassword,
        })
        await createUser.save()

#### LOGIN

##### 1) check email not exit

- const user = await User.findOne({ email })

##### 2) check password incorrect for the given mail

- const isMatch = await bcryptjs.compare(password,user.password)

##### 3) if yes show the data as output

## Step 6(LOGIN AND SIGNUP)(FROENTED CONFIGURE)

### SIGN IN

#### 1) Take input we need

#### 2) handle the post rquest using axois and post take two argument (URL and DATA)

#### 3) Data aa jaye to sucessful h berna nahi h

#### 4) error k time per jo controller m define kiya tha bo hi bej do

#### 5) for controller working checker postmaster  and frontened use browser console

## step 7(to store data in local storage)

- localStorage.setItem("Users", JSON.stringify(res.data.user))
- res.data
- idher user m bo controller ka variable h jidher data aa ker store hua h

## step 8 (alert in frontened data handler) make romantatic

- 1) localStorage.removeItem("Users")
- 2) window.location.reload()
- 3) Set timeout function

### navigate to the route without use link or anything and main use see in the signup component jsk page :-

- 4) const navigate = useNavigate();
- 5) navigate("/", { replace: true }); // Redirect to /
