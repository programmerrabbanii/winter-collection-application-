import { Link } from "react-router-dom";

const DonationCard = ({ donate }) => {
  const { id, title, image, description, status, contactInfo, division } =
    donate;
  return (
    <div className="transition-transform transform hover:scale-105 hover:shadow-lg duration-300">
      <div className="card bg-base-100 shadow-xl hover:shadow-2xl h-auto flex flex-col">
        <figure className="relative overflow-hidden">
          <img
            className="object-cover w-full h-48 transition-transform duration-300 transform hover:scale-110"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body flex flex-col justify-between p-4">
          <h2 className="card-title text-xl font-semibold">{title}</h2>
          <p className="text-sm text-gray-600">{description}</p>
          <p className="text-sm text-gray-500">{division}</p>
          <div className="card-actions justify-end mt-4">
            <Link
              to={`/donation/${id}`}
              className=" py-2 px-6 rounded-sm text-lg btn-primary bg-orange-300 text-white transform transition-all duration-300  hover:rotate-2"
            >
             Donate Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;
