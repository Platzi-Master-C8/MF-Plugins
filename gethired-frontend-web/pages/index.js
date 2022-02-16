import Head from 'next/head';
import React from 'react';
// components
import { MainSkeleton } from '../components/MainSkeleton';
import PluginStatus from '../components/PluginStatus';
import { BarChart } from '../containers/BarChart/BarChart';
import { ChartHalfDoughtnut } from '../containers/ChartHalfDoughtnut/ChartHalfDoughtnut';
import { ChartPie } from '../containers/ChartPie/ChartPie';
import { UserMain } from '../containers/UserMain';
// env variables
const API = process.env.API;

export default function Home({ state, setState }) {
  const handleChange = (e) => {
    setState((prev) => ({
      ...prev,
      chartType: e.target.value,
    }));
  }

  return(
    <section className="Main__wrapper">
      <Head>
        <title>GetHired | Code tracker</title>
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
              <UserMain userName={state.name} currentToken={state.token} />
            </section>

            <section className="Main__chart-section">
              <h2>Time coding today</h2>
              <ChartHalfDoughtnut time={state.totalTime} lastTracking={state.lastTracking} />
            </section>

            <section className="Main__chart-section" onChange={handleChange}>
              <article className="chart-section__header">
                <h2>Languages in the last 7 days</h2>
                <select name="charts-type" defaultValue={state.chartType}>
                  <option className="chart-section__option" value="pie-chart">
                    Pie Chart
                  </option>
                  <option className="chart-section__option" value="bar-chart">
                    Bar Chart
                  </option>
                </select>
              </article>
              {state.chartType === 'bar-chart' ? (
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
