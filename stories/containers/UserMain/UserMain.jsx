import React from 'react';
import './UserMain.css';
import { Button } from '../../components/Button/Button';

export const UserMain = ({ name, currentToken, getToken }) => {

    return (
        <>
            <section className="userMain">
                <article>
                    <h1>Welcome back, {name}</h1>
                    <p>Your current token is: {currentToken}</p>
                </article>
                <Button name="Get New Token" onClick={getToken}/>
            </section>
        </>
    )
}