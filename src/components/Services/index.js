import Navbar from "../Navbar";
import "./index.css"
import React from 'react'

const Services = () => {
  return (
    <>
    <Navbar />
    <div className="services-container">
        <nav className="services-navbar">Services</nav>
        <div className="service-items-container">
            <div className="item-container">
                <img src="https://res.cloudinary.com/dodmtflaq/image/upload/v1676903881/community-maintenance/mgmt-buildings_m5cezj.png" alt="mgmt building" className="img-resize" />
                <h1 className="mgmt-heading">Manage Buildings</h1>
                <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis cupiditate quas ipsa accusamus eum dolor omnis facere fuga voluptate facilis, deleniti aut molestias ad harum maxime odit deserunt consequatur impedit!</p>
            </div>
            <div className="item-container">
                <img src="https://res.cloudinary.com/dodmtflaq/image/upload/v1676903881/community-maintenance/mgmt-buildings_m5cezj.png" alt="mgmt building" className="img-resize" />
                <h1 className="mgmt-heading">Management of Garden & Surroundings</h1>
                <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis cupiditate quas ipsa accusamus eum dolor omnis facere fuga voluptate facilis, deleniti aut molestias ad harum maxime odit deserunt consequatur impedit!</p>
            </div>
            
            <div className="item-container">
                <img src="https://res.cloudinary.com/dodmtflaq/image/upload/v1676903881/community-maintenance/mgmt-buildings_m5cezj.png" alt="mgmt building" className="img-resize" />
                <h1 className="mgmt-heading">Management of Visitors</h1>
                <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis cupiditate quas ipsa accusamus eum dolor omnis facere fuga voluptate facilis, deleniti aut molestias ad harum maxime odit deserunt consequatur impedit!</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Services