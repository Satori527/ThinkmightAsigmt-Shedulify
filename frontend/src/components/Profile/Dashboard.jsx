import { useEffect, useState } from "react";
import UserCard from "../UserCard";
//import { useSelector } from "react-redux";
import { axiosAPI } from "../../api/axiosAPI";



const Dashboard = () => {


    const [users, setUsers] = useState([]);
    const [error, setError] = useState({});
    const mapUsers = ["a", "b", "c", "d"];

    const UsersFetcher = async() => {
        
        try{
            const response = await axiosAPI.get('/users/admin/users')
            console.log("res :", response.data);

            setUsers(response.data)
            //mapUsers.push(...response.data.data)
            console.log("done")
            console.log("users :",users)
            console.log("map users 1:", mapUsers)
            
            //console.log("av data2 :",userData.user);
            
            
        }catch(err){
            console.log(err.response);
            setError(err.response)
        }
    }

    useEffect(() => {
        UsersFetcher()
    }, [])



    return (
        <>
            <h1 className="text-teal-400">Dashboard</h1>
            <div className="flex flex-col justify-evenly items-center w-full">
                <div className="w-full">
                    <h1>Create Events</h1>
                </div>

                <div className="w-full flex flex-col justify-evenly items-center gap-4">
                    <h2>users</h2>
                    {console.log("users 2:", users)}
                    {users.map((user) => (
                        <UserCard key={user} user={user} />
                        
                    ))}
                </div>
            </div>
        </>
    )
}

export default Dashboard;