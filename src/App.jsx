import { useState } from 'react'
import DownloadImg from "./assets/download.png"
import './App.css';
import Blog from './comopents/Blog';
import JSPractice from './comopents/jsp.practice'

function App() {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: " 1) 7 Node.js design pattern every developer should known",
      description: "React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript",
      imgurl: DownloadImg

    },
    {
      id: 2,
      title: " 2) node the from tje tha is content",
      description: "React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript",
      imgurl: DownloadImg,

    },
    {
      id: 3,
      title: " 3) 7 Node.js design pattern every developer should known",
      description: "React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript",
      imgurl: DownloadImg


    },
    {
      id: 4,
      title: "4) 7 Node.js design pattern every developer should known",
      description: "save tree and save water...",
      imgurl: DownloadImg
    }
  ]);


  function handleClickMe(display) {
    setDisplay(!display);

  }

  const [title, settitle] = useState("My blog");

  const genratenewblog = () => {
    return {
      id: blogs.length + 1,
      title: `blog number ${blogs.length + 1}`,
      description: `blog number ${blogs.length + 1}`,
      imgurl: DownloadImg,
    }
  }
  const [display, setDisplay] = useState(true);

  function handleAddblog() {
    const newBlog = genratenewblog();


    setBlogs([...blogs, newBlog]);
  };

  const handleif = () => {
    return {
      id: blogs.length + 1,
      title: `blog number ${blogs.length + 1}`,
      description: `blog number ${blogs.length + 1}`,
      imgurl: DownloadImg,

    }
  };
  const [show, showdisplay] = useState(true);
  function clickthen() {
    const content = handleif();

    setBlogs([...blogs, content]);
  }



  const [content, blogcontent] = useState(true)
  function handlehideblog(content) {
    const newBlog = genratenewblog;
    blogcontent(!content);

  }
  let countEl = document.getElementById("count-el")
  console.log(countEl)

  let count = 0
  function increment() {
    // console.log("the button was clicked")
    count = count + 1
    countEl.innerText = count
    console.log(countEl)

  }



  return (
    <>
      <button onClick={() => handleClickMe(display)}>{display ? "Hide" : "show"} second blog</button>
      <h2>My blogs</h2>
      <button onClick={() => handleAddblog()}>Add blog</button>
      {
        blogs.map((blog) => (
          <Blog
            title={blog.title}
            description={blog.description}
            imgurl={blog.imgurl}
            show={blog.id === 2 ? (display ? true : false) : true}
          />
        ))
      }
      <button onClick={() => clickthen()}>Add New Button</button>
      <button onClick={() => handlehideblog(content)}>{content ? "Hide" : "show"} blogs</button>

      <h1> Hello people </h1>
      <h2 id="count-el">0</h2>
      <button onClick={() => increment()}>increment</button>
      <input type="checkbox" id="darkmode-toggle"></input>
      <label className="label1" for="darkmode-toggle"></label>
      <div className='background'>
        <h1>My new websit </h1>


      </div>


      <JSPractice />

    </>

  )
}


export default App;
