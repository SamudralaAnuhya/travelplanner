import React ,{useState}from "react";
import "./Navbar.css"
import { MdOutlineTravelExplore } from "react-icons/md";
import { IoCloseCircleSharp } from "react-icons/io5";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
    const[active, setActive] = useState('navBar')
    // Function to toggle(open) navBar
    const showNav = ()=> {
        setActive('navBar activeNavbar')
    }

     // Function to remove(close)navBar
     const removeNavbar = ()=> {
        setActive('navBar')
    }

    
    return(
        <section className="navBarSection">
            <header className="header flex">
                <div className="logoDiv">
                    <a href="#" className="logo flex">
                        <h1><MdOutlineTravelExplore className="icon" />
                               Travel</h1>
                    </a>
                </div>
                {/* navBar is changed to active for state declaration */}
                {/* <div className={navBar}> */}
                <div className={active}>   
                    <u1 className="navLists flex">

                        <l1 className="navIteam">
                            <a href="#" className="navLink">Home</a>
                        </l1>

                        <l1 className="navIteam">
                            <a href="#" className="navLink">Packages</a>
                        </l1>

                        <l1 className="navIteam">
                            <a href="#" className="navLink">Shop</a>
                        </l1>

                        <l1 className="navIteam">
                            <a href="#" className="navLink">About</a>
                        </l1>

                        <l1 className="navIteam">
                            <a href="#" className="navLink">Pages</a>
                        </l1>

                        <l1 className="navIteam">
                            <a href="#" className="navLink">News</a>
                        </l1>

                        <l1 className="navIteam">
                            <a href="#" className="navLink">Contact</a>
                        </l1>

                        <button className="btn">
                            <a href="#">BOOK NOW</a>
                        </button>
                    </u1>
                    <div onClick={removeNavbar}
                        className="closeNavbar">
                        <IoCloseCircleSharp  className="icon"/>
                    </div>

                </div>

                <div onClick={showNav}
                className="toggleNavbar">
                <TbGridDots className="icon"/>
                </div>

            </header>
        </section>

    )
}

export default Navbar