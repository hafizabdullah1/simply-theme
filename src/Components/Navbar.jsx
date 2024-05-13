import React from "react";

class Navbar extends React.Component{

    render(){
        return<>
        <header>
        <nav>
        <div>
        <img src="https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2020/06/plants-store-logo-green.svg" alt="" />
        <h3>Simply Natural</h3>
        </div>
        <ul>
            <li>home</li>
            <li>store</li>
            <li>about us</li>
            <li>contact us</li>
            <li>my account</li>
            <li> <span>
                $0.00 &nbsp; <i class="fa-solid fa-bag-shopping"></i> 
            </span>&nbsp; &nbsp;
                <i class="fa-solid fa-user"></i>
            </li>
        </ul>
        </nav>
        </header>
        </>
    }


}
export default Navbar;