import React, { useState, useEffect } from "react";
import { db } from "../components/firebase";
import "../components/Communicate.css"
const Communicate = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [surname, setSurname] = useState("");
  const [mesaj, setMesaj] = useState("");
  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        surname: surname,
        email: email,
        mesaj: mesaj,
      })
      .then(() => {
        setLoader(false);
        alert("Mesajınız İletildi ☑️");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setSurname("");
    setEmail("");
    setMesaj("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>İletişim Formu </h1>

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

      <label>Mesaj</label>
      <input
        placeholder="Mesajınız"
        value={mesaj}
        onChange={(e) => setMesaj(e.target.value)}
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

export default Communicate;
