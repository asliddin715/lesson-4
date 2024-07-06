import React from 'react'

 const Home = () => {
  return (
    <div className="container">
      <div className="content">
        <div className="content-child">
          <h1 className="content-text">
            Let's make your home beautiful together
          </h1>
          <p className="content-parag">
            There are many variations of the passages of lorem Ipsum
            fromavailable, majority.
          </p>
          <button className="content-btn">
            Get Started
            <img src="/white-right.png" alt="laoding" />
          </button>
        </div>
      </div>

      <div className="contents">
        <div className="contents-child">
          <h3 className="contents-text">Project Plan</h3>
          <p className="contents-paragrif">
            There are many variations of the passages of lorem Ipsum from
            available, majority.
          </p>
          <button className="contents-btn">Read More <img src="/right.png" alt="loading" /></button>
        </div>

        <div className="contents-child">
          <h3 className="contents-text">Project Plan</h3>
          <p className="contents-paragrif">
            There are many variations of the passages of lorem Ipsum from
            available, majority.
          </p>
          <button className="contents-btn">Read More<img src="/right.png" alt="loading" /></button>
        </div>

        <div className="contents-child">
          <h3 className="contents-text">Project Plan</h3>
          <p className="contents-paragrif">
            There are many variations of the passages of lorem Ipsum from
            available, majority.
          </p>
          <button className="contents-btn">Read More<img src="/right.png" alt="loading" /></button>
        </div>
      </div>
    </div>
  );
}

export default Home;
