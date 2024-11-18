const ExtraSections = () => {
  return (
    <div>
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Impact</h2>
          <p className="text-gray-600 mb-8">
            Together, we’ve made a difference in thousands of lives. Here’s how
            your contributions have helped:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white shadow-md rounded-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                5,000+
              </h3>
              <p className="text-gray-600">Winter clothes distributed</p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                1,200+
              </h3>
              <p className="text-gray-600">Families supported</p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                300+
              </h3>
              <p className="text-gray-600">Volunteers participated</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-6">What Our Donors Say</h2>
        <p className="text-lg mb-8">Here’s what people say about their experience with our initiative.</p>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md max-w-xs">
            <img
              src="https://i.ibb.co.com/s1sFXB6/428703739-3761508570801021-8030887461532619243-n.jpg"
              alt="Donor 1"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <p className="italic mb-4">"This initiative is amazing! It's so easy to donate, and knowing that my clothing is going to someone in need is very fulfilling."</p>
            <p className="font-semibold">Gias Uddin Hasan</p>
            <p>Donor</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md max-w-xs">
            <img
              src="https://i.ibb.co.com/x18pj9t/download-21.jpg"
              alt="Donor 2"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <p className="italic mb-4">"I’ve been able to help so many people through this platform, and it’s made me feel more connected to my community."</p>
            <p className="font-semibold">Kim Taehyung</p>
            <p>Donor</p>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default ExtraSections;
