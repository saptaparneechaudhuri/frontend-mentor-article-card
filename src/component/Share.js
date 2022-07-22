import React from "react";

const Share = () => {
  return (
    <section className="share-section hide">
      <h2>Share</h2>
      <img
        src="/images/icon-facebook.svg"
        alt="facbook icon"
        className="facebook-icon"
      />
      <img
        src="/images/icon-twitter.svg"
        alt="twitter icon"
        className="twitter-icon"
      />
      <img
        src="/images/icon-pinterest.svg"
        alt="pinterest icon"
        className="pinterest-icon"
      />
      <div className="share-icon">
        <svg xmlns="http://www.w3.org/2000/svg">
          <path d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z" />
        </svg>
      </div>
    </section>
  );
};

export default Share;
