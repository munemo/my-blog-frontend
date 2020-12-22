import React from "react";
import install from "../img/install.png";
import explorer from "../img/explorer.png";
import raf from "../img/raf.png";
import navbar from "../img/navbar.png";
import footer from "../img/footer.png";
import navli from "../img/navli.png";
import rendering from "../img/rendering.png";
import func from "../img/func.png";
import klass from "../img/klass.png";
import el from "../img/el.png"
import Footer from "../components/Footer";
import reactDOM from "../img/reactDOM.png";


const Reakt = () => {
  return (
    <div>
      <section id="introduction" class="container p-3 my-3 border">
        <h2 class="display-6">Introduction</h2>
        <p class="text-secondary">
          React is a single page development framework that was developed by
          Facebook in 2013 and became open source in 2015. It differs from
          traditional HTML in that it only renders what the user wants to see
          instead of rendering a whole page.
        </p>
        {""}
        <p class="text-secondary">
          I first came into contact with React in a 12 week web development
          boot-camp that i recently took part in. React was the front end
          framework of choice in the boot-camp and boy did I struggle! I found
          out that for somebody with basic knowledge of
          <a href="https://www.w3schools.com/html/" target="blank">
            {" "}
            HTML
          </a>
          ,{" "}
          <a href="https://www.w3schools.com/css/default.asp" target="blank">
            {" "}
            CSS
          </a>{" "}
          and{" "}
          <a href="https://www.w3schools.com/js/DEFAULT.asp" target="blank">
            {" "}
            JavaScript
          </a>
          ,{" "}
          <a href="https://reactjs.org/" target="blank">
            {""}React
          </a>{" "}
          has a steep learning curve.
        </p>
        {""}
        <p class="text-secondary">
          So whats the fuss with React? The answers to that question are many.
          All i know is React is growing in popularity and it's a good habit for
          a developer to at least try and familiarize themselves with as many
          frameworks as possible. This blog will be most useful to beginners,
          since i myself am one. I will create a small application so that you
          can code along.
        </p>
      </section>

      <section id="prerequisites" class="container p-3 my-3 border">
        <h2 class="display-6">Prerequisites</h2>
        <ol>
          <li class="list">HTML</li>
          <li class="list">JavaScript</li>
        </ol>
      </section>
      <section id="jsx" class="container p-3 my-3 border">
        <h2 class="display-6">JSX</h2>
        <p class="text-secondary">
          {" "}
          JavaScript XML{" "}
          <a
            href="https://www.w3schools.com/react/react_jsx.asp"
            target="blank"
          >
            (JSX)
          </a>{" "}
          is used to create React elements. The React documentation recommends
          that you use it to describe React elements. I will use it in this
          article.
        </p>
      </section>

      <section id="setup" class="container p-3 my-3 border">
        <h2 class="display-6">Set-up a React Native project</h2>
        <p class="text-secondary">To start our project, do as follows:</p>
        {""}
        <ol>
          <li class="list">
            Download a package manager like Yarn or npm (i already have Yarn)
          </li>
          <li class="list">
            Open your terminal with the following command:{" "}
            <kbd>ctrl + alt + T</kbd>
          </li>
          <li class="list">
            Create a folder with the following command:{" "}
            <kbd>mkdir (project_name)</kbd>{" "}
          </li>
          <li class="list">
            Install react-router-dom with the following commmand:
            <kbd>npm add react-router-dom or yarn add react-router-dom</kbd>
          </li>
          <li class="list">
            Initiate your React native project with the following command:
            <kbd>
              npx create-react-app my-app or yarn create-react-app my-app{" "}
            </kbd>
            . Replace "my-app" with the name of your application, my command
            would be (yarn create-react-app my-blog) because my folder name is{" "}
            <kbd>my-blog</kbd>
          </li>
          <p class="text-secondary">
            <strong>Result:</strong>
          </p>
          <img src={install} alt="" />
          <li class="list">
            Enter the project folder that the{" "}
            <kbd>npx create-react-app my-app</kbd> command created for you with
            the following command: <kbd>cd my-blog (in my case)</kbd>
          </li>
          <li>
            Type <kbd>Yarn start {""}</kbd> and the application that was
            generated for you will be launched in your browser
          </li>
          <li class="list">
            Open your project folder with the following command:{" "}
            <kbd>code .</kbd> and it will be opened in visual studio (if you
            have it)
          </li>
          <p class="text-secondary">
            <strong>Result:</strong>
          </p>
          {""}
          <img src={explorer} alt="" />{" "}
        </ol>
        <p class="text-secondary">
          Our project folder is now setup. React has generated alot of files for
          us. Of all the files and folders that were generated, App.js and
          index.js are the most important ones. Since we have already agreed
          that we will be using JSX for our blog, rename those files to App.jsx
          and index.jsx.
        </p>
      </section>
      <section id="components" class="container p-3 my-3 border">
        <h2 class="display-6">Components</h2>
        <p class="text-secondary">
          Components are the building blocks of our application. They are
          similar to JavaScript functions because they accept arguments called
          props. For our blog, we will create a "Home" and a "React" component.
          We will also create a "Navbar" and a "Footer". To do so, do as
          follows:
        </p>
        <ol>
          <li class="list">
            Create two folders folders in your src folder. One called{" "}
            <kbd>components</kbd> and one called <kbd>pages</kbd>
          </li>
          <li class="list">
            Create a new file in our pages folder, called <kbd>home.jsx</kbd>
          </li>
          <li class="list">
            Type <kbd>rafce</kbd> in that file and visual studio will
            automatically generate a template for our home component. This is a
            React shortcut that is good to know so we don't need to create the
            function manually
          </li>
          <p class="text-secondary">
            <strong>Result:</strong>
          </p>
          {""}
          <img src={raf} alt="..." />
          <li class="list">
            Add whatever content you want between the divs in your component. I
            have added a picture of myself
          </li>
          <li class="list">
            Create another component in your pages folder for your React page
          </li>
          <li class="list">
            Create two components, but this time in your components folder. Call
            one file {""}
            <kbd>navbar.jsx</kbd> and the other <kbd>footer.jsx</kbd>{" "}
          </li>
          <p class="text-secondary">
            <strong>Result: </strong>
          </p>
          <img src={navbar} alt="..." /> {""}
          {""}
          <img src={footer} alt="..." />
          <p class="text-secondary">
            Our components are done. I added all the code for the "navbar"
            component. It contains routing and other React native topics that i
            will not go into now.
          </p>
        </ol>
      </section>

      <section id="routing" class="container p-3 my-3 border">
        <h2 class="display-6">Routing</h2>
        <p class="text-secondary">
          We added the navLink element to our navbar earlier beacuse it lets you
          specify the routes to our components. In the picture below, the "/"
          after the equal sign is our root path. For our react component, our
          path will be <em>"/react"</em>.
        </p>
        <p class="text-secondary">Great, now we have fixed our routing.</p>
        {""}
        {""}
        <img src={navli} alt="..." />
      </section>
      <section id="rendering" class="container p-3 my-3 border">
        <h2 class="display-6">Rendering</h2>
        <p class="text-secondary">
          Take a look at the pictures below:
          <div>
            <img src={el} alt="..." />
          </div>
          <div>
            <img src={reactDOM} alt="..." />
          </div>
        </p>
        <p class="text-secondary">
          React-DOM is a package that has methods that can be used to manipulate
          the DOM. In the context of React, we manipulate the DOM using the body
          "root" id and the React-DOM method "render". So if we look at the
          picture above again, you will see that the <em>element</em> is
          rendered into an element with an id called "root", that is the body.
          The element that we render is the App component of our react
          application. All our other components are imported into our App
          component.
        </p>
        <p class="text-secondary">
          <strong>Result:</strong>
        </p>
        <img src={rendering} alt=".." />
        <p class="text-secondary">
          <strong>A couple of things to note from the picture above:</strong>
        </p>
        <ul class="list-group">
          <li class="list-group-item">
            "BrowserRouter" must be installed otherwise "Route" won't work
          </li>

          <li class="list-group-item">
            "exact path" makes sure that the exact root that we want is matched
            otherwise all roots that start with "/" will be matched
          </li>
          <li class="list-group-item">
            "Switch" makes sure that react stops looking for routes to match
            once it has matched a route and only that route is rendered.
          </li>
        </ul>
      </section>
      <section id="state" class="container p-3 my-3 border">
        <h2 class="display-6">State</h2>
        <p class="text-secondary">
          State can be hard to explain, but i'm going to give it a try. The
          Oxford dictionary defines state as "the mental, emotional or physical
          condition that a person or thing is in". That tells you that state in
          the context of web development has to do with a condition. That is,
          has the user logged on or not, or is the checkbox checked or not? This
          means that you need a default state, for example that you set to
          "false", which can be set to "true" when the user does something. {""}
          Up to now, we have only worked with functions. Such functions are
          called functional components in react. If you have a functional
          component and want to use state, you need to rewrite the functionional
          component and make it a class component. It's possible to get the same
          results with functional components, but you have to use hooks and
          thats a topic for another day.
        </p>
        <p class="text-secondary">
          <strong>Functional component</strong>
        </p>
        {""}
        <img src={func} alt="..." />
        <p class="text-secondary">
          <strong>Class component</strong>
        </p>
        {""}
        <img src={klass} alt="..." />
      </section>

      <article id="refs" class="container p-3 my-3 border">
        <h2>References</h2>
        <ul>
          <li>
            <a
              href="https://reactjs.org/docs/getting-started.html"
              target="blank"
            >
              React
            </a>
          </li>
          <li>
            {" "}
            <a
              href="https://www.w3schools.com/react/default.asp"
              target="blank"
            >
              w3
            </a>
          </li>
        </ul>
      </article>
      <div>
        {" "}
        <Footer />
      </div>
    </div>
  );
};

export default Reakt;
