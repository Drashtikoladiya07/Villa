import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import luxuryvilla1 from "../assets/image/property-01.jpg";
import luxuryvilla2 from "../assets/image/property-02.jpg";
import luxuryvilla3 from "../assets/image/property-03.jpg";
import Apartment from "../assets/image/property-04.jpg";
import Penthouse from "../assets/image/property-05.jpg";
import ModernCondo from "../assets/image/property-06.jpg";


const PropertiesTab = ({ item, activeTab }) => {

    const data = {

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
                type: 'villa',
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
                type: 'villa',
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
                type: 'villa',
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
                type: 'apartment',
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
                type: 'penthouse',
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
                type: 'condo',
            },
        ],

    };
    const filteredProperties = data.villa.filter((property) => property.type === item.type);
    console.log(filteredProperties);

    return (
        <Container>
            <Row className="ps-5">
                {filteredProperties.map((item, index) => (
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
                                <a href="index.html" style={{ textDecoration: 'none', borderRadius: '20px' }} className="fw-bold p-2 px-4">Schedule a visit</a>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container >
    );
};

export default PropertiesTab;