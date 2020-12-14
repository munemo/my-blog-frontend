import React from "react";
import john from "../img/john.jpg";

const Home = () => {
  return (
    <div>
      <section>
        <div class="container">
          <div class="row">
            <div class="col-lg-4 mx-auto">
              <img
                class="img-fluid"
                src={john}
                alt=""
                width="460"
                height="345"
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                facilis at ipsum! Laborum ex ea placeat facere debitis rerum,
                necessitatibus reprehenderit nesciunt ipsum deserunt ratione
                alias dicta? Necessitatibus, exercitationem accusamus.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home
