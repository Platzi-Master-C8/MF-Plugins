import React from 'react';
import PropTypes from 'prop-types';
import '../../globals.css';
import './NavbarItem.css';

import iconMessages from '../../assets/icon-messages.svg';
import iconNotification from '../../assets/icon-notification.svg';
import iconForum from '../../assets/icon-forum.svg';
import iconJobs from '../../assets/icon-jobs.svg';
import iconBlog from '../../assets/icon-blog.svg';
import iconWebsite from '../../assets/icon-website.svg';

const NavbarItem = ({ section, sectionIcon }) => {
  section == 'Messages' ? (sectionIcon = iconMessages) : null;
  section == 'Notifications' ? (sectionIcon = iconNotification) : null;
  section == 'Forum' ? (sectionIcon = iconForum) : null;
  section == 'Jobs' ? (sectionIcon = iconJobs) : null;
  section == 'Blogpost' ? (sectionIcon = iconBlog) : null;
  section == 'My Website' ? (sectionIcon = iconWebsite) : null;

  return (
    <>
      <div className="NavItem-container">
        <div className="navItem--icon">
          <img src={sectionIcon} />
        </div>
        <p className="navItem--p">{section}</p>
      </div>
    </>
  );
};

export default NavbarItem;

NavbarItem.propTypes = {
  //   section: PropTypes.string,
  //   onClick: PropTypes.func,
};
