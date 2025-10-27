"use client";
import React, { useState } from "react";
import { useI18n } from "@/lib/i18n/LanguageProvider";
import {
  Mail,
  Phone,
  MessageSquare,
  Calendar,
  FileText,
  Users,
} from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const { t } = useI18n();

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A76] mb-4">
          {t("contact.title")}
        </h2>
        <p className="text-xl text-gray-700 font-medium mb-2">
          {t("contact.subtitle")}
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-6 text-gray-600">
          <div className="flex items-center space-x-2">
            <Calendar className="w-5 h-5 text-[#1E3A76]" />
            <span>{t("contact.action.demo")}</span>
          </div>
          <div className="flex items-center space-x-2">
            <FileText className="w-5 h-5 text-[#1E3A76]" />
            <span>{t("contact.action.trial")}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="w-5 h-5 text-[#1E3A76]" />
            <span>{t("contact.action.proposal")}</span>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold text-[#1E3A76] mb-6">
              {t("contact.info.title")}
            </h3>
            <p className="text-lg font-medium text-gray-800 mb-6">
              {t("contact.info.company")}
            </p>
            <div className="space-y-5">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#1E3A76] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-1">
                    {t("contact.info.email")}
                  </p>
                  <a
                    href="mailto:seaverse@sealearning.com"
                    className="text-[#1E3A76] hover:underline"
                  >
                    seaverse@sealearning.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#1E3A76] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-1">
                    {t("contact.info.phone")}
                  </p>
                  <a
                    href="tel:+6566036800"
                    className="text-gray-700 hover:text-[#1E3A76]"
                  >
                    +65 6603 6800
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#25D366] rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-1">
                    {t("contact.info.whatsapp")}
                  </p>
                  <a
                    href="https://wa.me/6591234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-[#25D366]"
                  >
                    +65 9123 4567
                  </a>
                  <p className="text-sm text-gray-500 mt-1">
                    {t("contact.info.support")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Demo Request Form */}
        <div>
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <h3 className="text-2xl font-semibold text-[#1E3A76] mb-6">
              {t("contact.form.title")}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {t("contact.form.name.label")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A76] focus:border-transparent transition-colors"
                  placeholder={t("contact.form.name.placeholder")}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {t("contact.form.email.label")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A76] focus:border-transparent transition-colors"
                  placeholder={t("contact.form.email.placeholder")}
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {t("contact.form.company.label")}
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A76] focus:border-transparent transition-colors"
                  placeholder={t("contact.form.company.placeholder")}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {t("contact.form.message.label")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A76] focus:border-transparent transition-colors resize-none"
                  placeholder={t("contact.form.message.placeholder")}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#1E3A76] text-white py-3.5 px-6 rounded-lg font-semibold hover:bg-[#162d5a] transition-colors duration-200 focus:ring-2 focus:ring-[#1E3A76] focus:ring-offset-2 shadow-md"
              >
                {t("contact.form.submit")}
              </button>

              <p className="text-xs text-gray-500 text-center mt-4">
                {t("contact.form.response")}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
