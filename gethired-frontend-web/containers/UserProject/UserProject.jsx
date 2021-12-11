import React from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';


export const UserProject = ({ projectName, description, loading, gitHubRepo }) => {

    return (
        <>
            {
                loading ? 
                <section className="UserProject loading">
                    <Skeleton containerClassName="loading-skeletonContainer" className="skeleton-item"/>
                </section> :
                null
            }
            {
                !loading ? 
                <section className="UserProject">
                    <h1 className="UserProject-title">{projectName}</h1>
                    <article className="UserProject-container">
                        <p className="UserProject-description">{description}</p>
                        <button className="UserProject-button" href={gitHubRepo}>Github repo</button>
                    </article>
                </section> : 
                null
            }
        </>
    )
}


UserProject.propTypes = {
    projectName: PropTypes.string,
    description: PropTypes.string,
    loading: PropTypes.bool,
    gitHubRepo: PropTypes.string
};
  