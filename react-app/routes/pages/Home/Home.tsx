import React from "react";
import Card from "../../../src/components/Card/Card"
import "./Home.css"

const Home = () => {
  return (
    <div className="index_layout">
      <main className="index_content">
        <header className="index_header">
          <img
            className="header_icon"
            src="../../src/assets/Grocasa.png"
            alt="Grocosa.png"
          />
        </header>
        <section>
          <ul className="index_list">
            <li>
              <Card></Card>
            </li>
            <li>
              <Card></Card>
            </li>
            <li>
              <Card></Card>
            </li>
            <li>
              <Card></Card>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Home;