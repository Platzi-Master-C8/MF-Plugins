import React from "react";
// components
import PluginStatus from "../components/PluginStatus"
import { ChartHalfDoughtnut } from "../containers/ChartHalfDoughtnut/ChartHalfDoughtnut"
import { ChartPie } from "../containers/ChartPie/ChartPie"
import { UserMain } from "../containers/UserMain"

export default function Home() {  
  const [fakeData, setFakeData] = React.useState([]);

  React.useEffect(() => {
      window
      .fetch("api/users")
      .then(response => response.json())
      .then( data => {
          setFakeData(data)
      } )
  }, [])

  const mockData = fakeData.data

  if(mockData){
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
  
        <section className="Main__chart-section">
          <h2>Languages in the last 7 days</h2>
          <ChartPie 
            usedLanguages={mockData.statistics.usedLenguages}
          />
        </section>
      </main>
    )
  }else{
    return(
      <p>Loading...</p>
    )
  }
  
}
