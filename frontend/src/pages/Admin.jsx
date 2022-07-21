/* eslint-disable import/no-unresolved */
import Footer from "@components/Footer";
import Header from "@components/Header";
import LoginForm from "@components/LoginForm";

import CloudMid from "@assets/cloud-mid.png";
import CloudRight from "@assets/cloud-right.png";

function Admin() {
  return (
    <div>
      <Header />
      <div className="m-8">
        <div className="w-40 absolute right-0 pt-14 opacity-80 cloud-right">
          <img src={CloudRight} alt="tiny cloud" />
        </div>
        <h1 className="font-sansita text-4xl text-white flex justify-center pb-20">
          C'est la booooss
        </h1>
        <div className="pt-16 pb-16 bg-darkBlue opacity-75 rounded-lg">
          <p className="flex justify-center font-sansita text-2xl text-white mb-12">
            Login
          </p>
          <LoginForm />
        </div>
      </div>
      <div className="w-48 relative opacity-80 cloud-mid">
        <img src={CloudMid} alt="tiny cloud" />
      </div>
      <div className="flex justify-center">
        <Footer />
      </div>
    </div>
  );
}

export default Admin;
