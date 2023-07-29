import { Button, Link } from "@mui/material";
import React from "react"
import './/css/welcome.css';
function Welcome() {
    return (
        <div className="div_body">
            <div className="d-flex justify-content-center"><h1 className="h1_style mt-1">Welcome</h1></div>
            <div>
                <div className="d-flex justify-content-between col-md-5 link_container mt-4">
                    <Link href="/login">Login</Link>
                    <Link href="/createProfile">Create Profile</Link>
                </div>
                <div className="d-flex justify-content-between col-md-4 btn_div mt-5">
                    <a href="/catalogue"><button type="button" class="btn btn-primary btn-rounded btn_review">Review Catalogue</button></a>

                </div>
            </div>
            <div className='d-flex justify-content-center mt-6'>
                <iframe width="200" height="200" className="responsive-iframe"
                    src="https://player.vimeo.com/video/137857207"
                    title="Vimeo video"
                    allowfullscreen
                ></iframe>
            </div>


        </div>
    )
}
export default Welcome;