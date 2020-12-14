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
                Hi, I'm John. I'm new to web development and i'm using this blog to write and refelect about various 
                 topics. I hope you will find it interesting.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home
