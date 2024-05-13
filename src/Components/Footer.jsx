import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className='footerContent'>
                    <div>
                        <img src='https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2020/06/plants-store-logo-green.svg' />
                        <h2>Simply Natural</h2>
                        <div>
                            <i class="fa-brands fa-facebook-f"></i>
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-linkedin-in"></i>
                        </div>
                    </div>
                    <div>
                    <h3>Quick Links</h3>
                        <ul>
                            <li>Introduction</li>
                            <li>know more About Us</li>
                            <li>Visit Store</li>
                            <li>Let’s Connect</li>
                        </ul>
                    </div>
                    <div>
                    <h3>Important Links</h3>
                        <ul>
                            <li>Privacy Policy</li>
                            <li>Shipping Details</li>
                            <li>Terms & Conditions</li>
                            <li>Media Kit</li>
                        </ul></div>
                    <div>
                    <h3>Get In Touch With Us For The Best Quality Plants & Succulents</h3>
                        <ul>
                            <li>Qui dolore ipsum quia dolor sit amet,</li>
                            <li>consec tetur adipisci velit, sed quia</li>
                            <li>non numquam eius modi tempora</li>
                            <li>incidunt lores ta porro ame.</li>
                        </ul></div>
                </div>
                <div className='footer'>
                        <h5>Copyright © 2023 Simply Natural</h5>
                        <h5>Powered by Simply Natural</h5>
                </div>
            </footer>
        )
    }
}
