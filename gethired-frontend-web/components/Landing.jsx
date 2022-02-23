import React from 'react';
import Image from 'next/image';
import pcImg from '../public/images/pc_landing.png';
import graphImg from '../public/images/graph_landing.png';
import { Button } from '../components/Button/Button';

const LandingPage = () => {
  return (
    <>
      <section className="Landing__main">
        <div className="Landing__main--img">
          <Image src={pcImg} alt="Computer illustration" />
        </div>
        <div className="Landing__main--copy">
          <div className="Landing__main--copy__text">
            <span>¡Welcome dev!</span>
            <h2>Tracker for developers</h2>
            <span>... get statistics from your coding activity</span>
          </div>
        </div>
      </section>

      <section className="Landing__secondary">
        <div className="Landing__secondary--img">
          <Image src={graphImg} alt="Computer illustration" />
        </div>
        <div className="Landing__secondary--copy">
          <div className="Landing__secondary--copy__text">
            <h2>Measure your time coding</h2>
            <p>
              First install the code tracker plugin for Visual Studio Code, its
              going to track the your activity in the editor. Then you will be
              able to see your statistics on the web.
            </p>
          </div>
          <Button name="Get Plugin Now" isLink={true} reference="https://marketplace.visualstudio.com/VSCode" />
        </div>
      </section>
    </>
  );
};

export default LandingPage;
