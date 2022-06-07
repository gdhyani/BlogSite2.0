import React, { useState } from "react";
import "./BlogPS.css";
import BlogWriter from "./BlogWriter";
import BlogForm from "./BlogForm";
const BlogPS = () => {
  const [scrollTrack, setscrollTrack] = useState(true);
  return (
    <div className="blogPSContainer">
      <div className="container">
        <div className="row">
          <div className="scol col col-md-3">
            <div className="ssocial">
              <a href="/">
                <i class="fa-brands fa-facebook"></i>
              </a>
              <a href="/">
                <i class="fa-brands fa-twitter"></i>
              </a>
              <a href="/">
                <i class="fa-brands fa-whatsapp"></i>
              </a>
              <a href="/">
                <i class="fa-brands fa-get-pocket"></i>
              </a>
            </div>
            <div className="scrollTrack">
              <div className="sttitle">
                <h6>What I Talk About</h6>
                <button
                  onClick={() => {
                    setscrollTrack(!scrollTrack);
                  }}
                >
                  <i
                    class={`fa-solid fa-angle-${scrollTrack ? "up" : "down"}`}
                  ></i>
                </button>
              </div>

              <div
                className="stmain"
                style={{ display: scrollTrack ? "block" : "none" }}
              >
                <ul>
                  <li>Heading 1: </li>
                  <li>Heading 2: </li>
                  <li>Heading 3: </li>
                  <li>Heading 4: </li>
                  <li>Heading 5: </li>
                  <li>Heading 5: </li>
                  <li>Heading 5: </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="scol col-12 col-md-8">
            <div className="scolm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
              reiciendis voluptate accusamus soluta distinctio nisi, sit id
              totam natus nihil unde optio quo laborum, vero assumenda maiores
              rerum vitae nemo?Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Dignissimos cumque adipisci qui error neque?
              Vitae minus temporibus quisquam, veritatis fugiat nisi sapiente
              commodi labore dolore itaque repellat aperiam iste autem!Irure
              aute excepteur ut officia do fugiat aliqua ea ad. Laborum
              consectetur nisi pariatur ex ex sit laborum irure. In laborum
              ipsum minim eu duis in ad qui irure ullamco nostrud mollit
              occaecat officia. Labore voluptate dolor aute Lorem sit do. Esse
              culpa velit magna qui ipsum duis. Culpa non qui qui magna
              adipisicing aliqua mollit magna pariatur laboris sint enim. Id
              ipsum fugiat id officia ex enim adipisicing eiusmod et pariatur
              aliqua nulla esse. Deserunt excepteur labore magna magna laborum
              aliqua. Incididunt anim occaecat nulla ipsum irure id. Amet
              aliquip velit anim amet exercitation. Reprehenderit culpa duis in
              fugiat duis mollit cillum. Magna exercitation duis incididunt
              excepteur anim dolor cupidatat. Est aute Lorem eiusmod elit tempor
              labore anim cillum mollit officia. Pariatur irure id exercitation
              magna ullamco. Veniam aute tempor dolore nostrud ipsum et magna
              adipisicing. Ea sint velit proident exercitation voluptate. Do
              cillum enim incididunt culpa. Id commodo sit irure anim
              consectetur adipisicing. Ad aliqua aliqua eiusmod amet id do
              reprehenderit. Fugiat nulla veniam adipisicing non irure
              cupidatat. Cupidatat occaecat labore nostrud excepteur. Dolore
              nostrud consequat officia ullamco elit pariatur et non adipisicing
              cupidatat aute ipsum voluptate. Ut adipisicing nisi culpa laboris
              quis incididunt aliqua excepteur. Laborum sit duis pariatur dolor
              ullamco sit id enim ut duis qui eu. Deserunt pariatur anim anim
              voluptate incididunt. Ipsum eu in ullamco aliquip fugiat laboris
              amet. Duis nulla et et quis culpa ad adipisicing minim dolor velit
              occaecat mollit quis laboris. Duis excepteur ex sunt irure dolore
              culpa. Cillum laboris quis elit voluptate sunt consectetur id est.
              Ut qui ad ad enim labore pariatur reprehenderit nulla eu. Nostrud
              velit adipisicing excepteur consequat nostrud consectetur velit
              adipisicing. Nulla sit et ullamco veniam elit eu proident Lorem
              anim dolore incididunt aute mollit. Dolor in tempor ullamco anim
              minim excepteur nisi. Quis voluptate id nostrud sint duis enim. In
              reprehenderit aliqua pariatur eiusmod occaecat elit culpa commodo
              sunt. Lorem mollit ut et deserunt velit. Sit sit et officia in
              aute magna tempor laboris non laborum mollit culpa velit. Laborum
              adipisicing aliquip ea aute sunt exercitation sit dolor do
              occaecat dolor velit esse pariatur. Duis do ut est occaecat dolore
              Lorem dolor est aliquip.
            </div>
            
          </div>
          <div className="scol col-12 col-md-1"></div>
        </div>
        <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-8">
          <BlogWriter/>
          <BlogForm/>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default BlogPS;
