import React from "react";

//ico
// npm install --save-dev @iconify/react @iconify-icons/ant-design
import { Icon } from "@iconify/react";
import messageTwotone from "@iconify-icons/ant-design/message-twotone";
import { useState } from "react";
import axios from "axios";

//////

const FormEmail = () => {
  let [emailtosend, setEmailtosend] = useState("");
  let [menstosend, setMenstosend] = useState("");
  let [stateContact, setStateContact] = useState("");

  function notification() {
    setStateContact("Sent.");
    setTimeout(() => {
      setStateContact("");
    }, 3000);
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .get(
        `https://dpinformation.me/api/contact?email=${emailtosend}&mens=${menstosend}`
      )
      .then((result) => {
        setEmailtosend("");
        setMenstosend("");
      });
    setEmailtosend("");
    setMenstosend("");
    notification();
  }

  function updateEmail(e) {
    setEmailtosend(e.target.value);
  }
  function updateMens(e) {
    setMenstosend(e.target.value);
  }

  return (
    <div className="p-5 mt-5 bg-dark">
      <div className="container">
        <header className="pb-3 mb-4 border-bottom">
          <Icon icon={messageTwotone} color="#ffffff" width="50" height="50" />
          <span className="fs-1 text-light">Contact </span>
        </header>
        <div className="h-100 p-5 bg-light border rounded-3">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                value={emailtosend}
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
                onChange={updateEmail}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Text</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                value={menstosend}
                rows="3"
                onChange={updateMens}
                placeholder="message to send ..."
                required
              ></textarea>
            </div>

            <div className="mb-3">
              <div className="p-0">
                <button type="submit" className="btn btn-secondary mt-0">
                  Send!
                </button>
                <label className="m-2 text-success">{stateContact}</label>
              </div>
            </div>
          </form>
          <h6>This is a private Message</h6>
          <p>
            Your personal information, such as email or the data you send in
            message, is private and will not be disclosed!
          </p>
        </div>
      </div>
    </div>
  );
};

export default FormEmail;
