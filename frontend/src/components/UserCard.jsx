import { Link } from "react-router-dom";

function UserCard({user}) {
    return (
        <>
        <Link to="/profile/dashboard/user" className="usercard bg-teal-50  h-auto flex justify-center items-center w-4/5 rounded-md border border-teal-600 border-solid no-underline hover:bg-teal-100 ">
            <div className="usercard bg-teal-50  h-auto flex flex-row justify-center gap-4 items-center w-full rounded-md border border-teal-600 border-solid hover:bg-teal-100">
                <div className="flex flex-row justify-evenly items-center break-words w-full">
                    <div className="w-1/5">
                        <img  src={user.avatar}/>
                    </div>
                    <div className="w-4/5 flex flex-col text-left">
                        <h4 className="px-8">Name: {user.name}</h4>
                        <h4 className="px-8">Email: {user.email}</h4>
                    </div>
                    
                </div>
                
            </div>
        </Link>
        </>
    );
}

export default UserCard;