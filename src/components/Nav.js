import React from "react";

export default function Nav() {
  return (
    <>
      <nav
        className="navbar bg-body-tertiary"
        style={{ background: "#FBCEB1", height: "60px" }}
      >
        <div className="container">
          <img src="./images/quote.png" alt="leftQuote" width={"30"} />
          <h2 style={{ color: "#58111A" }}>Random Quote Generator</h2>
          <img src="./images/quotes.png" alt="rightQuote" width={"30"} />
        </div>
      </nav>
    </>
  );
}
