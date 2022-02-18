import Head from 'next/head';
import React from 'react';
import Select from 'react-select';
import Router from 'next/router';
// constants
import { options } from "../../constants";
// components
import { MainSkeleton } from '../../components/MainSkeleton';
import PluginStatus from '../../components/PluginStatus';
import { BarChart } from '../../containers/BarChart/BarChart';
import { ChartHalfDoughtnut } from '../../containers/ChartHalfDoughtnut/ChartHalfDoughtnut';
import { ChartPie } from '../../containers/ChartPie/ChartPie';
import { UserMain } from '../../containers/UserMain';
// auth
import { useUser } from '@auth0/nextjs-auth0';

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

  return(
    <section className="Main__wrapper">
      <Head>
        <title>Code tracker | Home</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        />
      </Head>

      {
        state.languages ?
          <React.Fragment>
            <section className="Main__header">
              <PluginStatus date={state.lastTracking} />
              <UserMain userName={user.name} />
            </section>

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
        : state.error ?
          <div>
            <h2 className='error'>Error loading content.</h2>
            <h2 className='error'>Try again later...</h2>
          </div>
        : <MainSkeleton />
      }
    </section>
  )
}
