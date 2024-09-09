//import { Link, useNavigate} from "react-router-dom";
//import parse from "html-react-parser";
import { useSelector } from "react-redux";
import ProfileBar from "../components/Profile/ProfileBar";


const Profile = () => {

    

    const userData = useSelector((state) => state.auth.userData);
    if(userData === null){
        return(
            <>
                <h1 className="text-teal-400">Login or Signup First to view Profile</h1>
            </>)
    }
    return (
        < >
            <ProfileBar className="w-full"/>
            <h1 className="text-teal-400 ">{JSON.stringify(userData.user)}</h1>
            
        </>
    )
}

export default Profile;