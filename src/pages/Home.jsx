import About from "../components/About";
import Bannar from "../components/Bannar";
import DonationInfo from "../components/DonationInfo";
import ExtraSections from "../components/ExtraSection";

const Home = () => {
    return (
        <div>
           <Bannar></Bannar>     
           <About></About>       
           <DonationInfo></DonationInfo>
           <ExtraSections></ExtraSections>
        </div>
    );
};

export default Home;