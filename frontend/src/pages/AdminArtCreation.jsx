/* eslint-disable import/no-unresolved */
import AddCreation from "@components/admin/AddCreation";
import DeleteCreation from "@components/admin/DeleteCreation";
import Footer from "@components/Footer";
import Header from "@components/Header";

import CloudMid from "@assets/cloud-mid.png";

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
        <DeleteCreation />
      </div>
      <div className="flex justify-center">
        <Footer />
      </div>
    </div>
  );
}

export default AdminArtCreation;
