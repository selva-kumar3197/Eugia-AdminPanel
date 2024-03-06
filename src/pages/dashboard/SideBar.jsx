import { useState } from "react";
import {
  Accordion,
  Button,
  Card,
  Container,
  Form,
  FormControl,
  ListGroup,
  Nav,
  Navbar,
  NavDropdown,
  NavLink,
  Offcanvas,
} from "react-bootstrap";
import {
  AiFillAppstore,
  AiFillDatabase,
  AiOutlineRise,
  AiFillSignal,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import Contactlist from "../contact/Contactlist";
import logo from "./../../assets/images/logo.png";
function SideBar() {
  const handelClick = () => { };
  return (
    <div>
      {" "}
      <div className="bg-light">
        <img src={logo} width="80%" height="80%" className="m-auto" />
      </div>
      <div>
        <p className=" cursor fs-5">
          <Link to="/dashboard">Dashboard </Link>
        </p>
        <p className=" cursor fs-5">
          <Link to="/blog-list" className="">
            Blogs{" "}
          </Link>
        </p>
        <p className=" cursor fs-5">
          <Link to="/news-list" className="">
            News{" "}
          </Link>
        </p>
        <p className=" cursor fs-5">
          <Link to="/report-list" className="">
            Annual Reports{" "}
          </Link>
        </p>
        <p className=" cursor fs-5">
          <Link to="/investors-journey-list">Investors List </Link>
        </p>

        <p className=" cursor fs-5">
          <Link to="/faq-list" className="">
            Investors FAQ{" "}
          </Link>
        </p>
        <p className=" cursor fs-5">
          <Link to="/director-list" className="">
            Director{" "}
          </Link>
        </p>
        <p className=" cursor fs-5">
          <Link to="/about-team">Management</Link>
        </p>




        <p className=" cursor fs-5">
          <Link to="/award-list" className="">
            Awards{" "}
          </Link>
        </p>
        <p className=" cursor fs-5">
          <Link to="/career-list" className="">
            Careers{" "}
          </Link>
        </p>

        <p className=" cursor fs-5">
          <Link to="/product-enquiry" className="">
            Products{" "}
          </Link>
        </p>

        <p className=" cursor fs-5">
          <Link to="/treatment-list" className="">
            Key Therapeutic Areas{" "}
          </Link>
        </p>

        <p className=" cursor fs-5">
          <Link to="/responsibility-list" className="">
            Responsibility{" "}
          </Link>
        </p>


        {/* <p className=" cursor fs-5">
          <Link to="/product-enquiry" className="">
            Annual Reports{" "}
          </Link>
        </p> */}

        <p className=" cursor fs-5">
          <Link to="/SubscribeList"> Subscribe List </Link>
        </p>
        <p className=" cursor fs-5">
          <Link to="/contact-list"> Contact Us</Link>
        </p>

      </div>
    </div>
  );
}

export default SideBar;
