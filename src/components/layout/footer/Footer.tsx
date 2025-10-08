"use client";
import { Facebook, Twitter, Linkedin, Mail, Phone } from "lucide-react";
import { useI18n } from "@/lib/i18n/LanguageProvider";

const Footer = () => {
  const { t } = useI18n();
  return (
    <footer className="bg-gradient-to-bl from-[#0e234f] to-[#1E3A76] text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        {/* About */}
        <div>
          <h3 className="text-2xl heading font-bold text-white mb-4">{t("footer.about.title")}</h3>
          <p className="text-gray-400 max-w-xs">
            {t("footer.about.desc")}
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
          <h4 className="text-lg font-semibold text-white mb-4">{t("footer.links.title")}</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">{t("footer.links.features")}</a></li>
            <li><a href="#" className="hover:text-white">{t("footer.links.pricing")}</a></li>
            <li><a href="#" className="hover:text-white">{t("footer.links.docs")}</a></li>
            <li><a href="#" className="hover:text-white">{t("footer.links.support")}</a></li>
            <li><a href="#" className="hover:text-white">{t("footer.links.blog")}</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">{t("footer.contact.title")}</h4>
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
          <h4 className="text-lg font-semibold text-white mb-4">{t("footer.newsletter.title")}</h4>
          <p className="mb-4 text-gray-400">{t("footer.newsletter.desc")}</p>
          <form className="flex space-x-2">
            <input
              type="email"
              placeholder={t("footer.newsletter.placeholder")}
              className="w-full rounded-md px-4 py-2 bg-white text-gray-900"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="bg-blue-600 px-5 py-2 rounded-md text-white hover:bg-blue-700 transition"
            >
              {t("footer.newsletter.cta")}
            </button>
          </form>
        </div>
      </div>

      <div className="mt-12 pt-6 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} {t("footer.copyright")}
      </div>
    </footer>
  );
};

export default Footer;
