import "./styles/Blog.css";
import { useState } from "react";

//text color change

function Blog({ title, description, imgurl, show }) {
    const [color, setColor] = useState("red");

    const handlecolorChange = () => {
        if (color === "red") {
            setColor("blue");
        } else {
            setColor("red");
        }


    }

    return (
        <>
            {
                show ? (

                    <div className="blogcontainer">
                        <div className="details">
                            <h3 style={{ color: color }} onClick={() => handlecolorChange("blue")}>{title}</h3>
                            <p>{description}</p>
                        </div>
                        <div className="imgwrapper">
                            <img src={imgurl} />
                        </div>
                    </div>
                ) : (
                    <></>
                )

            }
        </>
    )
};
export default Blog;





