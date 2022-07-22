import React from "react";

const People = ({ onClickShare }) => {
  return (
    <section className="people">
      <img src="/images/avatar-michelle.jpg" alt="people image" />
      <div className="credentials">
        <h1>Michelle Appleton</h1>
        <h2> 28 Jun 2020</h2>
      </div>
      <div className="share-icon" onClick={onClickShare}>
        <img src="/images/icon-share.svg" alt="share icon" />
      </div>
    </section>
  );
};

export default People;
