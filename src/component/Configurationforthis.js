import React from "react";
import "./css/experience.css";

//icon
import { Icon } from "@iconify/react";
import nginxIcon from "@iconify-icons/logos/nginx";
import linuxTux from "@iconify-icons/logos/linux-tux";
import awsIcon from "@iconify-icons/logos/aws";
import dataEncryption from "@iconify-icons/flat-color-icons/data-encryption";
import serverIcon from "@iconify-icons/bi/server";

//

const Experience = () => {
  return (
    <div
      className="container mt-5 px-3 py-4 bg-light"
      id="featured-3 bg-secondary"
    >
      <header className="pb-3 mb-4 border-bottom">
        <Icon icon={serverIcon} width="50" height="50" />
        <span className="fs-4">
          <span>&nbsp; &lt; Server /&gt; </span> configuration for this example!
        </span>
      </header>

      <div className="row g-4 py-5  row-cols-1 row-cols-lg-3">
        <div className="feature col ">
          <Icon
            className="bi rounded mx-auto d-block"
            icon={awsIcon}
            width="50"
            height="50"
          />
          <h2 className="text-center">AWS cloud</h2>
          <div className="text-center">
            <p>
              The AWS cloud computing platform provides the flexibility to
              launch your application regardless of your use case or industry.
            </p>
            <p>
              All items were purchased from AWS, dominion and instance of EC2
              (ubntu)
            </p>
          </div>
        </div>

        <div className="feature col">
          <Icon
            className="bi rounded mx-auto d-block"
            icon={nginxIcon}
            width="50"
            height="50"
          />
          <h2 className="text-center">Reverse Proxy Server</h2>
          <div className="text-center">
            <p>
              NGINX handles the traffic from the domain to the port where the
              nodeJS application runs, it also encrypts the data using{" "}
              <Icon icon={dataEncryption} width="25" height="25" />
              Let s Encrypt!
            </p>
          </div>
        </div>
        <div className="feature col">
          <Icon
            className="bi rounded mx-auto d-block"
            icon={linuxTux}
            width="50"
            height="50"
          />
          <h2 className="mt-3 text-center">Featured title 3</h2>
          <div className="text-center">
            <p>
              Ubuntu Server (20.04 lts) handle services like PM2, Github,
              NodeJS, MySQL
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
