import React from "react";

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     backgroundColor: "white",
    //     color: "#252933",
    //     // border: "1px solid black",
    // });

    let myStyle = {
        color: props.mode === 'dark' ? 'white' : "#212529",
        backgroundColor : props.mode === 'light' ? 'white' : "#212529",
    }

    // const [btnText, setBtnText] = useState("Enable Dark Mode");

    // const toggleStyle = () => {
    //     if (myStyle.color === "#252933") {
    //         setMyStyle({
    //             backgroundColor: "#252933",
    //             color: "white",
    //             // border: "1px solid white",
    //         })
    //         setBtnText("Enable Light Mode");
    //     } else {
    //         setMyStyle({
    //             backgroundColor: "white",
    //             color: "#252933",
    //             // border: "1px solid black",
    //         })
    //         setBtnText("Enable Dark Mode");
    //     }
    // }

    document.title = 'TextUtils - About';

    return (
        <div className="accordion" id="accordionExample" style={{color: props.mode === 'dark' ? 'white' : "#212529"}}>
            <h1 className="my-4">About Us</h1>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" style={myStyle}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Accordion Item #1
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
            <div className="accordion-item"  style={myStyle}>
                <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Accordion Item #2
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Accordion Item #3
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
            {/* <button type="button" onClick={toggleStyle} className="btn btn-primary my-4">{btnText}</button> */}
        </div>
    );
}
