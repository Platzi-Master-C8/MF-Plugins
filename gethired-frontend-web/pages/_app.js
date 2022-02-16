import React from "react";
import Layout from '../components/Layout';
import { dateRegExp } from "../constants";
import '../styles/globals.scss'
import { getData } from "../utils/getData";

function MyApp({ Component, pageProps }) {
  const [globalState, setGlobalState] = React.useState({
    chartType: 'pie-chart',
    languages: null,
    lastTracking: null,
    totalTime: null,
    error: false,
    name: "",
    email: ""
  });

  React.useEffect(async () => {
    const Data = await getData()
    if(typeof Data === 'string'){
      setGlobalState(prev => ({
        ...prev,
        error: true
      }))
    }else{
      setGlobalState(prev => ({
        ...prev,
        lastTracking: dateRegExp.exec(Data.lastTracking)[0],
        languages: Data.languages,
        totalTime: Data.totalDevelopment,
        name: Data.name,
        email: Data.email,
        token: Data.key
      }))
    }
  }, []);

  return(
    <Layout userName={globalState.name}>
      <Component
        state={globalState}
        setState={setGlobalState}
        {...pageProps} 
      />
    </Layout>
  ) 
}

export default MyApp