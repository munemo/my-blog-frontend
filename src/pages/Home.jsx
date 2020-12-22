import React from "react";
import john3 from "../img/john3.jpg";
import '../css/style.css';



const Home = () => {
  return (
    <div class="container">
      <section class="centered">
        <img src={john3} alt=".." class="rounded" />
        <p class="text-secondary">Hi, im John. Welcome to my blog! I hope you will like it.</p>
      </section>
    </div>
  );
}

export default Home
