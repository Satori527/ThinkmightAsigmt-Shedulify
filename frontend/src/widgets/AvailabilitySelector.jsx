import clsx from "clsx";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { axiosAPI } from "../api/axiosAPI";
import TimeSelector from "../components/TimeSelector";
const AvailabilitySelector = () => {


    const userData = useSelector((state) => state.auth.userData);
    const [length, setLength] = useState(30);
    const [availability, setAvailability] = useState(null);
    const [error, setError] = useState({});
    const weekdaysNames = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
    
    console.log("av data1 :",userData.user);
    // console.log("avd a :",userData.user.availability);
    const AvailabilityFetcher = async(data) => {
        
        try{
            const response = await axiosAPI.post('/users/availability', data)
            console.log(response.data);

            setAvailability(response.data.data)
            console.log("done")
            
            
            
            console.log("av data2 :",userData.user);
            
            
        }catch(err){
            console.log(err.response.data);
            setError(err.response.data)
        }
    }

    useEffect(() => {
        AvailabilityFetcher(userData.user)
    }, [])

    const handleAvailabilityTimeChange = (day, time, prop) => {
        setAvailability((oldAvailabilityTimes) => {
            const newAvailabilityTimes = {...oldAvailabilityTimes};
            if (!newAvailabilityTimes[day]) {
                newAvailabilityTimes[day] = {from:'00:00', to:'00:00', active: false};
            }
    
            
            newAvailabilityTimes[day][prop] = time;
            console.log(newAvailabilityTimes);
            console.log("av data3 :",userData.user);
    
            return newAvailabilityTimes;
        });
    }
    const handleSubmit = async (e) => {
        console.log("av data4 :",userData.user);
        e.preventDefault();
        try {
            
            const availabilityResponse = await axiosAPI.post('/users/update-availability', availability)
            console.log("av data5 :",userData.user);
            console.log("update done :",availabilityResponse);
        } catch (err) {
            console.log(err.response);
        }
    }

    return (
        <div>
            <h1>Availability Selector</h1>
            
        <form className="mt-4 p-2 bg-gray-200 rounded-lg" onSubmit={handleSubmit}>
        
        <div className="grid grid-cols-2 gap-4">
        <div>
            <label>
                <span>event length (minutes)</span>
                <input
                type="number"
                placeholder="30"
                value={length}
                onChange={ev => setLength(parseInt(ev.target.value))}
                />
            </label>
            </div>
            <div>
            <span className="label">availability</span>
            <div className="grid gap-2">
                {weekdaysNames.map(day => {
                const active = availability?.[day]?.active;
                return (
                    <div
                    key={day}
                    className="grid grid-cols-2 gap-2 items-center">
                    <label className="flex gap-1 !mb-0 !p-0">
                        <input
                        type="checkbox"
                        value={1}
                        checked={availability?.[day]?.active}
                        onChange={ev => handleAvailabilityTimeChange(day, ev.target.checked, 'active')}
                        />
                        {day}
                    </label>
                    <div className={
                        clsx(
                        "inline-flex gap-2 items-center ml-2",
                        active ? '' : 'opacity-40'
                        )
                    }>
                        <TimeSelector
                        value={availability?.[day]?.from || '00:00'}
                        onChange={val => handleAvailabilityTimeChange(day, val, 'from')}
                        step={30}/>
                        <span>-</span>
                        <TimeSelector
                        value={availability?.[day]?.to || '00:00'}
                        onChange={val => handleAvailabilityTimeChange(day, val, 'to')}
                        step={30}/>
                    </div>
                    </div>
                );
                })}
            </div>
            </div>
        </div>
        <div className="flex gap-4 justify-center">
            <button type="submit" className="btn-blue !px-8">
            Save
            </button>
        </div>
        </form>
    
        </div>
    );
}

export default AvailabilitySelector;