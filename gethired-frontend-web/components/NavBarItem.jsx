import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';

import iconMessages from '/public/icon-messages.svg';
import iconNotification from '/public/icon-notification.svg';
import iconForum from '/public/icon-forum.svg';
import iconJobs from '/public/icon-jobs.svg';
import iconBlog from '/public/icon-blog.svg';
import iconWebsite from '/public/icon-website.svg';

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
          <Image src={sectionIcon} />
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