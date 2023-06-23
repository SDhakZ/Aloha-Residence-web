import React from "react";
import ErrorPageCSS from "./errorPage.module.css";
import { Link } from "react-router-dom";
const ErrorPage = (props) => {
  var showHomeButton = props.showHomeBtn === false ? props.showHomeBtn : true;
  return (
    <div className={ErrorPageCSS["ER-container"]}>
      <span className={ErrorPageCSS["ER-top-ceiling"]}></span>
      {/* Particle divisions */}
      <div>
        <div className={ErrorPageCSS["ER-starsec"]}></div>
        <div className={ErrorPageCSS["ER-starthird"]}></div>
        <div className={ErrorPageCSS["ER-starfourth"]}></div>
        <div className={ErrorPageCSS["ER-starfifth"]}></div>
      </div>
      {/* Particle divisions */}
      <div className={ErrorPageCSS["ER-lamp"]}>
        <div className={ErrorPageCSS["ER-cable"]}></div>
        <div className={ErrorPageCSS["ER-cover"]}></div>
        <div className={ErrorPageCSS["ER-in-cover"]}>
          <div className={ErrorPageCSS["ER-bulb"]}></div>
        </div>
        <div className={ErrorPageCSS["ER-light"]}></div>
      </div>

      <section className={ErrorPageCSS["ER-error-container"]}>
        <div className={ErrorPageCSS["ER-error-content"]}>
          <div className={ErrorPageCSS["ER-error-message"]}>
            <h1 className={ErrorPageCSS["ER-message-title"]}>
              {props.errorTitle}
            </h1>
            <p className={ErrorPageCSS["ER-message-paragraph"]}>
              {props.errorMessage}
            </p>
          </div>
          {props.showBtns ? (
            <div className={ErrorPageCSS["ER-error-nav"]}>
              {showHomeButton ? (
                <Link to="/" className={ErrorPageCSS["ER-nav-link"]}></Link>
              ) : null}
              <Link
                onClick={() => window.location.reload()}
                to="/themes"
                className={`${ErrorPageCSS["ER-nav-link"]} ${ErrorPageCSS["ER-retry"]}`}
              ></Link>
            </div>
          ) : null}
        </div>
      </section>
    </div>
  );
};

export default ErrorPage;
