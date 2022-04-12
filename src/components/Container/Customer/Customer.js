import React, { useContext } from "react";
import contextAPI from "../../contextAPI/contextAPI";
import style from "./customer.module.css";
import { SliderData } from "./SliderData";

const Customer = () => {
  const context = useContext(contextAPI);

  const length = SliderData.length;

  const nextSlide = () => {
    context.setCurrent(
      context.current === length - 1 ? 0 : context.current + 1
    );
  };

  const prevSlide = () => {
    context.setCurrent(
      context.current === 0 ? length - 1 : context.current - 1
    );
  };

  return (
    <section className={style.customer}>
      <div className={style.customerInfo}>
        <div className={style.slider}>
          {SliderData.map((slide, index) => {
            return (
              <div key={index} style={{ transition: "all 0.25s" }}>
                {index === context.current && slide.data}
              </div>
            );
          })}
        </div>

        <ul className={style.slideButton}>
          <li className={style.arrow} onClick={prevSlide}>
            <svg height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"></path>
            </svg>
          </li>
          {[0, 1, 2, 3].map((index) => {
            return (
              <li
                key={index}
                className={style.dot}
                style={{ opacity: index === context.current ? 1 : 0.5 }}
              ></li>
            );
          })}
          {/* <li className={style.dot index === context.current ? "slide active" : "slide"}></li>
          <li className={style.dot}></li>
          <li className={style.dot}></li>
          <li className={style.dot}></li> */}
          <li className={style.arrow} onClick={nextSlide}>
            <svg height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
            </svg>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Customer;
