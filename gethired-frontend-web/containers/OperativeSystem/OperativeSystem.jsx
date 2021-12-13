import React from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import Image from 'next/image';


import linuxImg from '../../public/linux.png';
import windowsImg from '../../public/windows.png';
import macImg from '../../public/mac.png';

const OperativeSystem = ({ system, systemLogo, loading }) => {
  system == 'Windows' ? (systemLogo = windowsImg) : null;
  system == 'Linux' ? (systemLogo = linuxImg) : null;
  system == 'Mac Os' ? (systemLogo = macImg) : null;
  return (
    <>
      {loading ? (
        <section className="OperativeSystem loading">
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
              <Image 
                src={systemLogo} 
                width="25"
                height="25"
              />
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
  system: PropTypes.oneOf(['Linux', 'Windows', 'Mac Os']),
  system: PropTypes.string,
  systemLogo: PropTypes.string,
  systemLogo: PropTypes.string,
  checked: PropTypes.bool,
};
