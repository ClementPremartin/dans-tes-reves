/* eslint-disable import/no-unresolved */
import Footer from "@components/Footer";
import Header from "@components/Header";
import LoginForm from "@components/LoginForm";

import CloudMid from "@assets/cloud-mid.png";

function Admin() {
  return (
    <div>
      <Header />
      <div className="m-8">
        <h1 className="font-sansita text-4xl text-white flex justify-center pt-12 pb-20">
          C'est la booooss
        </h1>
        <LoginForm />
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
