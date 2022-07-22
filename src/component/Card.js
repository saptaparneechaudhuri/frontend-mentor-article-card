import React, { useEffect, useState } from "react";
import People from "./People";
import Share from "./Share";
import Modal from "./Modal";

const Card = () => {
  const [clicked, setClicked] = useState(false);
  const [width, setWidth] = useState(0);

  const displayShare = () => {
    let people = document.querySelector(".people");
    // console.log(people.classList);
    let share = document.querySelector(".share-section");
    people.classList.add("hide");
    share.classList.remove("hide");
  };

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);

    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setWidth]);
  return (
    <>
      <section className="image">
        <img src="/images/drawers.jpg" alt="header imager" />
      </section>

      <section className="title">
        <h1>
          Shift the overall look and feel by adding these wonderful touches to
          furniture in your home
        </h1>

        <p>
          Ever been in a room and felt like something was missing? Perhaps it
          felt slightly bare and uninviting. I’ve got some simple tips to help
          you make any room feel complete.
        </p>
      </section>
      <People onClickShare={() => setClicked(true)} />
      <Share />
      {clicked === true ? width <= 1099 ? displayShare() : <Modal /> : null}

      {/* {width <= 1099 ? (clicked === false ? ) : ()}
      {clicked === false ? (
        <People onClickShare={() => setClicked(true)} />
      ) : width <= 1099 ? (
        <Share />
      ) : (
        <People />
      )} */}
    </>
  );
};

export default Card;
