import { useLoaderData } from "react-router-dom";
import DonationCard from "../components/DonationCard";

const Donation = () => {
    const allDontions=useLoaderData()
    return (
        <div className="w-11/12 mx-auto mt-10">
            <h3 className="text-4xl font-semibold py-4 text-center mb-7"> Donation Campaigns</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    allDontions.map((donate)=> <DonationCard key={donate.id} donate={donate}></DonationCard> )
                }
            </div> 
            
            
        </div>
    );
};  

export default Donation;