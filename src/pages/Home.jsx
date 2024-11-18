import About from "../components/About";
import Bannar from "../components/Bannar";
import DonationInfo from "../components/DonationInfo";

const Home = () => {
    return (
        <div>
           <Bannar></Bannar>     
           <About></About>       
           <DonationInfo></DonationInfo>
        </div>
    );
};

export default Home;