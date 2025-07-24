import { pageStyle } from "@styles/pages";
import ContactForm from "@components/ContactForm";
import PageSection from "@components/PageSection";
import { FaMapMarker, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

function Contact() {
  return (
    <div className={ pageStyle.container }>
      <PageSection title="We are here to help" subtitle="Get in touch with us anytime, anywhere! We will respond to you within 24 hours.">
        <div className="flex flex-col items-left space-y-1">
          <div className="flex items-center gap-2">
            <FaMapMarker className="text-primary" />
            <span>123 Learning St, Knowledge City</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-primary" />
            <span>ofarooqdev@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-primary" />
            <span>+966 534 2XXXX, +234 813 862 XXXX</span>
          </div>
        </div>
      </PageSection>
      <PageSection title="Contact Us" subtitle="We’re just a message away — let’s start a conversation.">
        <ContactForm />
      </PageSection>
    </div>
  );
}

export default Contact;
