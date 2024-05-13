import React from "react";
import plant1 from "./img/plant6-free-img.jpg"
import plant2 from "./img/cactus2-free-img.jpg"
import plant3 from "./img/plant4-free-img.jpg"


class Collection extends React.Component {

    render() {
        return <>
            <div className="mainCollection">
                <div className="fstCard">
                    <div className="smallCard">
                        <i class="fa-solid fa-spa"></i>
                        <div><h3>Plants Collection</h3>
                            <p>Any plants for your space</p></div>
                    </div>
                    <div className="smallCard">
                    <i class="fa-solid fa-box"></i>
                        <div><h3>Free Shipping</h3>
                            <p>Free shipping on order</p></div>
                    </div>
                    <div className="smallCard">
                    <i class="fa-solid fa-rotate"></i>
                        <div><h3>100% Money Back</h3>
                            <p>If the item didn't suit you</p></div>
                    </div>
                </div>
                <div className="scndCard">
                    <div className="card">
                        <img src={plant1} alt="plant1" />
                        <h2>Beautiful Plant Varieties</h2>
                        <h4>Luctus nec ullamcorper mattis, pulvinar dapibus leo.</h4>
                        <h5>SEE COLLECTION</h5>
                    </div>
                    <div className="card">
                        <img src={plant2} alt="plant1" />
                        <h2>Beautiful Plant Varieties</h2>
                        <h4>Luctus nec ullamcorper mattis, pulvinar dapibus leo.</h4>
                        <h5>SEE COLLECTION</h5>
                    </div>
                    <div className="card">
                        <img src={plant3} alt="plant1" />
                        <h2>Beautiful Plant Varieties</h2>
                        <h4>Luctus nec ullamcorper mattis, pulvinar dapibus leo.</h4>
                        <h5>SEE COLLECTION</h5>
                    </div>
                </div>
            </div>
        </>
    }
}
export default Collection;