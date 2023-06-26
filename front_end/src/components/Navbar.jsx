import "./navbar.scss";
import { ArrowDropDown, Notifications, Search } from "@material-ui/icons"                       //imported material ui icons library to use search, notification , dropdown icons 
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../authContext/AuthContext";
import { logout } from "../authContext/AuthActions"; 



const Navbar = () => {                                                              //rfce
    const { dispatch } = useContext(AuthContext);
    return (
        <div className="navbar">                                                    {/*start navbar class*/}
            <div className="container">                                             {/*start container class */}
                <div className="left">                                              {/*start left side class use for logo and names*/}
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyHoRw_ZiZCwD7bjftX5kWT1d0KUGAt-jX2g&usqp=CAU"  //logo
                    alt="" />
                              <Link to="/" className="link">
                    <h3>HomePage</h3>                                       {/*names*/}
                   </Link>
                   <Link to="/series" className="link">
                    <h3>Series</h3>                                     {/*names*/}
                    </Link>
          <Link to="/movies" className="link">
                    <h3>Movies</h3>                                     {/*names*/}
                    </Link>
                    
                    <h3>New and Polular</h3>                                        {/*names*/}
                    <h3>My List</h3>                                        {/*names*/}
                </div>                                                        {/*end of the left side class*/}
                <div className="right">                                      {/*start right side class used for search, profile, notification */}
                    < Search className="icon" />                            {/*start icon class used for search */}
                    <h3>KID</h3>                                             {/*Text */}
                    <Notifications className="icon" /> 
                    <img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNg3bGIo6Um1zojasyQju-ueCa8nwyWy9RJw&usqp=CAU"  //profile picture
                    alt="" />
                   
                   <div className="profile" >
                   <ArrowDropDown className="icons" />                     {/*dropdown menu for settings and logout */}
                   <div className="options">
                    <span>Settings</span>
                    <span onClick={() => dispatch(logout())}>Logout</span>
                   </div>
                   </div>
                   
                </div>
            </div>
        </div>
    )
}

export default Navbar