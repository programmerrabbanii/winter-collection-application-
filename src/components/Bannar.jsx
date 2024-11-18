const Bannar = () => {
  return (
    <div>
      <div
        className="hero min-h-screen "
        style={{
          backgroundImage:
            "url(https://i.ibb.co.com/XyzCsX0/stock-photo-cardboard-box-donated-accessories-clothes-footwear-isolated-white-charity-concept.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold"> Welcome to the Winter Clothing <br />Donation Campaign
            </h1>
            <p className="mb-5 w-7/12 mx-auto">
            Join us in spreading warmth and compassion this winter. Together, we can bring comfort and hope to those in need by donating winter clothing and making a meaningful difference in their lives. Your small effort can bring a big smile to someone this season.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bannar;
