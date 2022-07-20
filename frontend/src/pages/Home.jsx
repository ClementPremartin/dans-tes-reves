/* eslint-disable import/no-unresolved */
import Presentation from "@components/Presentation";
import Sections from "@components/Sections";
import Navbar from "@components/Navbar";
import Header from "@components/Header";
import Footer from "@components/Footer";

import CloudRight from "@assets/cloud-right.png";
import CloudMid from "@assets/cloud-mid.png";

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="m-8">
        <Presentation />
        <div className="w-40 absolute right-0 pt-28 opacity-80 cloud-right">
          <img src={CloudRight} alt="tiny cloud" />
        </div>
        <Sections />
        <div className="w-40 relative opacity-80 cloud-mid">
          <img src={CloudMid} alt="tiny cloud" />
        </div>
      </div>
      <div className="flex justify-center">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
