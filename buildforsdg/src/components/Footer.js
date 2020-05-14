import React, { Component } from 'react';
import { FaFacebook,FaInstagram,FaTwitter,FaLinkedin,FaPinterest, FaEnvelope,FaPhone } from 'react-icons/fa';



 
class Footer extends Component {
    render() {
        return (
            <footer className ="container mw-100 h-50 mt0" style= {{backgroundColor: "#4d4d4d"}}>
                <div className ="row pa3">
                    <div className="col-5 offset justify-content-center">
                        <img src={process.env.PUBLIC_URL + '/images/Teamlogo.png'} alt="BrandLogo" width="90px" /> <br/>
                        <p>
                        Join the movement for better life…
                        </p>
                        <div className ="d-flex col-4 justify-content-around pointer  white" >
                        <FaPinterest />
                        <FaFacebook/>
                        <FaTwitter/>
                        <FaInstagram/>
                        <FaLinkedin/>
                        </div>
                    </div>
                    <div className="col-sm-5 offset shadow pa4 tc mt4">
                        <p className ="text-white tc">Quick Contact</p> <hr className ="w-10 bg-warning"/>
                        <p className ="text-white">Email:</p>
                        <p className ="text-white pointer grow"><span><FaEnvelope />-</span>buildsdgteam109@gmail.com</p>
                        <p className ="pa2 ma-2 pointer text-white"><span><FaPhone/></span>+234-9034567890</p>
                    </div>
                </div>
                 <div className="tc h-10 mb0 mt3 ww-100 pa3 bg-near-white" > Copyrights &copy; 2020 <span className="bg-warning" > Team109_BSD.</span> All rights reserved.</div>
                
            </footer>
        )
    }
}

export default Footer
