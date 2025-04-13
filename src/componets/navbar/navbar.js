import { Container } from 'react-bootstrap';
import './navbar.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    const [active, setActive] = useState('home');

    const selected = (id) => {
        setActive(id);
    };

    const data = {
        navItems: [
            { id: 'home', title: 'Home' },
            { id: 'properties', title: 'Properties' },
            { id: 'propertydetails', title: 'Property Details' },
            { id: 'contact', title: 'Contact Us' },
        ],
    };

    return (
        <nav>
            <Container fluid className="nav1 py-3 px-5 border-bottom" style={{ color: '#7A7A7A' }}>
                <div className="d-flex flex-wrap justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                        <i className="fa-solid fa-envelope me-2" style={{ color: '#F35525' }}></i>
                        <h6 className="mb-0 me-4">info@company.com</h6>
                        <i className="fa-solid fa-map me-2" style={{ color: '#F35525' }}></i>
                        <h6 className="mb-0">Sunny Isles Beach, FL 33160</h6>
                    </div>
                    <div className="d-flex icn">
                        <a href="https://www.facebook.com/" className="ps-2">
                            <i className="fa-brands fa-facebook text-white"></i>
                        </a>
                        <a href="https://x.com/?lang=en" className="ps-2">
                            <i className="fa-brands fa-twitter text-white"></i>
                        </a>
                        <a href="https://www.linkedin.com/" className="ps-2">
                            <i className="fa-brands fa-linkedin text-white"></i>
                        </a>
                        <a href="https://www.instagram.com/" className="ps-2">
                            <i className="fa-brands fa-instagram text-white"></i>
                        </a>
                    </div>
                </div>
            </Container>

            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <h1 className="mb-0 ps-3">VILLA</h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav" style={{ paddingLeft: '450px' }}>
                            {data.navItems.map((item) => (
                                <li className="nav-item" key={item.id}>
                                    <Link
                                        to={item.id === 'home' ? '/' : `/${item.id.toLowerCase()}`}
                                        className={`nav-link px-4 ${active === item.id ? 'active' : ''}`}
                                        style={{ color: item.id === active ? "#F35525" : 'black' }}
                                        onClick={() => selected(item.id)}>
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className="d-flex align-items-center icon">
                            <i className="fa-solid fa-calendar mt-1"></i>
                            <h6 className="mb-0 text-white">Schedule a visit</h6>
                        </div>
                    </div>
                </div>
            </nav>
        </nav>
    );
}

export default Nav;