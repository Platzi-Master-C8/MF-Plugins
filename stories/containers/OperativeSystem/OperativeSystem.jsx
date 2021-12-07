import React from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import './OperativeSystem.css';

import linuxImg from '../../assets/linux.png';
import windowsImg from '../../assets/windows.png';
import macImg from '../../assets/mac.png';

const OperativeSystem = ({ system, systemLogo, loading }) => {
  system == 'Windows' ? (systemLogo = windowsImg) : null;
  system == 'Linux' ? (systemLogo = linuxImg) : null;
  system == 'Mac Os' ? (systemLogo = macImg) : null;
  return (
    <>
      {loading ? (
        <section className="UserProject loading">
          <Skeleton
            containerClassName="loading-skeletonContainer"
            className="skeleton-item"
          />
        </section>
      ) : null}

      {!loading ? (
        <section className="OperativeSystem">
          <h1 className="UserProject-title">Operative System</h1>
          <article className="OperativeSystem-container">
            <p className="OperativeSystem-description">{system}</p>
            <div className="OperativeSystem-logo">
              <img src={systemLogo} />
            </div>
          </article>
        </section>
      ) : null}
    </>
  );
};

export default OperativeSystem;

OperativeSystem.propTypes = {
  loading: PropTypes.bool,
  // system: PropTypes.oneOf(['Linux', 'Windows', 'Mac Os']),
  // system: PropTypes.string,
  // systemLogo: PropTypes.string,
  // systemLogo: PropTypes.string,
  //   checked: PropTypes.bool,
};
