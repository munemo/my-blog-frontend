import React from "react";
import terminal from "../img/terminal.png";
import enter_terminal from "../img/enter_terminal.png";
import install from "../img/install.png";
import explorer from "../img/explorer.png";

const Reakt = () => {
  return (
    <div>
      <section class="react">
        <div class="container">
          <div class="row">
            <p>
              In our front-end course at school, my teacher asked us to create a
              website about a certain topic. I chose React Native becuase i am
              intrigued by it and had a tough time with it when i first came in
              contact with it. And i vowed to conqure it (some day in the
              distant future)!{" "}
              <p>
                So now that i had a topic the question was. "What would be
                interesting to be people that have never tried React before"?
                After spending some thought on the matter, i decided that i
                would write an article about how i used React to create the
                blog. That way, "newbies" can at least learn the most important
                things to set up a simple React application.
              </p>
            </p>
            <h1>React</h1>
            <h2>Introduction</h2>
            <p>
              In the world of web development there are many frameworks that
              developers can choose, each with their own strengths and
              weaknesses. At the end of the day, the choice of stack depends on
              many things and there are no rights or wrongs. This blog is going
              to be about React native. React native is an open source front end
              framework that was developed by Facebook in 2013 and became open
              source in 2015.
            </p>
            {""}
            <p>
              I first came into contact with React in the fall when I recently
              took part in a 12 week web development boot-camp. React was the
              front end framework of choice in the boot-camp and boy did I
              struggle! I found out that for somebody with basic knowledge of
              HTML, CSS and JavaScript, React has a steep learning curve.
            </p>
            {""}
            <p>
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
              <p>
                Before we get started on our application, I have listed some
                things that you need to know below. You don't have to be an
                expert, but its important to be comfortable with HTML and
                JavaScript. If you are not, do a quick refresher course before
                you start to get the best out of this article.{" "}
              </p>{" "}
              {""}
              <p>
                I have added CSS and Github but they are not necessary. CSS is
                good to know when you want to make your blog presentable, and
                Github is for your project files.
              </p>
              <h2>Prerequisites</h2>
              <ol>
                <li>HTML</li>
                <li>JavaScript</li>
                <li>CSS</li>
                <li>Github</li>
              </ol>
            </article>
            <article class="jsx">
              <h2>JSX</h2>
              <p>
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
              <h2>Setup a React Native project</h2>
              <p>To start our React project, we will do as follows:</p>
              {""}
              <ol>
                <li>
                  Download a package manager (I already have Yarn) like Yarn/npm
                </li>
                <li>
                  Open your terminal with the following command:{" "}
                  <em>ctrl + alt + T</em>
                </li>
                <li>
                  create a folder with the following command:{" "}
                  <em>
                    mkdir (project_name). My project folder is called rect
                  </em>
                  .{" "}
                </li>
                <p>Result:</p>
                {""} <img src={terminal} alt="..." />
                <li>
                  Enter the folder you just created with the following command:{" "}
                  <em>cd project_name </em>
                </li>
                <p>Result:</p> {""}
                <img src={enter_terminal} alt="..." />
                <li>
                  Initiate your React native project with the following command:
                  <em>npx create-react-app my-app</em>. Replace "my-app" with the name of your application, my command would be 
                  (npx create-react-app my-blog) because my folder name is <em>my-blog</em>
                </li>
                <p>Result: </p>
                <img src={install} alt=""/>
                <li>Enter your project folder with the following command: <em>cd my-blog (in my case)</em></li>
                <li>Open your project folder with the following command: <em>code .</em> and your project folder will be opened in visual studio if you have it</li>
                <p>Result: </p>{""}
                <img src={explorer} alt="" />
                <p>Our project foldr in now setup. React has generated alot of files for us. Of all the files and folders that were generated, App.js and index.js are 
                 the most important. Since we have already agreed that we will be using JSX for our blog, rename thos files to App.jsx and index.jsx.
                </p>
              </ol>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Reakt;
