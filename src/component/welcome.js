import { Button, Link } from "@mui/material";
import React from "react"
import { useState } from "react";
import './/css/welcome.css';
import Test from "./text";
function Welcome() {
    const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
    return (
        <div className="div_body">
          <div>
          <header>
        <h1 id="nav-title">Welcome</h1>
        <nav>
            <ul>

                <li><a href="#">Login</a></li>
                <li><a href="/profile">Create Profile</a></li>
                <li><a href="catalogue">Review Catalogue</a></li>
            </ul>
        </nav>
    </header>
            </div> 
            <div className='d-flex justify-content-center'>
                <Test></Test>
                {/* <iframe width="200" height="200" className="responsive-iframe"
                    src="https://player.vimeo.com/video/137857207"
                    title="Vimeo video"
                    allowfullscreen
                ></iframe> */}
            </div>


        </div>
    )
}
export default Welcome;