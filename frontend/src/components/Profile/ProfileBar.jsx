import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

    

    
function ProfileBar() {

    //const [userData, SetuserData] = useState(null);
    const userData = useSelector((state) => state.auth.userData)
    // console.log("authStatus", authStatus);
    // console.log("userData", userData);
    // const dispatch = useDispatch()
    // const navigate = useNavigate()






    return (
        <>
            <div className="profbar bg-sky-200 w-full h-16 flex flex-row justify-center gap-4 items-center">
            <Link className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-700" to="/profile/events">Events</Link>
            <Link className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-700" to="/profile/availability">Availablity</Link>
            {(userData.user.role==="admin")&&(<Link className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-700" to="/login">Dashboard</Link>)}
                
            </div>
        </>
    )
}

export default ProfileBar