/* eslint-disable import/no-unresolved */
import ContactForm from "@components/ContactForm";

import Navbar from "@components/Navbar";
import Header from "@components/Header";
import Footer from "@components/Footer";

import CloudMid from "@assets/cloud-mid.png";
import CloudRight from "@assets/cloud-right.png";
import CloudLeft from "@assets/cloud-left.png";

function Contact() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="m-8">
        <div className="w-40 relative opacity-80 cloud-mid">
          <img src={CloudMid} alt="tiny cloud" />
        </div>
        <h1 className="font-sansita text-white text-3xl pb-16 pt-12">
          Me contacter
        </h1>
        <div className="w-40 absolute right-0 pt-28 opacity-80 cloud-right">
          <img src={CloudRight} alt="tiny cloud" />
        </div>
        <ContactForm />
        <div className="w-40 relative right-0 left-14 opacity-80 cloud-left">
          <img src={CloudLeft} alt="tiny cloud" />
        </div>
      </div>
      <div className="flex justify-center">
        <Footer />
      </div>
    </div>
  );
}

export default Contact;
