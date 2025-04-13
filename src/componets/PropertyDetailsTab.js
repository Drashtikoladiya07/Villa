import React from "react";

const PropertyDetailsTab = ({ item, activeTab }) => {
  return (
    <div className={`tab-pane ${item.id === activeTab ? "active" : ""}`} id={item.id}>
      <div className="row">
        <div className="col-lg-3">
          <div className="info-table mb-5">
            <ul>
              {[
                { label: "Total Flat Space", value: item.space },
                { label: "Floor number", value: item.floor },
                { label: "Number of rooms", value: item.rooms },
                { label: "Parking Available", value: item.parking },
                { label: "Payment Process", value: item.payment },
              ].map((info, index) => (
                <li key={index} style={{ listStyleType: "none", color: "#AAAAAA" }} className="py-4">
                  {info.label}{" "}
                  <span style={{ color: "black" }} className="fw-bold ps-5">{info.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-lg-6 text-center pb-5">
          <img src={item.image} alt={item.title} className="ps-3 img-fluid" />
        </div>
        <div className="col-lg-3">
          <h5 className="pb-4 fw-bold">{item.head}</h5>
          <p style={{ color: "#4A4A4A" }}>{item.description1}</p>
          <p style={{ color: "#4A4A4A" }}>{item.description2}</p>
          <div className="icon pt-3">
            <a href="index.html"><i className="fa fa-calendar me-3"></i>Schedule a visit</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailsTab;