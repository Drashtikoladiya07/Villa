import React from 'react'
import './home.css'
import { Container } from 'react-bootstrap'
import PropertiesTab from "../propertiesTab";
import { useState } from "react";
import Navbar from '../navbar/navbar'

const Properties = () => {

    const [activeTab, setActiveTab] = useState('showall');
    const selectedTab = (id) => {
        setActiveTab(id);
    };

    const [active, setActive] = useState('2');
    const selected = (id) => {
        setActive(id);
    };

    const data = {

        navItems: [
            { id: 'showall', title: 'Show All', target: '#show all' },
            { id: 'appartment', title: 'Appartment', target: '#appartment' },
            { id: 'villa', title: 'Villa House', target: '#villa' },
            { id: 'penthouse', title: 'Penthouse', target: '#penthouse' },
        ],

        navItem: [
            { id: '1', title: '1', target: '#1' },
            { id: '2', title: '2', target: '#2' },
            { id: '3', title: '3', target: '#3' },
            { id: '>>', title: '>>', target: '#>>' },
        ],

    };

    const [filter, setFilter] = useState('');

    const filteredNavItems = data.navItems.filter((item) => {
        console.log("======><======" + item.title.toLowerCase().includes(filter.toLowerCase()));
        return item.title.toLowerCase().includes(filter.toLowerCase());
    });

    return (

        <div className='properties'>
            <div className="page-heading py-5">
                <Container className="text-center py-5">
                    <div className="row pb-5 pt-3">
                        <div className="col-lg-12">
                            <span className='bg-white py-2 px-3 text-uppercase'><a href="#" className='text-decoration-none text-black'>Home</a>  /  Properties</span>
                            <h3 className='text-white pt-3 fw-bold fs-1 text-uppercase'>Properties</h3>
                        </div>
                    </div>
                </Container>
            </div>

            <Container>
                <div className="col-lg-8  offset-lg-3  pt-5 ">
                    <div className="nav-wrapper">
                        <ul className="nav">
                            {filteredNavItems.map((item, index) => (
                                <li key={index} className="nav-item">
                                    <button
                                        className={`nav-link px-4 fw-bold ${item.id === activeTab ? 'active' : ''}`}
                                        style={{ backgroundColor: item.id === activeTab ? "#F35525" : 'black', color: "white" }}
                                        onClick={() => { selectedTab(item.id); }} data-bs-toggle="tab"
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
                            {filteredNavItems.map((item) => (
                                item.id === activeTab && (
                                    <PropertiesTab key={item.id} item={item} selectedTab={selectedTab} activeTab={activeTab} />)
                            ))}
                        </div>
                    </div>
                </div>
            </Container>

            <div className="col-lg-6  offset-lg-5  py-5 ">
                <div className="nav-wrapper pb-5">
                    <a href='#' className='text-decoration-none'>
                        <ul className="nav pb-5">
                            {data.navItem.map((item, index) => (
                                <li key={index} className="nav-item">
                                    <button
                                        className={`nav-link px-3 py-2 mx-3 fw-bold rounded-5 ${item.id === active ? 'active' : ''}`}
                                        style={{ backgroundColor: item.id === active ? "#F35525" : 'black', color: "white" }}
                                        onClick={() => selected(item.id)}
                                        data-bs-toggle="tab"
                                        data-bs-target={item.target}>
                                        {item.title}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </a>
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
export default Properties