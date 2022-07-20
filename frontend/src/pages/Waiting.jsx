/* eslint-disable import/no-unresolved */
import Logo from "@assets/logo-dtr-dark.png";
import CloudMid from "@assets/cloud-mid.png";
import CloudLeft from "@assets/cloud-left.png";

function Waiting() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="absolute top-20 left-0 opacity-80 cloud-left-leave w-64">
        <img src={CloudLeft} alt="tiny cloud" />
      </div>
      <img src={Logo} alt="logo flower" className="w-72 z-40" />
      <div className="absolute bottom-36 right-1 opacity-80 cloud-mid w-64 z-50 cloud-mid-leave">
        <img src={CloudMid} alt="tiny cloud" />
      </div>
    </div>
  );
}

export default Waiting;
