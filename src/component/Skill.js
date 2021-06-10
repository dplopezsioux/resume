import React from "react";
import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import settingsSharp from "@iconify-icons/ion/settings-sharp";
import axios from "axios";

class Listskill extends React.Component {
  render() {
    const { list, gcolor } = this.props;

    return (
      <div>
        {list.map((elemt) => {
          return (
            <div key={Math.random() * 10000} className="d-flex text-muted pt-3">
              <svg
                className="bd-placeholder-img flex-shrink-0 me-2 rounded"
                width="32"
                height="32"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: 32x32"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>{elemt.name}</title>
                <rect width="100%" height="100%" fill={gcolor}></rect>
                <text x="50%" y="50%" fill="#007bff" dy=".3em"></text>
              </svg>

              <div className="pb-3 mb-0 small lh-sm  w-100">
                <div className="d-flex justify-content-between">
                  <strong className="text-gray-dark">{elemt.name}</strong>
                  <a target="_blank" rel="noreferrer" href={elemt.url}>
                    got to ...
                  </a>
                </div>
                <span className="d-block">{elemt.descrip}</span>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

class TablaSkill extends React.Component {
  static propTypes = {
    dataskill: PropTypes.object.isRequired,
  };

  getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    const names = Object.keys(this.props.dataskill);
    const props = this.props.dataskill;

    return (
      <div className="my-3 p-3 bg-light rounded">
        {names.map((keyname) => {
          return (
            <div key={keyname}>
              <h6 className="border-bottom pb-2 mb-0 text-uppercase">
                {keyname}
              </h6>
              <Listskill list={props[keyname]} gcolor={this.getRandomColor()} />
            </div>
          );
        })}
      </div>
    );
  }
}

class Skill extends React.Component {
  state = {
    data: {},
  };

  componentDidMount() {
    axios
      .get("https://dpinformation.me/api/skill")
      .then((res) => {
        this.setState({ data: res.data });
        console.log("this.state.data", res.data);
      })
      .catch(function (error) {
        console.log("error->>", error);
      });
  }

  render() {
    return (
      <div>
        <div className="bg-white p-1 mt-1 mb-3">
          <div className="container">
            <header className="pb-3 mt-5 mb-4 border-bottom">
              <Icon icon={settingsSharp} width="50" height="50" />
              <span className="fs-2 m-2">Skills and Tools</span>
            </header>
            <div className="container bg-light p-5">
              <TablaSkill
                dataskill={this.state.data}
                key={Math.random() * 10000}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skill;
