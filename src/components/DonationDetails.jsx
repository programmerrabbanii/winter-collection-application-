import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DonationDetails = () => {
    const donation = useLoaderData();
    // console.log(donation);
    const { id, title, image, description, status, contactInfo, division } =
        donation;

    const handleFormSubmit = (e) => {
        e.preventDefault();
        toast.success("Thank you! We will reach your destination soon", {
            position: "top-center",
            autoClose: 3000,
        });
        e.target.reset();
    };

    return (
        <div className="p-6 mt-8">
            <h2 className="text-3xl  font-bold">{title}</h2>
            <img
                src={image}
                alt={title}
                className="w-full h-64 object-cover rounded-lg mt-4"
            />
            <p className="mt-6">{description}</p>
            <p>
                <strong>Division:</strong> {division}
            </p>
            <p>
                <strong>Contact Info:</strong> {contactInfo}
            </p>
            <p>
                <strong>Status:</strong> {status}
            </p>

            <form onSubmit={handleFormSubmit} className="mt-6">
                <h3 className="text-xl font-semibold">Donation Form</h3>
                <div className="mb-4">
                    <label htmlFor="quantity" className="block mb-2">
                        Quantity of item
                    </label>
                    <input
                        type="number"
                        id="quantity"
                        name="quantity"
                        required
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="itemType" className="block mb-2">
                        Item Types
                    </label>
                    <input
                        type="text"
                        id="itemType"
                        name="itemType"
                        required
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="pickupLocation" className="block mb-2">
                        Pickup Location
                    </label>
                    <input
                        type="text"
                        id="pickupLocation"
                        name="pickupLocation"
                        required
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="additionalNotes" className="block mb-2">
                        Additional Notes (Optional)
                    </label>
                    <textarea
                        id="additionalNotes"
                        name="additionalNotes"
                        rows="3"
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-orange-300 text-white py-2 px-4 rounded"
                >
                    Submit Donation
                </button>
            </form>

            <ToastContainer />
        </div>
    );
};

export default DonationDetails;
