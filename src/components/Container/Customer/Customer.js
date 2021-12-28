import React, { useState } from "react";
import style from "./customer.module.css";
import { SliderData } from "./SliderData";

const Customer = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  // console.log(current);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className={style.customer}>
      <div className={style.customerInfo}>
        <div className={style.slider}>
          {SliderData.map((slide, index) => {
            return (
              <div
                className={index === current ? "slide active" : "slide"}
                key={index}
              >
                {index === current && slide.data}
              </div>
            );
          })}
        </div>

        <ul className={style.slideButton}>
          <li className={style.arrow} onClick={prevSlide}>
            <svg
              // role="img"
              // aria-label="Go back"
              // xmlns="http://www.w3.org/2000/svg"
              // width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                // fill-rule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
              ></path>
            </svg>
          </li>
          <li className={style.dot} data={0}>
            <span>⚫</span>
          </li>
          <li className={style.dot} data="1">
            <span>⚫</span>
          </li>
          <li className={style.dot} data="2">
            <span>⚫</span>
          </li>
          <li className={style.dot} data="3">
            <span>⚫</span>
          </li>
          <li className={style.arrow} onClick={nextSlide}>
            <svg
              // role="img"
              // aria-label="Go next"
              // xmlns="http://www.w3.org/2000/svg"
              // width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                // fill-rule="evenodd"
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
