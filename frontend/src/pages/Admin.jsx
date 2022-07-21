/* eslint-disable import/no-unresolved */
import Footer from "@components/Footer";
import Header from "@components/Header";
import LoginForm from "@components/LoginForm";

function Admin() {
  return (
    <div>
      <Header />
      <div className="m-8">
        <h1 className="font-sansita text-4xl text-white flex justify-center pt-12 pb-20">
          C'est la booooss
        </h1>
        <LoginForm />
        <div className="flex justify-center">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Admin;
