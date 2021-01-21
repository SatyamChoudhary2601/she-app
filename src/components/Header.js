import React, { useState } from "react";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import HomeIcon from "@material-ui/icons/Home";
import VideocamIcon from "@material-ui/icons/Videocam";
import { IconButton } from '@material-ui/core';

import { Link } from "react-router-dom";
import "./MainBody.css";
const Header = () => {
  //   const [redirect, setRedirect] = useState(false);
  //   const redirectHandler = () => {
  //     setRedirect(true);
  //   };
  //   if (redirect) {
  //     return <Redirect to="/swipe" />;
  //   }
  return (
    <div className="header_header container">
      <IconButton>
        <Link to="/">
          <HomeIcon className="header__icon" fontSize="Large" />
        </Link>
      </IconButton>
      <IconButton>
        <Link to="/swipe">
          <WhatshotIcon
            className="header__icon2"
            fontSize="Large"
            color="red"
            // onClick={redirectHandler}
          />
        </Link>
      </IconButton>
      <IconButton>
        <Link to="/video">
          <VideocamIcon className="header__icon3" fontSize="Large" />
        </Link>
      </IconButton>
    </div>
  );
};

export default Header;
