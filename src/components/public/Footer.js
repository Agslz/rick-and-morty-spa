import React from "react";

export const Footer = () => {

  const year = new Date().getFullYear();
  const companyName = "Egg Cooperation";

  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <p className="text-muted">
            <span className="">
              <img src="icon.png" height="40px" width="40px"></img>
            </span>
            &copy; {year} {companyName}
          </p>
        </div>
        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <a href="#">
            <img
              className="p-3"
              src="https://img.icons8.com/fluency/36/null/facebook-new.png"
            />
          </a>
          <a href="#">
            <img
              className="p-3"
              src="https://img.icons8.com/color/36/null/instagram-new.png"
            />
          </a>
          <a href="#">
            <img
              className="p-3"
              src="https://img.icons8.com/fluency/36/null/twitter.png"
            />
          </a>
        </ul>
      </footer>
    </div>
  );
};
