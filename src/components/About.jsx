import { Link } from "react-router-dom";
import aboutPhoto from "../assets/OWC-1200x760.jpeg";

const About = () => {
  return (
    <div className="bg-gray-100 py-12"data-aos="fade-right">
      <h2 className="text-3xl font-semibold text-center mb-8">About</h2>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Image Section */}
          <div className="lg:w-1/2 w-full mb-8 lg:mb-0">
            <img
              src={aboutPhoto}
              alt="About"
              className="rounded-lg shadow-2xl w-full"
            />
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2 w-full lg:pl-8 text-left">
            <h1 className="text-4xl font-bold mb-4">Our Mission</h1>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our mission is to provide warm clothing to underprivileged and
              vulnerable people during the cold winter months. We believe that
              by working together, we can make a significant impact in our
              communities. Through this initiative, we aim to help those who
              struggle to stay warm during the harsh winter, bringing them
              comfort and support through donations.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Purpose</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The purpose of this website is to facilitate the donation of
              winter clothing across Bangladesh. It serves as a platform to
              connect donors with volunteers, ensuring that donated clothes
              reach those who need them the most. We aim to make a positive
              impact on the lives of people facing extreme cold by offering them
              the warmth and support they deserve.
            </p>

            <Link to="/donation" className="py-2 px-6 text-white text-lg rounded-sm bg-orange-300">Donation Now</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
