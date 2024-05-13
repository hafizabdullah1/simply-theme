import React,{Component} from "react";
import HomePage from "./HomePage";
import Collection from "./Collection";
import Featured from "./Featured";
import Need from "./Need";
import Testimonials from "./Testimonials";
import Shop from "./Shop";
import Footer from "./Footer";

class Main extends Component{
    render(){
        return(
        <>
        <main>
            <HomePage/>
            <Collection/>
            <Featured/>
            <Need/>
            <Testimonials/>
            <Shop/>
            <Footer/>
        </main>
        </>
        )
    }
}
export default Main;