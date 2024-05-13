import React from "react";

class Testimonials extends React.Component{
    render(){
        return<>
        <div className="mainTest">
            <div className="test">
                <h1>Testimonials</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className="student">
                    <div className="studentImg"></div>
                   <div className="studentContext">
                   <p>Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt. </p>
                    <h4>Sarah Jones</h4>
                    <span>Interior Designer</span>
                   </div>
                </div>
            </div>
            <div className="studentRight">
                <div className="student">
                    <div className="studentImg studentImg1"></div>
                    <div className="studentContext">
                    <p>Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt. </p>
                    <h4>Sarah Jones</h4>
                    <span>Interior Designer</span>
                    </div>
                </div>

                <div className="student">
                    <div className="studentImg studentImg2"></div>
                    <div className="studentContext">
                    <p>Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt. </p>
                    <h4>Sarah Jones</h4>
                    <span>Interior Designer</span>
                    </div>
                </div>
                </div>
        </div>
        </>
    }
}
export default Testimonials;