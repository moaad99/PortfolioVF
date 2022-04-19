import React from "react";
import "./Portfolio.css";
import spotify from "../Assets/spotify.PNG";
import portfolio from "../Assets/portf.PNG";
import mem from "../Assets/memorie.jpg";
import wild from "../Assets/wild.png";
import homee from "../Assets/homee.PNG";
import sol from "../Assets/soll.PNG";
export default function Portfolio() {
  return (
    <div className="portfolio">
      <div className="welcom">
        <h1 style={{ textAlign: "center" }}>Portfolio</h1>
        <p style={{ textAlign: "center" }}>Welcome to my online portfolio</p>
      </div>
      <br /> <br />
      <div className="container">
        <div className="projet">
          <div className="cor ">
            <div class="row row-cols-1 row-cols-md-3 g-4">
              <div class="col ">
                <div class="card ">
                  <img src={spotify} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">
                      <strong> Spotify Clone</strong>
                    </h5>
                    <p class="card-text">
                      Technology used in this projects : ReactJs , CSS Material
                      UI, Context API .
                    </p>
                  </div>
                  <div className="bt">
                    <button className="btn btn-secondary">
                      <a
                        style={{ color: "white" }}
                        href="https://github.com/moaad99/Ethereum-blockchain-project"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="27"
                          height="27"
                          fill="currentColor"
                          class="bi bi-github"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                        </svg>{" "}
                        github link
                      </a>{" "}
                    </button>

                    <button className="btn btn-dark">
                      <a
                        style={{ color: "white" }}
                        href="https://moaad-spotify-clone.herokuapp.com/"
                      >
                        project link
                      </a>
                    </button>
                  </div>
                  <br /> <br />
                </div>
              </div>
              <div class="col">
                <div class="card">
                  <img
                    src={sol}
                    className="card-img-top"
                    alt="..."
                    style={{ height: "210px" }}
                  />

                  <div class="card-body">
                    <h5 class="card-title">
                      <strong> Ethereum Blockchain Project
</strong>
                    </h5>
                    <p class="card-text">
                      Technology used in this projects : ReactJs, Ethers.js, Solidity, and Hardhat
                    </p>
                  </div>
                  <div className="bt">
                    <button className="btn btn-secondary">
                      <a
                        style={{ color: "white" }}
                        href="https://github.com/moaad99/Netflix-Clone"
                      >
                        {" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="27"
                          height="27"
                          fill="currentColor"
                          class="bi bi-github"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                        </svg>{" "}
                        github link
                      </a>{" "}
                    </button>

                    <button className="btn btn-dark">
                      <a
                        style={{ color: "white" }}
                        href="https://moaad-netflix-clone.netlify.app/"
                      >
                        project link
                      </a>
                    </button>
                  </div>
                  <br />
                  <br />
                </div>
              </div>
              <div class="col">
                <div class="card">
                  <img
                    src="https://images.frandroid.com/wp-content/uploads/2021/05/netflix.jpg"
                    class="card-img-top"
                    alt="..."
                    style={{ height: "210px" }}
                  />

                  <div class="card-body">
                    <h5 class="card-title">
                      <strong> Netflix-Clone</strong>
                    </h5>
                    <p class="card-text">
                      Technology used in this projects : HTML , CSS , Bootstrap
                      , Javascript , ReactJs
                    </p>
                  </div>
                  <div className="bt">
                    <button className="btn btn-secondary">
                      <a
                        style={{ color: "white" }}
                        href="https://github.com/moaad99/Netflix-Clone"
                      >
                        {" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="27"
                          height="27"
                          fill="currentColor"
                          class="bi bi-github"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                        </svg>{" "}
                        github link
                      </a>{" "}
                    </button>

                    <button className="btn btn-dark">
                      <a
                        style={{ color: "white" }}
                        href="https://moaad-netflix-clone.netlify.app/"
                      >
                        project link
                      </a>
                    </button>
                  </div>
                  <br />
                  <br />
                </div>
              </div>
              <div class="col">
                <div class="card">
                  <img
                    src="https://user-images.githubusercontent.com/62868878/118962083-a16b8f80-b982-11eb-9bf3-3514a3e997f2.png"
                    class="card-img-top"
                    alt="..."
                    style={{ height: "210px" }}
                  />

                  <div class="card-body">
                    <h5 class="card-title">
                      <strong> Tesla-Clone with React Native</strong>
                    </h5>
                    <p class="card-text">
                      Technology used in this projects :React Native, HTML , CSS
                      , Bootstrap , Javascript.
                    </p>
                  </div>
                  <div className="bt">
                    <button className="btn btn-secondary">
                      <a
                        style={{ color: "white" }}
                        href="https://github.com/moaad99/React-app-Github-Users"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="27"
                          height="27"
                          fill="currentColor"
                          class="bi bi-github"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                        </svg>{" "}
                        github
                      </a>{" "}
                    </button>

                    <button className="btn btn-dark">
                      <a
                        style={{ color: "white" }}
                        href="https://github.com/moaad99/React-app-Github-Users"
                      >
                        project link
                      </a>
                    </button>
                  </div>
                  <br />
                  <br />
                </div>
              </div>

              <div class="col">
                <div class="card mt-4">
                  <img
                    src={portfolio}
                    class="card-img-top"
                    alt="..."
                    style={{ height: "210px" }}
                  />

                  <div class="card-body">
                    <h5 class="card-title">
                      <strong> My Portfolio</strong>
                    </h5>
                    <p class="card-text">
                      Technology used in this projects : HTML , CSS , Bootstrap
                      , Javascript , ReactJs
                    </p>
                  </div>
                  <div className="bt">
                    <button className="btn btn-secondary">
                      <a
                        style={{ color: "white" }}
                        href="https://github.com/moaad99/PortfolioVF"
                      >
                        {" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="27"
                          height="27"
                          fill="currentColor"
                          class="bi bi-github"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                        </svg>{" "}
                        github link
                      </a>{" "}
                    </button>

                    <button className="btn btn-dark">
                      <a
                        style={{ color: "white" }}
                        href="https://moaad-msellek.herokuapp.com/Portfolio"
                      >
                        project link
                      </a>
                    </button>
                  </div>
                  <br />
                  <br />
                </div>
              </div>
              <div class="col">
                <div class="card">
                  <img
                    src="https://res.cloudinary.com/practicaldev/image/fetch/s--wxWOWaNb--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/4u07v77746evbyxibmpi.png"
                    class="card-img-top"
                    alt="..."
                    style={{ height: "210px" }}
                  />

                  <div class="card-body">
                    <h5 class="card-title">
                      <strong> Github Users API</strong>
                    </h5>
                    <p class="card-text">
                      Technology used in this projects : HTML , CSS , Bootstrap
                      , Javascript , ReactJs
                    </p>
                  </div>
                  <div className="bt">
                    <button className="btn btn-secondary">
                      <a
                        style={{ color: "white" }}
                        href="https://github.com/moaad99/React-app-Github-Users"
                      >
                        {" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="27"
                          height="27"
                          fill="currentColor"
                          class="bi bi-github"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                        </svg>{" "}
                        github link
                      </a>{" "}
                    </button>

                    <button className="btn btn-dark">
                      <a
                        style={{ color: "white" }}
                        href="https://github.com/moaad99/React-app-Github-Users"
                      >
                        project link
                      </a>
                    </button>
                  </div>
                  <br />
                  <br />
                </div>
              </div>
              <div class="col">
                <div class="card mt-4">
                  <img src={mem} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Memories</h5>
                    <p class="card-text">
                      Technology used in this projects : ReactJs,Redux ,
                      ExpressJs,Mongo Db
                    </p>
                  </div>
                  <div className="bt">
                    <button className="btn btn-secondary">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="27"
                        height="27"
                        fill="currentColor"
                        class="bi bi-github"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                      </svg>{" "}
                      github link
                    </button>

                    <button className="btn btn-dark">project link</button>
                  </div>
                  <br />
                  <br />
                </div>
              </div>

              <div class="col">
                <div class="card mt-4">
                  <img src={homee} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Homepage student-life</h5>
                    <p class="card-text">
                      Technology used in this projects : HTML , CSS ,
                      MDBootstrap , Javascript , ReactJs
                    </p>
                  </div>
                  <div className="bt">
                    <button className="btn btn-secondary">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="27"
                        height="27"
                        fill="currentColor"
                        class="bi bi-github"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                      </svg>{" "}
                      github link
                    </button>

                    <button className="btn btn-dark">project link</button>
                  </div>
                  <br />
                  <br />
                </div>
              </div>

              <div class="col">
                <div class="card mt-4">
                  <img src={wild} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Wildfire tracker with NASA Api</h5>
                    <p class="card-text">
                      Technology used in this projects : HTML , CSS ,
                      MDBootstrap , Javascript , ReactJs
                    </p>
                  </div>
                  <div className="bt">
                    <button className="btn btn-secondary">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="27"
                        height="27"
                        fill="currentColor"
                        class="bi bi-github"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                      </svg>{" "}
                      github link
                    </button>

                    <button className="btn btn-dark">project link</button>
                  </div>
                  <br />
                  <br />
                </div>
              </div>
              <div className="col">
                <div style={{ marginTop: "24px" }} className="card">
                  <img
                    src="https://i.ytimg.com/vi/YaioUnMw0mo/maxresdefault.jpg"
                    class="card-img-top"
                    alt="..."
                    style={{ height: "210px" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      <strong>Breaking bad API</strong>
                    </h5>
                    <p className="card-text">
                      Technology used in this projects : HTML , CSS , Bootstrap
                      , Javascript , ReactJs
                    </p>
                  </div>
                  <div className="bt">
                    <button className="btn btn-secondary">
                      <a
                        style={{ color: "white" }}
                        href="https://github.com/moaad99/Breaking-bad-API"
                      >
                        {" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="27"
                          height="27"
                          fill="currentColor"
                          class="bi bi-github"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                        </svg>{" "}
                        github link
                      </a>{" "}
                    </button>

                    <button className="btn btn-dark">
                      <a
                        style={{ color: "white" }}
                        href="https://github.com/moaad99/Breaking-bad-API"
                      >
                        project link
                      </a>
                    </button>
                  </div>
                  <br />
                  <br />
                </div>
              </div>
            </div>
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
