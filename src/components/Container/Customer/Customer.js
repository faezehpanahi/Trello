import React from "react";
import style from "./customer.module.css";

const Customer = () => {
  return (
    <section className={style.customer}>
      <div className={style.customerInfo}>
        <div className={style.info}>
          <div className={style.logoInfo}>
            <div className={style.logo}></div>
            <div className={style.logoAbout}>
              <h5>INDUSTRY</h5>
              <h3>eCommerce</h3>
            </div>
          </div>

          <div className={style.qoutInfo}>
            <blockquote>
              <svg
                role="img"
                aria-label="Quote"
                fill="none"
                height="41"
                viewBox="0 0 55 41"
                width="55"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m53.76 28.32c0-7.32-3.84-11.4-11.64-11.52 1.68-2.64 6.36-4.08 12.6-4.44v-12.36c-17.28.960002-26.88 10.2-26.88 24.24 0 11.4 5.64 16.08 13.2 16.08 7.92 0 12.72-4.68 12.72-12zm-27.84 0c0-7.32-3.84-11.4-11.64-11.52 1.68-2.64 6.36-4.08 12.6-4.44v-12.36c-17.28.960002-26.88 10.2-26.88 24.24 0 11.4 5.64 16.08 13.2 16.08 7.92 0 12.72-4.68 12.72-12z"></path>
              </svg>
              Everyone loves it; it has democratized our finance function. In
              some ways Trello shattered hierarchy and brought us together.
            </blockquote>
            <footer>
              <span>
                <h5>Bharath Sundar</h5>
                Finance, eBay
              </span>
            </footer>
          </div>
        </div>
        <ul className={style.slideButton}>
          <li className={style.arrow}>
            <svg
              role="img"
              aria-label="Go back"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
              ></path>
            </svg>
          </li>
          <li className={style.dot}></li>
          <li className={style.dot}></li>
          <li className={style.dot}></li>
          <li className={style.dot}></li>
          <li className={style.arrow}>
            <svg
              role="img"
              aria-label="Go next"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              ></path>
            </svg>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Customer;
