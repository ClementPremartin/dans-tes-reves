import { useState } from "react";

function ContactForm() {
  const [userMessage, setUserMessage] = useState({
    email: "",
    lastname: "",
    firstname: "",
    company: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserMessage({ ...userMessage, [name]: value });
  };

  return (
    <div>
      <form>
        <label type="email" className="text-white font-varta">
          Email
          <input
            type="text"
            id="email"
            name="email"
            required
            className="w-full rounded-full bg-darkBlue opacity-75 p-2 text-left mb-5"
            onChange={(e) => handleChange(e)}
            value={userMessage.email}
          />
        </label>
        <label type="lastname" className="text-white font-varta">
          Nom
          <input
            type="text"
            id="lastname"
            name="lastname"
            required
            className="w-full rounded-full bg-darkBlue opacity-75 p-2 text-left mb-5"
            onChange={(e) => handleChange(e)}
            value={userMessage.lastname}
          />
        </label>
        <label type="firstname" className="text-white font-varta">
          Prénom
          <input
            type="text"
            id="fisrtname"
            name="firstname"
            required
            className="w-full rounded-full bg-darkBlue opacity-75 p-2 text-left mb-5"
            onChange={(e) => handleChange(e)}
            value={userMessage.firstname}
          />
        </label>
        <label type="company" className="text-white font-varta">
          Structure
          <input
            type="text"
            id="company"
            name="company"
            required
            className="w-full rounded-full bg-darkBlue opacity-75 p-2 text-left mb-5"
            onChange={(e) => handleChange(e)}
            value={userMessage.company}
          />
        </label>
        <label type="textarea" className="text-white font-varta">
          Votre message
          <input
            type="text"
            id="message"
            name="message"
            required
            className="w-full rounded-full bg-darkBlue opacity-75 p-2"
            onChange={(e) => handleChange(e)}
            value={userMessage.message}
          />
        </label>
        <div className="flex justify-center m-10">
          <button
            type="button"
            className="bg-darkBlue pl-5 pr-5 pb-2 pt-2 rounded-full text-white font-varta font-semibold text-lg transition hover:bg-slate-800 hover:scale-105"
          >
            Envoyer
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
