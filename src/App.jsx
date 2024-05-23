import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Blog from './comopents/Blog';





function App() {
  const blogs = [
    {
      id: 1,
      title: "7 Node.js design pattern every developer should known",
      description: "React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript",
      imgurl: "c:\\Users\\Admin\\Downloads\\download.png"

    },
    {
      id: 2,
      title: "7 Node.js design pattern every developer should known",
      description: "React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript",
      imgurl: "c:\Users\Admin\Downloads\download.png"

    },
    {
      id: 3,
      title: "7 Node.js design pattern every developer should known",
      description: "React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript",
      imgurl: "c:\Users\Admin\Downloads\download.png"

    },
  ];


  return (

    <>
      {
        blogs.map((blog) => (
          <Blog title={blog.title}
            description={blog.description}
            imgurl={blog.imgurl}
          />
        ))
      }
    </>
  )
}

export default App;
