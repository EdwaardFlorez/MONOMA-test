import React from "react";
import Card from "../../../src/components/Card/Card";
import Grocosa from "../../../src/assets/Grocasa.png";
import map from "../../../src/assets/map.png";
import Carousel from "../../../src/components/carousel/Carousel";
import { useNavigate } from "react-router-dom";

import "./Details.css";

const Details = () => {
  const navigate = useNavigate();
  return (
    <main>
      <header className="header_detail">
        <a onClick={() => navigate("/")}>
          <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 22.16 22"
            width="20px"
          >
            <path
              id="Icon_awesome-arrow-alt-circle-left"
              data-name="Icon awesome-arrow-alt-circle-left"
              className="arrow"
              d="M11.08,22a11,11,0,1,1,11-11A11,11,0,0,1,11.08,22ZM16.22,9.05H11.08V5.9a.54.54,0,0,0-.54-.53.52.52,0,0,0-.37.16L5.1,10.63a.52.52,0,0,0,0,.74h0l5.07,5.1a.54.54,0,0,0,.91-.38V13h5.14a.53.53,0,0,0,.53-.53V9.58A.53.53,0,0,0,16.22,9.05Z"
            />
          </svg>
        </a>

        <img src={Grocosa} alt="grocosa.png" width="110px" />
      </header>
      <Carousel></Carousel>
      <section className="bulding_info_container">
        <h2 className="building_name">Ático Dúplex de Obra Nueva</h2>
        <span className="building_location">
          Marianao, Sant Boi de Llobregat
        </span>
        <p className="building_info">
          Dúplex de obra seminueva en Marianao. Finca del 2019. El piso consta
          de una planta con entrada al salón y final en terraza. El salón da
          entrada a la cocina y al pasillo que distribuye una de las
          habitaciones dobles y uno de los cuartos. de baño de tres piezas..
          Dúplex de obra seminueva en Marianao. Finca del 2019. El piso consta
          de una planta con entrada al salón y final en terraza. El salón da
          entrada a la cocina y al pasillo que distribuye una de las
          habitaciones dobles y uno de los cuartos. de baño de tres piezas..
          Dúplex de obra seminueva en Marianao. Finca del 2019. El piso consta
          de una planta con entrada al salón y final en terraza. El salón da
          entrada a la cocina y al pasillo que distribuye una de las
          habitaciones dobles y uno de los cuartos. de baño de tres piezas..
        </p>
        <article className="index_list_card">
          <div className="info_container">
            <div className="icon_container">
              <div className="icon_flex">
                <i className="icon_area">
                  <svg
                    id="Layer_1"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 25.27 25"
                    width="2.25rem"
                    height="auto"
                  >
                    <path
                      id="Icon_awesome-expand-arrows-alt"
                      data-name="Icon awesome-expand-arrows-alt"
                      className="cls-1"
                      d="M19.47,15.17v3.4a.72.72,0,0,1-.72.72H15.34a.72.72,0,0,1-.72-.73.71.71,0,0,1,.21-.51l1.1-1.1L12.68,13.7,9.43,17l1.1,1.09a.73.73,0,0,1,0,1,.69.69,0,0,1-.51.21H6.61a.72.72,0,0,1-.72-.72h0v-3.4a.73.73,0,0,1,.73-.72.75.75,0,0,1,.51.22l1.1,1.1,3.25-3.26L8.23,9.24l-1.1,1.1a.73.73,0,0,1-1,0,.71.71,0,0,1-.21-.51V6.43a.71.71,0,0,1,.72-.72H10a.73.73,0,0,1,.73.73.75.75,0,0,1-.21.51l-1.1,1.1,3.25,3.25L15.93,8,14.83,7a.73.73,0,0,1,.52-1.24h3.4a.73.73,0,0,1,.73.72h0v3.4a.73.73,0,0,1-.73.73.72.72,0,0,1-.52-.21l-1.1-1.1L13.88,12.5l3.25,3.26,1.1-1.1a.72.72,0,0,1,1,0A.74.74,0,0,1,19.47,15.17Z"
                    />
                  </svg>
                  <span>102m^</span>
                </i>
                <i className="icon_bed">
                  <svg
                    id="Layer_1"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 25.27 25"
                    width="2.25rem"
                  >
                    <path
                      id="Icon_awesome-bed"
                      data-name="Icon awesome-bed"
                      className="cls-1"
                      d="M8.48,12.5a2.33,2.33,0,1,0-2.32-2.33A2.33,2.33,0,0,0,8.48,12.5ZM18.74,8.77H12.22a.47.47,0,0,0-.47.47v4.2H5.22V7.37a.47.47,0,0,0-.46-.47H3.82a.46.46,0,0,0-.46.47h0V17.63a.46.46,0,0,0,.46.47h.94a.47.47,0,0,0,.46-.47v-1.4H20.14v1.4a.47.47,0,0,0,.47.47h.93a.47.47,0,0,0,.47-.47V12a3.27,3.27,0,0,0-3.27-3.26Z"
                    />
                  </svg>
                  <span>3</span>
                </i>
                <i className="icon_bath">
                  <svg
                    id="Layer_1"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 25.27 25"
                    width="2.25rem"
                  >
                    <path
                      id="Icon_awesome-toilet"
                      data-name="Icon awesome-toilet"
                      className="cls-1"
                      d="M17.39,6.93a.43.43,0,0,0,.43-.43V6.07a.42.42,0,0,0-.43-.42H8a.42.42,0,0,0-.43.42V6.5A.43.43,0,0,0,8,6.93H8.4v4.2c-.54.27-.86.59-.86.94a5.13,5.13,0,0,0,2.32,4.3l-.57,1.88a.86.86,0,0,0,.57,1.07,1.07,1.07,0,0,0,.25,0h5.14a.85.85,0,0,0,.86-.85.69.69,0,0,0,0-.25l-.57-1.88a5.14,5.14,0,0,0,2.32-4.3c0-.35-.31-.68-.85-1V6.92Zm-7.71.64a.22.22,0,0,1,.22-.21h1.28a.22.22,0,0,1,.22.21V8a.22.22,0,0,1-.22.22H9.9A.22.22,0,0,1,9.68,8Zm3,5.36c-2.06,0-3.74-.38-3.74-.86s1.68-.85,3.74-.85,3.74.38,3.74.85-1.67.86-3.74.86Z"
                    />
                  </svg>
                  <span>2</span>
                </i>
              </div>
              <div className="price_container">
                <span className="card_price">330.000&euro;</span>
                <svg
                  id="Layer_1"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 25.27 25"
                  width="2rem"
                >
                  <path
                    id="Icon_awesome-heart"
                    data-name="Icon awesome-heart"
                    className="cls-2"
                    d="M21.65,4.09a5.93,5.93,0,0,0-8.11.59l-.86.88-.86-.88a5.93,5.93,0,0,0-8.11-.59,6.24,6.24,0,0,0-.65,8.8l.22.24,8.41,8.69a1.37,1.37,0,0,0,1.93,0s0,0,0,0l8.42-8.69a6.24,6.24,0,0,0-.19-8.83l-.23-.21Z"
                  />
                </svg>
              </div>
            </div>
            <section className="building_details">
              <div className="building_features">
                <h4>Características</h4>
                <span>Ático102 m2 (construidos)</span>
                <span>3 Habitaciones</span>
                <span>Segunda mano100 m2 (útiles)</span>
                <span>Reformado</span>
                <span>2 Baños</span>
              </div>
              <div className="building_extras">
                <h4>Extras</h4>
                <span>Terraza</span>
                <span>Balcón</span>
                <span>Ascensor</span>
                <span>Calefacción</span>
                <span>Aire acondicionado</span>
              </div>
            </section>
            <img className="map" src={map} alt="" />
            <section className="building_contact">
              <span>Avisame si baja</span>
              <input type="checkbox" checked className="switch_1" />
              <button className="btn-34">
                <span>Contactar</span>
              </button>
            </section>
          </div>
        </article>
      </section>
      <footer>
        <h2 className="building_name">También pueden interesarte</h2>
        <section>
          <ul>
            <li>
              <Card></Card>
            </li>
            <li>
              <Card></Card>
            </li>
          </ul>
        </section>
      </footer>
    </main>
  );
};

export default Details;
