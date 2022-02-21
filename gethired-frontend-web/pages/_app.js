import React from "react";
import Layout from '../components/Layout';
import { dateRegExp } from "../constants";
import { getData } from "../utils/getData";
// css
import '../styles/globals.scss'
// auth0
import { UserProvider } from '@auth0/nextjs-auth0';

function MyApp({ Component, pageProps }) {
  const [globalState, setGlobalState] = React.useState({
    chartType: { value: 'pie-chart', label: 'Pie Chart' },
    languages: null,
    lastTracking: null,
    totalTime: null,
    error: false,
    email: ""
  });
  
  React.useEffect(async () => {
    const Data = await getData()
    console.log(Data)
    if(Data === "error"){
      setGlobalState(prev => ({
        ...prev,
        error: true
      }))
    }else{
      setGlobalState(prev => ({
        ...prev,
        lastTracking: dateRegExp.exec(Data.lastTracking)[0] || null,
        totalTime: Data.totalDevelopment,
        languages: Data.languages,
        token: Data.key
      }))
    }
  }, []);

  return(
    <UserProvider>
      <Layout>
        <Component
          state={globalState}
          setState={setGlobalState}
          {...pageProps} 
        />
      </Layout>
    </UserProvider>
  ) 
}

export default MyApp