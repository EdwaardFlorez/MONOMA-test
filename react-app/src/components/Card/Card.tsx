import React from "react";
import "./Card.css";
import imgBig from "../../assets/Rectangle169@2x.png";
import imgLittle from "../../assets/Rectangle169@2x.png";
import { useNavigate } from "react-router-dom";

const Card = () => {
  const navigate = useNavigate();
  return (
    <article className="index_list_card">
      <picture>
        <source
          srcSet={imgBig}
          media="(min-width: 850px)"
        />
        <img
          src={imgLittle}
          alt="atico-duplex.png"
          className="index_list_card_img"
        />
      </picture>

      <h2 className="card_name">Ático Dúplex de Obra Nueva</h2>
      <p className="card_location">Marianao, Sant Boi de Llobregat</p>
      <div className="info_containerr">
        <div className="icon_container">
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
        <span className="card_price">330.000&euro;</span>
        <button className="btn-34" onClick={ ()=>navigate("/detail")}>
          <span>Más info</span>
        </button>
      </div>
    </article>
  );
};

export default Card;
