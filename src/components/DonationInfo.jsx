const DonationInfo = () => {
    return (
      
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
         
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          How It Works Section
          </h2>
  

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            <div className="bg-white p-6 shadow-md rounded-md"  data-aos="flip-left">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                How to Donate
              </h3>
              <p className="text-gray-600 mb-4">
                Contribute in just a few steps:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Select warm clothes in good condition.</li>
                <li>Pack them properly.</li>
                <li>Drop them at our collection points or request a pickup.</li>
              </ul>
            </div>
  
            
            <div className="bg-white p-6 shadow-md rounded-md data-aos=flip-left">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Collection Points
              </h3>
              <p className="text-gray-600 mb-4">
                Find us in these cities:
              </p>
              <ul className="list-none space-y-2">
                {[
                  "Dhaka (Gulshan, Dhanmondi)",
                  "Chattogram (GEC Circle)",
                  "Rajshahi (New Market)",
                  "Khulna (Shibbari)",
                  "Sylhet (Zindabazar)",
                  "Barishal (Bell's Park)",
                  "Rangpur (Station Road)",
                  "Mymensingh (Ganginar Par)",
                ].map((point, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-gray-600"
                  >
                    <span className="w-2 h-2 bg-orange-300 rounded-full"></span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
  
           
            <div className="bg-white p-6 shadow-md rounded-md"  data-aos="flip-left">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Supported Divisions
              </h3>
              <p className="text-gray-600 mb-4">
                We operate in these regions:
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Dhaka",
                  "Chattogram",
                  "Rajshahi",
                  "Khulna",
                  "Sylhet",
                  "Barishal",
                  "Rangpur",
                  "Mymensingh",
                ].map((division, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-md"
                  >
                    {division}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div> 
      </div>
    );
  };
  
  export default DonationInfo;


  
  