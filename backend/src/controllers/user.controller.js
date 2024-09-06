import { Availability, User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const generateAccessAndRefereshTokens = async(userId) =>{
    try {
        const user = await User.findById(userId)
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()

        user.refreshToken = refreshToken
        await user.save({ validateBeforeSave: false })

        return {accessToken, refreshToken}


    } catch (error) {
        throw new ApiError(500, "Something went wrong while generating referesh and access token")
    }
}

const helloTest = asyncHandler( async (req, res) => {
    res.status(200).send("Hello World");
})

const registerUser = asyncHandler( async (req, res) => {
    
    const {name, email, role, password} = req.body;
    
    console.log("email: ",email);

    if (
    ([name, email, password, role].some((field) => field?.trim() === ""))
    ) {
        throw new ApiError(400, "All fields are required")
    }
    /*
    else{
        res.status(200).json({
            "Name": name,
            "Email": email,
            "Role": role,
            "avatar": `https://robohash.org/${email}\.png?size=50x50&set=set1`,
            "availability": availability
        })
    }
    */
    
    const existingUser = await User.findOne({ email: email })

    if(existingUser){
        throw new ApiError(409, "User with email already exists")
    }

    const createdUser = await User.create({
        name,
        email,
        password,
        role,
        avatar:`https://robohash.org/${email}\.png?size=50x50&set=set1`,
        availability: await Availability.create({
            monday: {
                from: "09:00",
                to: "05:00",
                active: true
            },
            tuesday: {
                from: "09:00",
                to: "05:00",
                active: true
            },
            wednesday: {
                from: "09:00",
                to: "05:00",
                active: true
            },
            thursday: {
                from: "09:00",
                to: "05:00",
                active: true
            },
            friday: {
                from: "09:00",
                to: "05:00",
                active: true
            },
            saturday: {
                from: "09:00",
                to: "05:00",
                active: false
            },
            sunday: {
                from: "09:00",
                to: "05:00",
                active: false
            }
        })
        
    })

    if(!createdUser){
        throw new ApiError(400, "User not created")
    }

    return res.status(201).json(
        new ApiResponse(201, createdUser, "User registered successfully")
    )
    
})

const loginUser = asyncHandler( async (req, res) => {
    const {email, password} = req.body
    console.log(email);

    console.log(password,"/n");

    if (!email) {
        throw new ApiError(400, "username or email is required")
    }

    const user = await User.findOne({email:email})

    if (!user) {
        throw new ApiError(404, "User does not exist")
    }

    const isPasswordValid = await user.isPasswordCorrect(password)

    if (!isPasswordValid) {
    throw new ApiError(401, "Invalid user credentials")
    }

    const {accessToken, refreshToken} = await generateAccessAndRefereshTokens(user._id)

    const loggedInUser = await User.findById(user._id).select("-password -refreshToken")

    const options = {
        httpOnly: true,
        secure: true
    }

    return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
        new ApiResponse(
            200,
            {
                user: loggedInUser, accessToken, refreshToken
            },
            "User logged In Successfully"
        )
    )

})

const logoutUser = asyncHandler(async(req, res) => {
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $unset: {
                refreshToken: 1 // this removes the field from document
            }
        },
        {
            new: true
        }
    )

    const options = {
        httpOnly: true,
        secure: true
    }

    return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {}, "User logged Out"))
})

const updateAvailability = asyncHandler( async (req, res) => {

    const userAvailability = req.body.availability;

    const updatedUser = await User.findByIdAndUpdate(
        req.user._id,
        {
            $set: {
                Availability: userAvailability
            }
        },
        {
            new: true
        }
    )

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

export { helloTest, loginUser, logoutUser, registerUser };

