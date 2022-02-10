import React from "react";
// components
import { MainSkeleton } from "../components/MainSkeleton";
import PluginStatus from "../components/PluginStatus"
import { COLORS } from "../constants";
import { BarChart } from "../containers/BarChart/BarChart";
import { ChartHalfDoughtnut } from "../containers/ChartHalfDoughtnut/ChartHalfDoughtnut"
import { ChartPie } from "../containers/ChartPie/ChartPie"
import { UserMain } from "../containers/UserMain"

const matchData = (data) => {
  const languages = data.languages.map(item => item.lan)
  const time = data.languages.map(item => item.time)
  const colors = data.languages.map(item => COLORS[Math.ceil(Math.random() * COLORS.length - 1)])

  // console.log({
  //   labels: languages,
  //   datasets: [{
  //     data: time,
  //     barThickness: 30,
  //     backgroundColor: colors,
  //     hoverOffset: 4,
  //     barPercentage: 0.1
  //   }]
  // })
}

export default function Home() {  
  const [fakeData, setFakeData] = React.useState(null);
  const [state, setState] = React.useState({
    chartType: "bar-chart"
  })
  const handleChange = (e) => setState(prev => ({
    ...prev,
    chartType: e.target.value
  }))

  React.useEffect(() => {
    fetch(
      "https://ms-plugins.herokuapp.com/api/v1/users/6202d7c1da486c87775f46f8/statistics"
    )
    .then((response) => response.json())
    .then((data) => setFakeData(data));

    // window
    // .fetch("api/users")
    // .then(response => response.json())
    // .then( data => {
    //   console.log("Fake ", data.data.statistics.usedLenguages)
    //   setFakeData(data)
    // } )
  }, [])

  // const mockData = fakeData.data

  if(fakeData){
    return (
      <main className="Main__wrapper">
        <section className="Main__header">
          <PluginStatus date="08/02/2022" />
          <UserMain userName="Jito" currentToken="f9d5d5a8a4h7k7y2l8"/>
        </section>
  
        <section className="Main__chart-section">
          <h2>Time coding today</h2>
          <ChartHalfDoughtnut />
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
            <BarChart usedLanguages={fakeData.languages} /> :
            <ChartPie 
              usedLanguages={fakeData.languages}
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
