import React from 'react'
import './home.css'
import { Container } from 'react-bootstrap'
import property from "../../assets/image/single-property.jpg";
import PropertyDetailsTab from "../PropertyDetailsTab";
import { useState } from "react";
import room from "../../assets/image/deal-01.jpg";
import kitchen from "../../assets/image/deal-02.jpg";
import home from "../../assets/image/deal-03.jpg";
import FlatSpace from "../../assets/image/info-icon-01.png";
import Contract from "../../assets/image/info-icon-02.png";
import Payment from "../../assets/image/info-icon-03.png";
import Safety from "../../assets/image/info-icon-04.png";


const Propertydetails = () => {

  const [activeTab, setActiveTab] = useState('appartment');
  const selectedTab = (id) => {
    setActiveTab(id);
  };
  const data = {

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

  };
  return (
    <div className='mainproperty'>
      <div className="page-heading py-5">
        <Container className="text-center py-5">
          <div className="row pb-5 pt-3">
            <div className="col-lg-12">
              <span className='bg-white py-2 px-3 text-uppercase'><a href="#" className='text-decoration-none text-black'>Home</a>  /  Single Property</span>
              <h3 className='text-white pt-3 fw-bold fs-1 text-uppercase'>Single Property</h3>
            </div>
          </div>
        </Container>
      </div>

      <div className="single-property section py-5">
        <div className="container py-5">
          <div className="row ">
            <div className="col-lg-8">
              <div className="main-image pb-5">
                <img src={property} alt="" className='img-fluid' />
              </div>
              <div className="main-content pb-5">
                <span className="p-2" style={{ backgroundColor: "#fbd9cf", borderRadius: '5px' }}>Apparment</span>
                <h4 className='fw-bold pb-5 pt-4'>24 New Street Miami, OR 24560</h4>
                <p>Get <strong>the best villa agency</strong> HTML CSS Bootstrap Template for your company website. TemplateMo provides you the <a href="https://www.google.com/search?q=best+free+css+templates" className='text-decoration-none'>best free CSS templates</a> in the world. Please tell your friends about it. Thank you. Cloud bread kogi bitters pitchfork shoreditch tumblr yr succulents single-origin coffee schlitz enamel pin you probably haven't heard of them ugh hella.

                  <br /><br />When you look for free CSS templates, you can simply type TemplateMo in any search engine website. In addition, you can type TemplateMo Digital Marketing, TemplateMo Corporate Layouts, etc. Master cleanse +1 intelligentsia swag post-ironic, slow-carb chambray knausgaard PBR&amp;B DSA poutine neutra cardigan hoodie pop-up.</p>
              </div>
              <div className="accordion py-5" id="accordionFlushExample">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                    >
                      Best useful links ?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      Dolor <span className='fw-bold'>almesit amet </span>, consectetur adipiscing elit, sed doesn't eiusmod tempor kinfolk tonx seitan crucifix 3 wolf moon bicycle rights keffiyeh snackwave wolf same vice, chillwave vexillologist incididunt ut labore consectetur <code>adipiscing </code>elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                    >
                      How does this work ?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      Dolor <span className='fw-bold'>almesit amet </span>, consectetur adipiscing elit, sed doesn't eiusmod tempor kinfolk tonx seitan crucifix 3 wolf moon bicycle rights keffiyeh snackwave wolf same vice, chillwave vexillologist incididunt ut labore consectetur <code>adipiscing </code>elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                    >
                      Why is Villa Agency the best ?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      Dolor <span className='fw-bold'>almesit amet </span>, consectetur adipiscing elit, sed doesn't eiusmod tempor kinfolk tonx seitan crucifix 3 wolf moon bicycle rights keffiyeh snackwave wolf same vice, chillwave vexillologist incididunt ut labore consectetur <code>adipiscing </code>elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 ps-5">
              <div className="info-table ps-5">
                <li style={{ listStyleType: "none" }}>
                  <div className="main pt-5" style={{ display: "flex" }}>
                    <div className="image pt-2">
                      <img src={FlatSpace} alt="icon-01" className="img-fluid" />
                    </div>
                    <div className="text px-4">
                      <h4 className="fw-bold">450 m2</h4>
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
                  <div className="main py-5" style={{ display: "flex" }}>
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
                      <button
                        className={`nav-link px-4 fw-bold ${item.id === activeTab ? 'active' : ''}`}
                        style={{ backgroundColor: item.id === activeTab ? "#F35525" : 'black', color: "white" }}
                        onClick={() => selectedTab(item.id)}
                        data-bs-toggle="tab"
                        data-bs-target={item.target}>
                        {item.title}
                      </button>
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

export default Propertydetails;
