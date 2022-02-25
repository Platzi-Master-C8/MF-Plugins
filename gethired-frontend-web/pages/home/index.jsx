import Head from 'next/head';
import React from 'react';
import Select from 'react-select';
import Router from 'next/router';
// constants
import { options } from "../../constants";
// components
import { MainSkeleton } from '../../components/MainSkeleton';
import { Button } from "../../components/Button/Button";
import PluginStatus from '../../components/PluginStatus';
import { BarChart } from '../../containers/BarChart/BarChart';
import { ChartHalfDoughtnut } from '../../containers/ChartHalfDoughtnut/ChartHalfDoughtnut';
import { ChartPie } from '../../containers/ChartPie/ChartPie';
import { UserMain } from '../../containers/UserMain';
// auth
import { useUser } from '@auth0/nextjs-auth0';
import { useEffect } from 'react';

export default function Home({ state, setState }) {
  const { user, isLoading } = useUser();

  const handleChange = (option) => {
    setState((prev) => ({
      ...prev,
      chartType: option,
    }));
  }
 
  if(!isLoading){
    if(!user){
      Router.push("/")
    }
    
  }
  useEffect(() => {
    setState(prev => ({
      ...prev,
      error: false,
      loadingData: true
    }))
  }, [setState])

  return(
    <section className="Main__wrapper">
      <Head>
        <title>Code tracker | Home</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        />
      </Head>
      
      {state.error && (
        <div className='Main__error'>
          <h2 className='error'>Oops, seems like an error.</h2>
          <span>Please reload the page or try again later...</span>
          <Button name="Reload page" onClick={() => Router.reload(window.location.pathname)}/>
        </div>
      )}

      {isLoading && (
        <MainSkeleton />
      )}

      {state.languages &&
        <React.Fragment>
          <section className="Main__header">
            <PluginStatus date={state.lastTracking} />
            <UserMain userName={user.name} />
          </section>

          {state.languages.length ? (
            <React.Fragment>
              <section className="Main__chart-section">
                <h2>Time coding today</h2>
                <ChartHalfDoughtnut time={state.totalTime} lastTracking={state.lastTracking} />
              </section>

              <section className="Main__chart-section">
                <article className="chart-section__header">
                  <h2>Languages statistics</h2>
                  <Select
                    className='chart-section__select'
                    defaultValue={state.chartType}
                    options={options}
                    onChange={handleChange}
                  />
                </article>
                {state.chartType.value === 'bar-chart' ? (
                  <BarChart usedLanguages={state.languages} />
                ) : (
                  <ChartPie usedLanguages={state.languages} />
                )}
              </section>
            </React.Fragment>
          ) : (
            <section className='Main__noStats'>
              <div>
                <h2>You have not activated the plugin yet.</h2>
                <p>Download the Plugin for your VSCode text editor</p>
              </div>
              <Button name="GET PLUGIN" isLink={true} reference="https://marketplace.visualstudio.com/VSCode"/>
              <p>And start receiving statistics</p>
            </section>
          )}
        </React.Fragment>
      }
    </section>
  )
}
