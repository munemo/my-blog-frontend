import React from "react";
import terminal from "../img/terminal.png";
import enter_terminal from "../img/enter_terminal.png";
import install from "../img/install.png";
import explorer from "../img/explorer.png";
import raf from "../img/raf.png";
import navbar from "../img/navbar.png";
import footer from "../img/footer.png";

const Reakt = () => {
  return (
    <div>
      <section class="react">
        <div class="container">
          <div class="row">
            <p class="intro">
              In our front-end course at school, my teacher asked us to create a
              website about a certain topic. I chose React Native becuase i am
              intrigued by it and had a tough time with it when i first came in
              contact with it. And i vowed to conqure it (some day in the
              distant future)!{" "}
              <p class="intro">
                So now that i had a topic the question was. "What would be
                interesting to be people that have never tried React before"?
                After spending some thought on the matter, i decided that i
                would write an article about how i used React to create the
                blog. That way, "newbies" can at least learn the most important
                things to set up a simple React application.
              </p>
            </p>
            <h1 class="heading">React</h1>
            <h2 class="subheading">Introduction</h2>
            <p class="intro">
              In the world of web development there are many frameworks that
              developers can choose, each with their own strengths and
              weaknesses. At the end of the day, the choice of stack depends on
              many things and there are no rights or wrongs. This blog is going
              to be about React native. React native is an open source front end
              framework that was developed by Facebook in 2013 and became open
              source in 2015.
            </p>
            {""}
            <p class="intro">
              I first came into contact with React in the fall when I recently
              took part in a 12 week web development boot-camp. React was the
              front end framework of choice in the boot-camp and boy did I
              struggle! I found out that for somebody with basic knowledge of
              HTML, CSS and JavaScript, React has a steep learning curve.
            </p>
            {""}
            <p class="intro">
              So whats the fuss with React? Well, in this age of one page
              applications, React is the go to Framework in my opinion. The
              reason for this is the idea of components and conditional
              rendering(Im sure there are others). In HTMl for example, you
              would have a an HTML document that you fill with content and you
              would have to copy the footer and header on each page on your
              site. React lets you create separate components that you can then
              render when you want. You can just place common components such as
              headers and footers in your App component and wrap them around or
              place them below your components and they will be rendered in each
              component.{" "}
            </p>
            <article class="prerequisites">
              <p class="intro">
                Before we get started on our application, I have listed some
                things that you need to know below. You don't have to be an
                expert, but its important to be comfortable with HTML and
                JavaScript. If you are not, do a quick refresher course before
                you start to get the best out of this article.{" "}
              </p>{" "}
              {""}
              <p class="intro">
                I have added CSS and Github but they are not necessary. CSS is
                good to know when you want to make your blog presentable, and
                Github is for your project files.
              </p>
              <h2 class="subheading">Prerequisites</h2>
              <ol>
                <li class="list">HTML</li>
                <li class="list">JavaScript</li>
                <li class="list">CSS</li>
                <li class="list">Github</li>
              </ol>
            </article>
            <article class="jsx">
              <h2 class="subheading">JSX</h2>
              <p class="intro">
                {" "}
                JavaScript syntax extension(JSX) is used to create react
                elements. The React documentation recommends that you use it to
                describe React elements. JSX has several benefits that I will
                not go into here. The important thing is that you should use
                when working with React eve though it is not a must. I will use
                it in this article. I recommend you read a bit about it before
                you proceed.
              </p>
            </article>

            <article class="initiate">
              <h2 class="subheading">Setup a React Native project</h2>
              <p class="intro">
                To start our React project, we will do as follows:
              </p>
              {""}
              <ol>
                <li class="list">
                  Download a package manager (I already have Yarn) like Yarn/npm
                </li>
                <li class="list">
                  Open our terminal with the following command:{" "}
                  <em>ctrl + alt + T</em>
                </li>
                <li class="list">
                  Create a folder with the following command:{" "}
                  <em>
                    mkdir (project_name). My project folder is called react
                  </em>
                  .{" "}
                </li>
                <p class="result">Result:</p>
                {""} <img src={terminal} alt="..." />
                <li class="list">
                  Now we have to enter the folder we just created with the
                  following command: <em>cd project_name </em>
                </li>
                <p class="result">Result:</p> {""}
                <img src={enter_terminal} alt="..." />
                <li class="list">
                  Now we can install react-router-dom wth the following commmand: 
                  <em>yarn add react-router-dom</em>.
                </li>

                <li class="list">
                  Now we can initiate our React native project with the
                  following command:
                  <em>npx create-react-app my-app</em>. Replace "my-app" with
                  the name of your application, my command would be (yarn create-react-app my-blog) because my folder name is{" "}
                  <em>my-blog</em>. I use Yarn so my command starts with yarn. It should start with
                </li>
                <p class="result">Result: </p>
                <img src={install} alt="" />
                <li class="list">
                  Now we can enter the project folder that the{" "}
                  <em>npx create-react-app my-app</em> command creacted for us
                  with the following command: <em>cd my-blog (in my case)</em>
                </li>
                <li class="list">
                  Now we can open our project folder with the following command:{" "}
                  <em>code .</em> and our project folder will be opened in
                  visual studio (if you have it)
                </li>
                <p class="result">Result: </p>
                {""}
                <img src={explorer} alt="" />
                <p class="intro">
                  Our project folder is now setup. React has generated alot of
                  files for us. Of all the files and folders that were
                  generated, App.js and index.js are the most important. Since
                  we have already agreed that we will be using JSX for our blog,
                  rename those files to App.jsx and index.jsx.
                </p>
              </ol>
            </article>
            <article class="components">
              <h2 class="subheading">Components</h2>
              <p class="intro">
                Components are the building blocks of our application. They are
                similar to JavaScript functions because they accept arguments
                called props. For our blog, we will create a "Home" and a
                "React" component. We will also create a "Header" and a "Footer"
              </p>
              <ol>
                <li class="list">
                  Now we are going to create two folders folders in our src
                  folder. One called <em>components</em> and one called{" "}
                  <em>pages</em>.
                </li>
                <li class="list">
                  Now we will create a new file in our pages folder, called{" "}
                  <em>home.jsx</em>
                </li>
                <li class="list">
                  Type <em>rafce</em> in that file and visual studio will
                  automatically generate a template for our home component. This
                  is a React shortcut thats good to know so we don't need to
                  create the function manually.
                </li>
                <p class="result">Result: </p>
                {""}
                <img src={raf} alt="..." />
                <li class="list">
                  Now we can add whatever content we want between the divs in
                  our component. I have decdided to add a picture of myself.
                </li>
                <li class="list">
                  Now we can create another component in our pages folder where
                  we will place our articles about React
                </li>
                <li class="list">
                  Now, just like we did above, we will create two components,
                  but this time in our components folder. We will call one file
                  <em>navbar.jsx</em> and the other <em>footer.jsx</em>{" "}
                </li>
                <p class="result">Result: </p>
                <img src={navbar} alt="..." /> {""}
                <img src={footer} alt="..." />
                <p class="intro">
                  Our components are done. I added all the code for the "navbar"
                  component. It contains routing and alot of other React native
                  topics that i will go into in detail later. I will go into
                  routing in the next article. You don't have to understand
                  everything thats going in this component for now.
                </p>
              </ol>
            </article>
            <article class="routing">
              <h2 class="subheading">Routing</h2>
              <p class="intro">
                {" "}
                Now that our components are done. We can discuss routing because
                we need it so that our navigation in our navbar will work.
                Routing in React is a bit more complicated than HTML. I hope
                that this artile will help us understand routing a bit more.
              </p>
              <ol>
                <li class="list"></li>
                <li class="list"></li>
                <li class="list"></li>
                <li class="list"></li>
                <li class="list"></li>
                <li class="list"></li>
                <li class="list"></li>
                <li class="list"></li>
              </ol>
            </article>
            <article class="rendering">
              <h2 class="subheading">Rendering</h2>
              <p class="intro">
                Components are the building blocks of our application. They are
                similar to JavaScript functions because they accept arguments
                called props. For our blog, we will create a "Home" and a
                "React" component. We will also create a "Header" and a "Footer"
              </p>
              <ol>
                <li class="list"></li>
                <li class="list"></li>
                <li class="list"></li>
                <li class="list"></li>
                <li class="list"></li>
                <li class="list"></li>
                <li class="list"></li>
                <li class="list"></li>
              </ol>
            </article>
            <article class="state">
              <h2 class="subheading">State</h2>
              <p class="intro">
                Components are the building blocks of our application. They are
                similar to JavaScript functions because they accept arguments
                called props. For our blog, we will create a "Home" and a
                "React" component. We will also create a "Header" and a "Footer"
              </p>
              <ol>
                <li class="list"></li>
                <li class="list"></li>
                <li class="list"></li>
                <li class="list"></li>
                <li class="list"></li>
                <li class="list"></li>
                <li class="list"></li>
                <li class="list"></li>
              </ol>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Reakt;