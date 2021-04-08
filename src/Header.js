import React from 'react'
import "./Header.css"
import { Link } from "react-router-dom";
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

function  Header() {
    return (
        <div className="header">
            <Link to="/" className="header_logo">
                <img 
                className="header_logo" 
                src={process.env.PUBLIC_URL + "/myntra logo.png"} width="110" alt="myntra" 
            />
            </Link>
             
            <div className="header_navLeft">
                <div className="navLeft_option">
                    <span>MEN</span>
                </div>
                <div className="navLeft_option">
                    <span>WOMEN</span>
                </div>
                <div className="navLeft_option">
                    <span>KIDS</span>
                </div>
                <div className="navLeft_option">
                    <span>HOME & LIVING</span> 
                </div>
                <div className="navLeft_option">
                    <span>OFFERS</span> 
                </div>
                 
            </div>
            <div className="header_search">
                <input 
                    className="header_searchInput" 
                    type="text"
                    placeholder="Search for products, brands and more"
                />
                <div className="header_searchBar">
                    <SearchOutlinedIcon className="header_searchIcon" />

                </div>
                 
            </div>
            <div className="header_navRight">
                <Link to="/wizard"className="navRight_link">
                    <div className="navRight_option">
                        <img className="wizardLogo" src={process.env.PUBLIC_URL + "/wizard.png"} width="70" alt="wizard" />
                        <a className="navRight_lineTwo" href={process.env.PUBLIC_URL + "chat.html"} >Wizard</a>
                        {/* <span className="navRight_lineTwo">Wizard</span>                */}
                    </div>
                </Link>
                <div className="navRight_option">
                    <PersonOutlineIcon 
                        className="navRight_lineOne" />
                    <span className="navRight_lineTwo">Profile</span>
                </div>
                <div className="navRight_option">
                    <FavoriteBorderIcon 
                        className="navRight_lineOne"
                    />
                    <span className="navRight_lineTwo">Wishlist</span>
                </div>
                <div className="navRight_option">
                    <LocalMallOutlinedIcon
                        className="navRight_lineOne"
                    />
                    <span className="navRight_lineTwo">Bag</span>
                </div>
            </div>
             
        </div>
    )
}

export default Header
