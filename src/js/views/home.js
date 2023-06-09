import React, { useState, useEffect, useContext } from "react";

import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { ContactCard } from "../component/ContactCard";
import { Context } from "../store/appContext";

export const Home = () => {
  const { store, actions } = useContext(Context);

  const { contacts, numero } = store;

  return (
    <div className="d-flex flex-column justify-center">
    <div className="list-group contact-list">
      {contacts.map((contacts, index) => (
        <ContactCard
          name={contacts.name}
          address={contacts.address}
          email={contacts.email}
          telephone={contacts.telephone}
          img={rigoImage}
          index={index}
        />
      ))}
    </div>
  </div>
  );
};
