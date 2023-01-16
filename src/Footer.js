import React from 'react'
import './Footer.css';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className='footer'>
        <div className="content_footer">
            {/* main footer */}
            <div className="footer_links">
              Footer links
            </div>
            {/* Bottom footer */}
            <div className="footer_social_media">
                {/* <Headerlogo /> */}
                <FacebookRoundedIcon />
                <GitHubIcon />
                <AddIcCallIcon />
                <Link to="/">
                  <HomeIcon />
                </Link>
            </div>
             
        </div>
    </div>
  )
}
