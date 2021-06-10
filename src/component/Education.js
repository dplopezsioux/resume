import React from "react";

//icos

import { Icon } from "@iconify/react";
import schoolIcon from "@iconify-icons/cil/school";
import logoElectron from "@iconify-icons/ion/logo-electron";
import logoIonitron from "@iconify-icons/ion/logo-ionitron";

const Description = () => {
  return (
    <div className="container mt-5">
      <header className="pb-3 mb-4 border-bottom">
        <Icon icon={logoElectron} width="50" height="50" />
        <span className="fs-2 m-2">Education &amp; Certification</span>
      </header>
      <div className="row align-items-md-stretch">
        <div className="fw-bold fs-5 py-4">Certification</div>
        <div className="col-md-6  mb-5">
          <div className="h-100 p-5 bg-light border rounded-3">
            <h2>
              <Icon icon={logoIonitron} width="25" height="25" />
              Programming for the Web with JavaScript
            </h2>

            <p>Valid Certificate ID e9e6073259374dda9d8fb0c0298bc3e8</p>
            <a
              href="https://courses.edx.org/certificates/e9e6073259374dda9d8fb0c0298bc3e8"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Go to validation
            </a>
          </div>
        </div>
        <div className="col-md-6  mb-5">
          <div className="h-100 p-5 bg-light border rounded-3">
            <h2>
              <Icon icon={logoIonitron} width="25" height="25" />
              Algorithms and Data Structures in C#
            </h2>
            <p>Valid Certificate ID cff61b6bf4a84293beb011510f762d3f</p>
            <a
              href="https://courses.edx.org/certificates/cff61b6bf4a84293beb011510f762d3f"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Go to validation
            </a>
          </div>
        </div>
      </div>
      <div>
        <div className="fw-bold fs-3 py-4">Education</div>
        <div className="mb-4 bg-light border rounded-3">
          <div className="container-fluid p-5">
            <p className="col-md-8 fs-4">
              <h3>
                <Icon icon={schoolIcon} width="50" height="50" />
                &#34;University of Pennsylvania&#34;
              </h3>
              <p1>Computer Science Essentials for Software (2020 – 2022)</p1>
            </p>
            <p className="col-md-8 fs-4">
              <h3>
                <Icon icon={schoolIcon} width="50" height="50" />
                &#34;Central University of Las Villas&#34;
              </h3>
              <p1>
                Electronics and Communication Engineering - Computer
                Networking(2009 – 2014)
              </p1>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
