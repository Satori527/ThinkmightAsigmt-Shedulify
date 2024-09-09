import AvailabilitySelector from "../../widgets/AvailabilitySelector";
import ProfileBar from "./ProfileBar";
const Availability = () => {

    return (
        <>
            <ProfileBar className="w-full"/>
            <h1 className="text-teal-400">Availability</h1>
            <AvailabilitySelector />
        </>
    )
}

export default Availability;