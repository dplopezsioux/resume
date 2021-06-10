import React from "react";

import avatar from "../img/avatar.png";

const Resume = () => {
  return (
    <>
      <div>
        <div className="shadow-lg bg-dark text-secondary px-4 py-5 text-center">
          <div className="container">
            <div className="row g-0">
              <div className="col-sm-6 col-md-4 text-end">
                <img
                  className="d-block mx-auto mb-4 rounded float-end"
                  src={avatar}
                  alt=""
                  width="50"
                  height="50"
                />
              </div>
              <div className="col-6 col-md-8 text-start">
                <h1 className="display-5 fw-bold"> &lt;Daniel Perez /&gt;</h1>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">
              My professional goals are in line with the needs of evolving and
              improving within the company where I develop my professional work.
              I am committed to maintaining professionalism and creating
              innovative programs. I consider myself a man who takes risks in
              situations that require it, for the benefit of the company, in
              search of solutions.
            </p>
            <div className="button d-grid gap-2 d-sm-flex justify-content-sm-center">
              <div type="button" className="btn btn-primary btn-lg px-4 gap-3">
                Email
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
