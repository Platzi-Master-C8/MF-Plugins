import Head from "next/head";
import React from "react";
// components
import { MainSkeleton } from "../components/MainSkeleton";
import PluginStatus from "../components/PluginStatus"
import { dateRegExp } from "../constants";
import { BarChart } from "../containers/BarChart/BarChart";
import { ChartHalfDoughtnut } from "../containers/ChartHalfDoughtnut/ChartHalfDoughtnut"
import { ChartPie } from "../containers/ChartPie/ChartPie"
import { UserMain } from "../containers/UserMain"
// env variables
const API = process.env.API;

export default function Home() { 
  const [state, setState] = React.useState({
    chartType: "pie-chart",
    fetchedData: null,
    lastTracking: null,
    totalTime: null
  })

  const handleChange = (e) => setState(prev => ({
    ...prev,
    chartType: e.target.value
  }))

  React.useEffect(() => {
    fetch(API)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.lastTracking)

      setState(prev => ({
        ...prev,
        lastTracking: dateRegExp.exec(data.lastTracking)[0],
        fetchedData: data,
        totalTime: data.totalDevelopment
      }))
    });
  }, [])

  if(state.fetchedData){
    return (
      <main className="Main__wrapper">
        <Head>
          <title>GetHired | Code tracker</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>

        <section className="Main__header">
          <PluginStatus date={state.lastTracking} />
          <UserMain userName="Jito" currentToken="f9d5d5a8a4h7k7y2l8"/>
        </section>
  
        <section className="Main__chart-section">
          <h2>Time coding today</h2>
          <ChartHalfDoughtnut time={state.totalTime} />
        </section>
  
        <section className="Main__chart-section" onChange={handleChange}>
          <article className="chart-section__header">
            <h2>Languages in the last 7 days</h2>
            <select name="charts-type" defaultValue={state.chartType}>
              <option className="chart-section__option" value="pie-chart">Pie Chart</option>
              <option className="chart-section__option" value="bar-chart">Bar Chart</option>
            </select>
          </article>
          {
            state.chartType === "bar-chart" ? 
            <BarChart usedLanguages={state.fetchedData.languages} /> :
            <ChartPie 
              usedLanguages={state.fetchedData.languages}
            />
          }
        </section>
      </main>
    )
  }else{
    return(
      <MainSkeleton />
    )
  }
}
