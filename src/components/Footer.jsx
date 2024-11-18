import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <p>Email: <a href="winterdontaion@gmail.com" className="text-blue-400 hover:underline">winterdontaion@gmail.com</a></p>
            <p>Phone: +880 1234 567 890</p>
            <p>Address: Dhaka, Bangladesh</p>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 flex items-center">
                <FaFacebookF className="mr-2" /> Facebook
              </a>
              <a href="#" className="hover:text-blue-400 flex items-center">
                <FaTwitter className="mr-2" /> Twitter
              </a>
              <a href="#" className="hover:text-blue-400 flex items-center">
                <FaInstagram className="mr-2" /> Instagram
              </a>
              <a href="#" className="hover:text-blue-400 flex items-center">
                <FaLinkedinIn className="mr-2" /> LinkedIn
              </a>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Subscribe to Newsletter</h3>
            <p>Stay updated with our latest news and events.</p>
            <form className="mt-4">
              <input
                type="email"
                placeholder="Your email"
                className="p-2 w-full rounded-md mb-2"
              />
              <button className="btn btn-primary w-full">Subscribe</button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-4">
          <p>&copy; 2024 Winter Clothing Initiative. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
