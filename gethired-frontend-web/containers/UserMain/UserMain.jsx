import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../components/Button/Button';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';


export const UserMain = ({ userName, currentToken, loading, LoadingGetToken, errorInGetLogin, getToken }) => {

    return (
        <>
            {
                loading ? 
                <section className="userMain loading">
                    <Skeleton containerClassName="loading-skeletonContainer" className="skeleton-item"/>
                </section> :
                null
            }
            {
                !loading ? 
                <section className="userMain">
                    <article className="userMain-container">
                        <h1>Welcome back, {userName}</h1>
                        <p>Your current token is: {currentToken}</p>
                        {
                            errorInGetLogin ? 
                            <p className="userMain-errorMessage">We has a problem, please try again later</p> : 
                            null
                        }
                    </article>

                    {
                        LoadingGetToken ?
                        <div class="loader"></div> :
                        null
                    }
                    <Button name="Get New Token" onClick={getToken}/>
                </section> : 
                null
            }
        </>
    )
}


UserMain.propTypes = {
    userName: PropTypes.string,
    currentToken: PropTypes.string,
    loading: PropTypes.bool,
    errorInGetLogin: PropTypes.bool,
    getToken: PropTypes.func,
};
  