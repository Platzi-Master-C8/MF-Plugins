import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../components/Button/Button';
import 'react-loading-skeleton/dist/skeleton.css';


export const UserMain = ({ userName, currentToken }) => {
  userName = userName.split(" ")[0]

  return (
    <section className="userMain">
      <article className="userMain-container">
        <h2>Welcome back, <span>{userName}</span></h2>
        <p>The only real way to improve is comparing yourself overtime</p>
      </article>
    </section>
  )
}


UserMain.propTypes = {
    userName: PropTypes.string,
    currentToken: PropTypes.string,
    loading: PropTypes.bool,
    errorInGetLogin: PropTypes.bool,
    getToken: PropTypes.func,
};
  