import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom';

import imge from "../Assets/fa.jpg"
function Home() {
    return (
      <div className="home">
        <div className="text">
          <div className="ban">
            <h1> Moaad MSELLEK </h1>
            <br />
            <h3>
              {" "}
             I am Moaad MSELLEK, software engineering student and distributed
              computer systems. I have great patience with web development. With
              a good analytical and synthesis mind, a great capacity for
              adaptation, Thirsty for learning and new challenges I am 
              dedicated to the quest of developing solutions that leverage 
              on best practice  technologies to deliver over the top user experience
            </h3>
            <br />
                        <Link  to="/Portfolio">

            <button
              style={{ backgroundColor: "rgb(224, 220, 213)" }}
              type="button"
              class="btn btn-light"
            >
              <svg
                class="svg-inline--fa fa-laptop-code fa-w-20 fa-fw me-2"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                width="27"
                height="20"
                data-icon="laptop-code"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"
                ></path>
              </svg>
              <span> View Portfolio</span>
            </button>
                        </Link >
 <Link onClick={() => window.open("/cv.pdf", "_blank")}>
            <button
              style={{ opacity: ".9" }}
              type="button"
              class="btn btn-secondary"
            >
              <svg
                class="svg-inline--fa fa-file-alt fa-w-12 fa-fw me-2"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="file-alt"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                width="27"
                height="20"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm64 236c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-72v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm96-114.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"
                ></path>
              </svg>
              <span>View Resume</span>
            </button>
                                    </Link >

          </div>
        </div>
        <div className="image">
          <img style={{ borderRadius: "10px",height:"50%"}}  width="77%" src={imge} alt="" />
        </div>
      </div>
    );
}

export default Home
