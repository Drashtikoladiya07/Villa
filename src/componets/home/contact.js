import React from 'react'
import './home.css'
import { Container } from 'react-bootstrap'

const contact = () => {
    return (
        <div className='maincontact'>
            <div className="page-heading py-5">
                <Container className="text-center py-5">
                    <div className="row pb-5 pt-3">
                        <div className="col-lg-12">
                            <span className='bg-white py-2 px-3 text-uppercase'><a href="#" className='text-decoration-none text-black'>Home</a>  /  Contact Us</span>
                            <h3 className='text-white pt-3 fw-bold fs-1 text-uppercase'>Contact Us</h3>
                        </div>
                    </div>
                </Container>
            </div>

            <div className="contact-page section py-5">
                <div className="container">
                    <div className="row pb-5">
                        <div className="col-lg-6">
                            <div className="section-heading pt-5 pb-3">
                                <h6 style={{ color: "#F35525" }} className='fw-bold text-uppercase'>| Contact Us</h6>
                                <h2 className='fw-bold fs-1 py-3'>Get In Touch <br />With Our Agents</h2>
                            </div>
                            <p>When you really need to download free CSS templates, please remember our website TemplateMo. Also, tell your friends about our website. Thank you for visiting. There is a variety of Bootstrap HTML CSS templates on our website. If you need more information, please contact us.</p>
                            <div className="row">
                                <div className="col-lg-7 py-5">
                                    <div className="item phone" style={{ display: 'flex' }}>
                                        <i className="fa-solid fa-phone-volume fs-1 pe-4 pt-1" style={{ color: "#F35525" }}></i>
                                        <h6 className="fs-5" >010-020-0340<br /><span style={{ color: '#4A4A4A' }} className="fs-6">Phone Number</span></h6>
                                    </div>
                                </div>
                                <div className="col-lg-7 pb-5">
                                    <div className="item email" style={{ display: 'flex' }}>
                                        <i className="fa-regular fa-envelope fs-1 pe-4 pt-1" style={{ color: "#F35525" }}></i>
                                        <h6 className="fs-5">info@villa.co<br /><span style={{ color: '#4A4A4A' }} className="fs-6">Business Email</span></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="contactform col-lg-6 mt-5 pb-5">
                            <form id="contact-form ">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <label>Full Name</label><br />
                                        <input type="name" placeholder="Your Name..." />
                                    </div>
                                    <div className="col-lg-12">
                                        <label>Email Address</label><br />
                                        <input type="text" placeholder="Your E-mail..." />
                                    </div>
                                    <div className="col-lg-12">
                                        <label>Subject</label><br />
                                        <input type="subject" placeholder="Subject..." />
                                    </div>
                                    <div className="col-lg-12">
                                        <label>Message</label><br />
                                        <textarea placeholder="Your Message"></textarea>
                                    </div>
                                    <div className="main-button">
                                        <a href="index.html" style={{ textDecoration: 'none', borderRadius: '20px' }} className="fw-bold p-2 px-4">Send Message</a>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-12 py-5">
                            <div id="map pt-5">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18716.465598684536!2d-80.13786942789923!3d25.92907598682034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9ad17d7287f13%3A0xa268b8890d1e0035!2sSunny%20Isles%20Beach!5e1!3m2!1sen!2sin!4v1732081543975!5m2!1sen!2sin" width="600" height="500" style={{ border: "0", borderRadius: '10px', width: '100%' }} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer>
                <div className="ms-0 ps-0">
                    <div className="col-lg-12 bg-black text-center py-4 ">
                        <p className="text-white fw-bold">Copyright 2048 Villa Agency Co., Ltd. All rights reserved.
                            Design: <a href="https://templatemo.com" style={{ textDecoration: 'none' }} className="text-white">TemplateMo</a></p>
                    </div>
                </div>
            </footer>
        </div>



    )
}

export default contact;
