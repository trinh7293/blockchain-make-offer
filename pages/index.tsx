import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [collection, setCollection] = useState("");
  const makeOffer = () => {
    alert(collection);
  };
  return (
    <div>
      <span>{collection}</span>
      <br />
      <input type="text" onChange={(e) => setCollection(e.target.value)} />
      <button onClick={makeOffer}>make offers</button>
    </div>
  );
};

export default Home;
