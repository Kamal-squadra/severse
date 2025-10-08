import React from "react";
import ContactForm from "@/components/sections/contact/ContactForm";
import CTAInitiateSection from "@/components/sections/ctaInitiate/CTAInitiateSection";
import FAQSection from "@/components/sections/FAQ/FAQSection";
// import TestimonialsSection from "@/components/sections/testimonials/TestimonialsSection";

const ContactPage = () => {
  return (
    <div>
      <ContactForm />
      {/* <TestimonialsSection /> */}
      <FAQSection />
      <CTAInitiateSection />
    </div>
  );
};

export default ContactPage;
