import { Facebook, Twitter, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-bl from-[#0e234f] to-[#1E3A76] text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        {/* About */}
        <div>
          <h3 className="text-2xl heading font-bold text-white mb-4">SEAVERSE</h3>
          <p className="text-gray-400 max-w-xs">
            Empowering maritime professionals with innovative learning, compliance tracking, and analytics.
          </p>
          <div className="flex space-x-4 mt-6">
            <a href="#" className="hover:text-white">
              <Facebook size={24} />
            </a>
            <a href="#" className="hover:text-white">
              <Twitter size={24} />
            </a>
            <a href="#" className="hover:text-white">
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Useful Links</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Features</a></li>
            <li><a href="#" className="hover:text-white">Pricing</a></li>
            <li><a href="#" className="hover:text-white">Documentation</a></li>
            <li><a href="#" className="hover:text-white">Support</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
          <div className="flex items-center space-x-3 mb-3">
            <Mail size={20} />
            <a href="mailto:contact@seaverse.com" className="hover:text-white">contact@seaverse.com</a>
          </div>
          <div className="flex items-center space-x-3">
            <Phone size={20} />
            <a href="tel:+1234567890" className="hover:text-white">+1 (234) 567-890</a>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Stay Updated</h4>
          <p className="mb-4 text-gray-400">Subscribe to our newsletter to get the latest updates.</p>
          <form className="flex space-x-2">
            <input
              type="email"
              placeholder="Your email"
              className="w-full rounded-md px-4 py-2 bg-white text-gray-900"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="bg-blue-600 px-5 py-2 rounded-md text-white hover:bg-blue-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-12 pt-6 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Seaverse Maritime Learning Platform. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
