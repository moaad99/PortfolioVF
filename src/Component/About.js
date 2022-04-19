import React from 'react'
import './About.css'
import fast from "../Assets/fast.PNG"
import responsive from "../Assets/responsive.PNG";
import dynam from "../Assets/dynam.PNG";
import front from "../Assets/front.PNG";
import back from "../Assets/back.PNG";
import other from "../Assets/other.PNG";



export default function About() {
    return (
      <div className="about">
        <div className="welc">
          <h1 style={{ textAlign: "center" }}>About </h1>
          <p style={{ textAlign: "center" }}>
            Hello! My name is Moaad and I enjoy creating things that live on the
            internet. <br /> My interest in web development started back in 2018
          </p>
        </div>

        <div className="service">
          <div className="fast">
            <img
              className="mg"
              width="130px"
              style={{ height: "100px" }}
              src={fast}
              alt=""
            />
            <h4>Fast</h4>
            <p style={{ textAlign: "center" }}>
              Fast load times and lag free interaction, my highest priority.
            </p>
          </div>
          <div className="res">
            <img
              className="mg"
              width="160px"
              style={{ height: "100px", marginInline: "28%" }}
              src={responsive}
              alt=""
            />
            <h4>Responsive</h4>
            <p style={{ textAlign: "center" }}>
              My layouts will work on any device, This makes project manageable.{" "}
            </p>
          </div>
          <div className="dinam">
            <img
              className="mg ss"
              width="140px"
              style={{ height: "100px", marginInline: "30%" }}
              src={dynam}
              alt=""
            />
            <h4> Dynamic </h4>
            <p style={{ textAlign: "center" }}>
              Websites don't have to be static, I love making pages come to life
              .{" "}
            </p>
          </div>
        </div>

        <div className="skil">
          <div className="hot"></div>
          <div className="front">
            <img
              className="fr"
              width="140px"
              style={{ height: "120px" }}
              src={front}
              alt=""
            />{" "}
            <br />
            <h4>Front-End</h4>
            <ul style={{ marginTop: "10px" }}>
              <li>React Js/Redux/Context-Api</li>
              <br />
              <li>Angular/ Vue Js</li>
              <br />
              <li>React-Native</li>
              <br />
              <li>Html/Css/Javascript</li>
            </ul>
            <div style={{ marginBottom: "71px" }}></div>
          </div>
          <div
            style={{  marginInline: "20px" }}
            className="back"
          >
            {" "}
            <img
              className="fr"
              width="140px"
              style={{ height: "120px"}}
              src={back}
              alt=""
            />{" "}
            <br />
            <h4>Back-End</h4>
            <ul style={{ marginTop: "10px" }}>
              <li>Python/Django</li>
              <br />
              <li>Java/JEE and Spring-Boot</li>
              <br />
              <li>Node Js/Express Js</li>
              <br />
              <li>MySQL/MongoDb</li>
            </ul>
            <div style={{ marginBottom: "71px" }}></div>
          </div>
          <div className="others">
            {" "}
            <img
              className="fr"
              width="140px"
              style={{ height: "150px" }}
              src={other}
              alt=""
            />{" "}
            <h4>Others</h4>
            <br />
            <ul>
              <li>Netfly/Heruko/Github Pages</li>
              <br />
              <li>Postman/Insomnia</li>
              <br />
              <li>Git/Github</li>
              <br />
              <li>Docker</li>
            </ul>
            <div style={{ marginBottom: "81px" }}></div>
          </div>
        </div>
        <br />
      </div>
    );
}
