/* eslint-disable import/no-unresolved */
import AddCreation from "@components/admin/AddCreation";
import DeleteCreation from "@components/admin/DeleteCreation";
import Footer from "@components/Footer";
import Header from "@components/Header";

import CloudMid from "@assets/cloud-mid.png";
import CloudRight from "@assets/cloud-right.png";
import Minion from "@assets/minion.svg";
import AddSerie from "@components/admin/AddSerie";
import UpdatePresentation from "@components/admin/UpdatePresentation";

function AdminArtCreation() {
  return (
    <div>
      <Header />
      <div className="m-8">
        <div className="w-48 relative opacity-80 cloud-mid">
          <img src={CloudMid} alt="tiny cloud" />
        </div>
        <h1 className="text-white font-sansita text-3xl pt-12 pb-12">
          Gestion des créations
        </h1>
        <AddCreation />
        <div className="w-48 absolute right-0 pt-28 opacity-80 cloud-right">
          <img src={CloudRight} alt="tiny cloud" />
        </div>
        <DeleteCreation />
        <AddSerie />
        <UpdatePresentation />
      </div>
      <div className="flex justify-center">
        <div className="w-48 opacity-80 cloud-right mb-5">
          <img src={CloudRight} alt="tiny cloud" />
        </div>
      </div>
      <div className="w-48 relative opacity-80 left-10 bottom-10 cloud-mid">
        <img src={Minion} alt="tiny minion" />
      </div>
      <div className="flex justify-center">
        <Footer />
      </div>
    </div>
  );
}

export default AdminArtCreation;
