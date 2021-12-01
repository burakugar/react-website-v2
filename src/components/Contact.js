import React, { useState, useEffect } from "react";
import { db } from "../components/firebase";
import "../components/Contact.css"
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [surname, setSurname] = useState("");
  const [kurumismi, setKurumIsmi] = useState("");
  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        surname: surname,
        email: email,
        kurumismi: kurumismi,
      })
      .then(() => {
        setLoader(false);
        alert("Talebiniz İletildi ☑️");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setSurname("");
    setEmail("");
    setKurumIsmi("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>Talep Formu </h1>

      <label>İsim</label>
      <input
        placeholder="İsim"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>Soyisim</label>
      <input
        placeholder="Soyisim"
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
      />
      <label>E-mail</label>
      <input
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Kurum</label>
      <input
        placeholder="Şirket İsmi"
        value={kurumismi}
        onChange={(e) => setKurumIsmi(e.target.value)}
      ></input>

      <button
        type="submit"
        style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
      >
        Gönder
      </button>
    </form>
  );
};

export default Contact;
