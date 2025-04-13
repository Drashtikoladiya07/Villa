import "./home.css";
import hall from "../../assets/image/villa4.jpg";
import FlatSpace from "../../assets/image/info-icon-01.png";
import Contract from "../../assets/image/info-icon-02.png";
import Payment from "../../assets/image/info-icon-03.png";
import Safety from "../../assets/image/info-icon-04.png";
import frame from "../../assets/image/video-frame.jpg";
import room from "../../assets/image/deal-01.jpg";
import kitchen from "../../assets/image/deal-02.jpg";
import home from "../../assets/image/deal-03.jpg";
import luxuryvilla1 from "../../assets/image/property-01.jpg";
import luxuryvilla2 from "../../assets/image/property-02.jpg";
import luxuryvilla3 from "../../assets/image/property-03.jpg";
import Apartment from "../../assets/image/property-04.jpg";
import Penthouse from "../../assets/image/property-05.jpg";
import ModernCondo from "../../assets/image/property-06.jpg";
import PropertyDetailsTab from "../PropertyDetailsTab";
import { Container, Row, Col } from 'react-bootstrap';
import { useState } from "react";



function Home() {

    const [activeTab, setActiveTab] = useState('appartment');
    const selectedTab = (id) => {
        setActiveTab(id);
    };
    
    const data = {
        records: [
            {
                count: 34,
                title: "Buildings Finished Now",
            },
            {
                count: 12,
                title: "Years Experience",
            },
            {
                count: 24,
                title: "Awwards Won 2023",
            },
        ],

        navItems: [
            { id: 'appartment', title: 'Appartment', target: '#appartment' },
            { id: 'villa', title: 'Villa House', target: '#villa' },
            { id: 'penthouse', title: 'Penthouse', target: '#penthouse' },
        ],

        navItems: [
            {
                id: 'appartment',
                title: 'Appartment',
                head: 'Extra Info About Property',
                target: '#appartment',
                space: '185 m2',
                floor: '26th',
                rooms: '4',
                parking: 'Yes',
                payment: 'Bank',
                image: room,
                description1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.',
                description2: 'When you need free CSS templates, you can simply type TemplateMo in any search engine website. In addition, you can type TemplateMo Portfolio, TemplateMo One Page Layouts, etc.'
            },
            {
                id: 'villa',
                title: 'Villa House',
                head: 'Detail Info About Villa',
                target: '#villa',
                space: '250 m2',
                floor: '26th',
                rooms: '5',
                parking: 'Yes',
                payment: 'Bank',
                image: kitchen,
                description1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.',
                description2: 'Swag fanny pack lyft blog twee. JOMO ethical copper mug, succulents typewriter shaman DIY kitsch twee taiyaki fixie hella venmo after messenger poutine next level humblebrag swag franzen.'
            },
            {
                id: 'penthouse',
                title: 'Penthouse',
                head: 'Extra Info About Penthouse',
                target: '#penthouse',
                space: '320 m2',
                floor: '34th',
                rooms: '6',
                parking: 'Yes',
                payment: 'Bank',
                image: home,
                description1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.',
                description2: 'Swag fanny pack lyft blog twee. JOMO ethical copper mug, succulents typewriter shaman DIY kitsch twee taiyaki fixie hella venmo after messenger poutine next level humblebrag swag franzen.'
            },
        ],

        villa: [
            {
                image: luxuryvilla1,
                title: 'Luxury Villa',
                amount: '$2,264,000',
                hading: '18 New Street Miami, OR 97219',
                bedrooms: '8',
                bathrooms: '8',
                area: '545m2',
                floor: '3',
                parking: '6 spots',
            },

            {
                image: luxuryvilla2,
                title: 'Luxury Villa',
                amount: '$1,180,000',
                hading: '54 Mid Street Florida, OR 27001',
                bedrooms: '6',
                bathrooms: '5',
                area: '450m2',
                floor: '3',
                parking: '8 spots',
            },

            {
                image: luxuryvilla3,
                title: 'Luxury Villa',
                amount: '$1,460,000',
                hading: '26 Old Street Miami, OR 38540',
                bedrooms: '5',
                bathrooms: '4',
                area: '225m2',
                floor: '3',
                parking: '10 spots',
            },

            {
                image: Apartment,
                title: 'Apartment',
                amount: '$584.500',
                hading: '12 New Street Miami, OR 12650',
                bedrooms: '4',
                bathrooms: '3',
                area: '125m2',
                floor: '25th',
                parking: '2 cars',
            },

            {
                image: Penthouse,
                title: 'Penthouse',
                amount: '$925.600',
                hading: '34 Beach Street Miami, OR 42680',
                bedrooms: '4',
                bathrooms: '4',
                area: '180m2',
                floor: '38th',
                parking: '2 cars',
            },

            {
                image: ModernCondo,
                title: 'Modern Condo',
                amount: '$450.000',
                hading: '22 New Street Portland, OR 16540',
                bedrooms: '3',
                bathrooms: '2',
                area: '165m2',
                floor: '26th',
                parking: '3 cars',
            },
        ],

    };

    return (
        <div className="home">

            <div id="carouselExample" className="carousel slide py-3">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="img01 img-fluid">
                            <div className="header-text">
                                <div className="category fw-bold mb-4 bg-white px-3 py-1" style={{ width: "fit-content" }}>
                                    Toronto, <span style={{ color: "#F35525" }}>Canada</span>
                                </div>
                                <h2 className="text-white fw-bold text-uppercase" style={{ fontSize: "60px" }}>
                                    Hurry! <br /> Get the Best <br /> Villa for <br /> you
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="img02 img-fluid">
                            <div className="header-text">
                                <div className="category fw-bold mb-4 bg-white px-3 py-1" style={{ width: "fit-content" }}>
                                    Melbourne, <span style={{ color: "#F35525" }}>Australia</span>
                                </div>
                                <h2 className="text-white fw-bold text-uppercase" style={{ fontSize: "60px" }}>
                                    Be Quick! <br /> Get the Best <br /> Villa in <br /> Town
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="img03 img-fluid">
                            <div className="header-text">
                                <div className="category fw-bold mb-4 bg-white px-3 py-1" style={{ width: "fit-content" }}>
                                    Miami, <span style={{ color: "#F35525" }}>South Florida</span>
                                </div>
                                <h2 className="text-white fw-bold text-uppercase" style={{ fontSize: "60px" }}>
                                    Act Now! <br /> Get the <br /> highest <br /> level <br />{" "}
                                    penthouse
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className="container pt-5">
                <div className="row py-5">
                    <div className="col-lg-4 ps-5">
                        <img src={hall} alt="image" className="img-fluid" />
                    </div>
                    <div className="col-lg-5">
                        <div className="fs-1">
                            <h6 className="fw-bold" style={{ color: "#F35525" }}>| Featured</h6>
                            <h2 className="fw-bold fs-1 pt-4">Best Appartment <br /> & Sea view</h2>
                        </div>
                        <div className="accordion pt-5" id="accordionFlushExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne">Best useful links ?</button>
                                </h2>
                                <div id="flush-collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">
                                        Get <strong>the best villa</strong> website template in HTML
                                        CSS and Bootstrap for your business. TemplateMo provides you
                                        the{" "}<a href="https://www.google.com/search?q=best+free+css+templates" className="text-decoration-none">
                                            best free CSS templates</a>{" "}in the world. Please tell your friends about it.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo">How does this work ?</button>
                                </h2>
                                <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample" >
                                    <div className="accordion-body">
                                        Dolor <strong>almesit amet</strong>, consectetur adipiscing
                                        elit, sed doesn't eiusmod tempor incididunt ut labore
                                        consectetur <code>adipiscing</code> elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree">Why is Villa Agency the best ?</button>
                                </h2>
                                <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">
                                        Dolor <strong>almesit amet</strong>, consectetur adipiscing
                                        elit, sed doesn't eiusmod tempor incididunt ut labore
                                        consectetur <code>adipiscing</code> elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 ps-4">
                        <div className="info-table ps-4">
                            <li style={{ listStyleType: "none" }}>
                                <div className="main pt-4" style={{ display: "flex" }}>
                                    <div className="image pt-2">
                                        <img src={FlatSpace} alt="icon-01" className="img-fluid" />
                                    </div>
                                    <div className="text px-4">
                                        <h4 className="fw-bold">250 m2</h4>
                                        <h6 style={{ color: "#AAAAAA" }}>Total Flat Space</h6>
                                    </div>
                                </div>
                            </li>
                            <li style={{ listStyleType: "none" }}>
                                <div className="main pt-5" style={{ display: "flex" }}>
                                    <div className="image pt-2">
                                        <img src={Contract} alt="icon-02" className="img-fluid" />
                                    </div>
                                    <div className="text px-4">
                                        <h4 className="fw-bold">Contract</h4>
                                        <h6 style={{ color: "#AAAAAA" }}>Contract Ready</h6>
                                    </div>
                                </div>
                            </li>
                            <li style={{ listStyleType: "none" }}>
                                <div className="main pt-5" style={{ display: "flex" }}>
                                    <div className="image pt-2">
                                        <img src={Payment} alt="icon-03" className="img-fluid" />
                                    </div>
                                    <div className="text px-4">
                                        <h4 className="fw-bold">Payment</h4>
                                        <h6 style={{ color: "#AAAAAA" }}>Payment Process</h6>
                                    </div>
                                </div>
                            </li>
                            <li style={{ listStyleType: "none" }}>
                                <div className="main pt-5 pb-4" style={{ display: "flex" }}>
                                    <div className="image pt-2">
                                        <img src={Safety} alt="icon-04" className="img-fluid" />
                                    </div>
                                    <div className="text px-4">
                                        <h4 className="fw-bold">Safety</h4>
                                        <h6 style={{ color: "#AAAAAA" }}>24/7 Under Control</h6>
                                    </div>
                                </div>
                            </li>
                        </div>
                    </div>
                </div>
            </div>

            <div className="video section ">
                <div className="col-lg-12">
                    <div className="hh text-center pt-5 img-fluid">
                        <h6 style={{ color: "#F35525" }} className="pt-5 fw-bold text-uppercase fs-5 pb-3"> | Video View</h6>
                        <h2 className="text-white fw-bold fs-1">Get Closer View & <br /> Different Feeling</h2>
                    </div>
                </div>
            </div>

            <div className="video-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="video-frame">
                                <img src={frame} alt="video" className="img-fluid" />
                                <a href="https://youtube.com"><i className="fa fa-play"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container py-5">
                <div className="row py-5">
                    <div className="col-lg-12">
                        <div className="wrapper">
                            <div className="boxs row">
                                {data.records.map((item, index) => (
                                    <div className="col-lg-4 pb-5" key={index}>
                                        <div className="box" style={{ display: "flex", backgroundColor: "#FFEEE9", width: "fit-content", paddingInline: "40px", paddingBlock: "10px", paddingBlockStart: "25px" }}>
                                            <h2 className="fw-bold pe-4 fs-1" style={{ color: "#F35525" }}>{item.count}</h2>
                                            <p className="fw-bold pt-1">
                                                {item.title.split(" ")[0]}
                                                <br /> {item.title.split(" ").slice(1).join(" ")}
                                            </p>
                                        </div>
                                        <div className="circle"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section best-deal py-5">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="section-heading">
                                <h6 className="fw-bold" style={{ color: "#F35525" }}>| Best Deal</h6>
                                <h2 className="fw-bold fs-1">Find Your Best Deal <br /> Right Now!</h2>
                            </div>
                        </div>
                        <div className="col-lg-5 pt-5">
                            <div className="nav-wrapper">
                                <ul className="nav">
                                    {data.navItems.map((item, index) => (
                                        <li key={index} className="nav-item">
                                            <button className={`nav-link px-4 fw-bold ${item.id === activeTab ? 'active' : ''}`}
                                                style={{ backgroundColor: item.id === activeTab ? "#F35525" : 'black', color: "white" }}
                                                onClick={() => selectedTab(item.id)}
                                                data-bs-toggle="tab"
                                                data-bs-target={item.target}> {item.title}</button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-12 pt-5">
                            <div className="row">
                                <div className="tab-content">
                                    {data.navItems.map((item) => (
                                        <PropertyDetailsTab key={item.id} item={item} activeTab={activeTab} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="properties py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 offset-lg-4">
                            <div className="section-heading text-center fw-bold py-5">
                                <h6 style={{ color: "#F35525" }} className="fw-bold text-uppercase">| Properties</h6>
                                <h2 className="fw-bold fs-1 pb-5">We Provide The Best Property You Like</h2>
                            </div>
                        </div>
                    </div>
                    <Container>
                        <Row>
                            {data.villa.map((item, index) => (
                                <Col key={index} lg={4} md={6} sm={12} id={item.id}>
                                    <div className="villa p-4 my-3" style={{ backgroundColor: "#F8F8F8", borderRadius: '20px' }}>
                                        <img src={item.image} alt="" className="img-fluid" style={{ borderRadius: '10px' }} />
                                        <div className="title pt-4" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <h6 className="p-2" style={{ backgroundColor: "#fbd9cf", borderRadius: '5px' }}>{item.title}</h6>
                                            <h5 className="fw-bold" style={{ color: "#F35525" }}>{item.amount}</h5>
                                        </div>
                                        <h5 className="fw-bold py-3">{item.hading}</h5>
                                        <div className="room">
                                            <ul style={{ paddingLeft: '0px' }}>
                                                {[
                                                    { label: "Bedrooms :", value: item.bedrooms },
                                                    { label: "Bathrooms :", value: item.bathrooms },
                                                    { label: "Area :", value: item.area },
                                                    { label: "Floor :", value: item.floor },
                                                    { label: "Parking :", value: item.parking },
                                                ].map((info, infoIndex) => (
                                                    <li key={infoIndex} style={{ listStyleType: "none", marginRight: '10px', color: "#4A4A4A" }}>
                                                        {info.label} <span style={{ color: "black" }} className="fw-bold">{info.value}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="main-button py-4 text-center">
                                            <a href="#" style={{ textDecoration: 'none', borderRadius: '20px' }} className="fw-bold p-2 px-4">Schedule a visit</a>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </div>
            </div>

            <div className="contact section my-5 img-fluid">
                <div className="container ">
                    <div className="row ">
                        <div className="col-lg-4 offset-lg-4 py-5">
                            <div className="heading text-center py-5">
                                <h6 className="fw-bold text-uppercase" style={{ color: "#F35525" }}>| Contact Us</h6>
                                <h2 className="fw-bold text-white fs-1">Get In Touch With Our Agents</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contactform py-5 ">
                <Container className="py-5">
                    <Row>
                        <div className="col-lg-7">
                            <div id="map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18716.465598684536!2d-80.13786942789923!3d25.92907598682034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9ad17d7287f13%3A0xa268b8890d1e0035!2sSunny%20Isles%20Beach!5e1!3m2!1sen!2sin!4v1732081543975!5m2!1sen!2sin" width="600" height="450" style={{ border: "0", borderRadius: '10px', width: '100%' }} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                            <div className="row py-5">
                                <div className="col-lg-6">
                                    <div className="item phone" style={{ display: 'flex' }}>
                                        <i className="fa-solid fa-phone-volume fs-1 pe-4 pt-1" style={{ color: "#F35525" }}></i>
                                        <h6 className="fw-bold fs-5" >010-020-0340<br /><span style={{ color: '#4A4A4A' }} className="fs-6">Phone Number</span></h6>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="item email" style={{ display: 'flex' }}>
                                        <i className="fa-regular fa-envelope fs-1 pe-4 pt-1" style={{ color: "#F35525" }}></i>
                                        <h6 className="fw-bold fs-5">info@villa.co<br /><span style={{ color: '#4A4A4A' }} className="fs-6">Business Email</span></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 pb-5">
                            <form id="contact-form">
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
                                        <a href="#" style={{ textDecoration: 'none', borderRadius: '20px' }} className="fw-bold p-2 px-4">Send Message</a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </Row>
                </Container>
            </div >

            <footer>
                <div className="ms-0 ps-0">
                    <div className="col-lg-12 bg-black text-center py-4 ">
                        <p className="text-white fw-bold">Copyright 2048 Villa Agency Co., Ltd. All rights reserved.
                            Design: <a href="https://templatemo.com" style={{ textDecoration: 'none' }} className="text-white">TemplateMo</a></p>
                    </div>
                </div>
            </footer>

        </div >
    );
}
export default Home;