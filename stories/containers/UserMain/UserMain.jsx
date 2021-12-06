import React from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import './UserMain.css';
import { Button } from '../../components/Button/Button';

export const UserMain = ({ name, currentToken, getToken, loading, error }) => {

    return (
        <>
            {
                loading && !error ? 
                <section className="userMain loading">
                    <Skeleton containerClassName="loading-skeletonContainer" className="skeleton-item"/>
                </section> :
                null
            }
            {
                error && !loading?
                <section className="userMain error">
                    <article>
                        <h1>Welcome back, user</h1>
                        <p>something is wrong</p>
                    </article>
                </section> :
                null
            }
            {
                !loading && !error ? 
                <section className="userMain">
                    <article>
                        <h1>Welcome back, {name}</h1>
                        <p>Your current token is: {currentToken}</p>
                    </article>
                    <Button name="Get New Token" onClick={getToken}/>
                </section> : 
                null
            }
        </>
    )
}