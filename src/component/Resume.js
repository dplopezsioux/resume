import React from "react";

//
import { Icon, InlineIcon } from "@iconify/react";
import welcomeWriteBlog from "@iconify-icons/dashicons/welcome-write-blog";

import avatar from "../img/avatar.png";

const Resume = () => {
  return (
    <>
      <div>
        <div className="shadow-lg bg-dark text-secondary px-4 py-5 text-center">
          <div className="container">
            <div className="row g-0">
              <h1 className="display-5 fw-bold">
                <img
                  className="d-block mx-auto mb-4 rounded float-end"
                  src={avatar}
                  alt=""
                  width="50"
                  height="50"
                />
                &lt;Daniel Perez /&gt;
              </h1>
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
              <a
                href="https://www.linkedin.com/in/danieleplopez/"
                type="button"
                className="btn btn-primary btn-lg px-4 gap-3"
                target="_blank"
                rel="noreferrer"
              >
                <Icon
                  icon={welcomeWriteBlog}
                  color="#ffffff"
                  width="50"
                  height="50"
                />
                linkedin
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
