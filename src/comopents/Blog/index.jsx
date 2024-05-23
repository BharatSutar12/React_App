import "./styles/Blog.css";


function Blog({ title, description, imgurl }) {
    // const title = "7 Node.js design pattern every developer should known";
    // const description = "React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript";
    // const imgurl = "c:\Users\Admin\Downloads\download.png";
    
    return (
        <>
            <div className="blogcontainer">
                <div className="details">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <div className="imgwrapper">
                    <img src={imgurl} />
                </div>
            </div>
        </>
    )
}
export default Blog;