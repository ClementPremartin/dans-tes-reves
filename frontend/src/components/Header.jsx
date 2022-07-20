/* eslint-disable import/no-unresolved */
import Logo from "@assets/logo-dtr-dark.png";

function Header() {
  return (
    <div className="bg-lightBlue pl-3 pr-3 pt-2 pb-14">
      <img src={Logo} alt="logo flower" className="flex w-24" />
      <h1 className="font-sansita text-4xl text-white flex justify-center pt-8">
        Dans tes rêves
      </h1>
    </div>
  );
}

export default Header;
