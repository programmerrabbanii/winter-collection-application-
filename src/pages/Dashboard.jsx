import { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="bg-gray-100 p-8">
      {/* Welcome Title */}
      <h1 className="text-3xl font-bold mb-4">
        Welcome To, {user?.displayName || "User"}!
      </h1>

      {/* Profile Information */}
      <div className="bg-white shadow-md p-6 rounded-md">
        <img
          src={user?.photoURL || "https://via.placeholder.com/150"}
          alt="Profile"
          className="w-24 h-24 rounded-full mb-4"
        />
        <p className="text-lg">
          <strong>Name:</strong> {user?.displayName || "N/A"}
        </p>
        <p className="text-lg">
          <strong>Email:</strong> {user?.email || "N/A"}
        </p>

        {/* Update Profile Button */}
        <Link to="/update-profile">
          <button className="mt-4  bg-orange-300 py-2 px-6 rounded-sm text-white">Update Profile</button>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
