import React from 'react';
import PropTypes from 'prop-types';
import '../../globals.css';
import './NavbarItem.css';

import iconPlugin from '../../assets/icon-plugin.svg';
import iconExtension from '../../assets/icon-extension.svg';
import iconSocial from '../../assets/icon-social.svg';

const NavbarItem = ({ section, sectionIcon }) => {
  section == 'Plug-in' ? (sectionIcon = iconPlugin) : null;
  section == 'Social' ? (sectionIcon = iconSocial) : null;
  section == 'Extension' ? (sectionIcon = iconExtension) : null;

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
