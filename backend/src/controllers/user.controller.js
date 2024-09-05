import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";



const helloTest = asyncHandler( async (req, res) => {
    res.status(200).send("Hello World");
})

const createUser = asyncHandler( async (req, res) => {
    
    const {first_name, last_name, email, gender, domain, available } = req.body;
    
    console.log("email: ",email);

    if (
    ([first_name, last_name, email, gender, domain].some((field) => field?.trim() === ""))
    ) {
        throw new ApiError(400, "All fields are required")
    }
    
    else{
        res.status(200).json({
            "First Name": first_name,
            "Last Name": last_name,
            "Email": email,
            "Gender": gender,
            "domain": domain,
            "avatar": `https://robohash.org/${email}\.png?size=50x50&set=set1`,
            "available": available
        })
    }
    
    
    const existingUser = await User.findOne({ email: email })

    if(existingUser){
        throw new ApiError(409, "User with email already exists")
    }

    const user = await User.create({
        first_name,
        last_name,
        email,
        gender,
        domain,
        avatar:`https://robohash.org/${email}\.png?size=50x50&set=set1`,
        available
    })
    
})

const fetchUsers = asyncHandler( async (req, res) => {
    const users = await User.find({})
    res.status(200).json(users)
})

const fetchUserById = asyncHandler( async (req, res) => {
    const {id} = req.params;
    const user = await User.findById(id)
    res.status(200).json(user)
})

const fetchUsersByName = asyncHandler( async (req, res) =>{
    const {name} = req.params
    
    const users = await User.find({
        first_name: name
    })
    
    console.log(users)
    res.send(users)
})

const filterUsersByAvailability = asyncHandler( async (req, res) =>{
    let {available} = req.params
    available = (available === "true");
    const users = await User.find({
        available: available
    })
    res.send(users)
})

export { helloTest };

