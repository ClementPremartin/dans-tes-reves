/* eslint-disable import/no-unresolved */
import Presentation from "@components/Presentation";
import Sections from "@components/Sections";

import CloudRight from "@assets/cloud-right.png";
import CloudMid from "@assets/cloud-mid.png";

function Home() {
  return (
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
  );
}

export default Home;
