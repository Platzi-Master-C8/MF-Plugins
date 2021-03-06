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
    loadingData: false,
    email: ""
  });
  
  React.useEffect(() => {
    setDataState()
  }, []);

  async function setDataState() {
    // console.log('get data')
    const Data = await getData()
    // console.log(Data)
    if(Data === "SyntaxError: Unexpected token s in JSON at position 0"){
      setGlobalState(prev => ({
        ...prev,
        languages: [],
        error: false,

      }))
    }else if(Data.languages){
      setGlobalState(prev => ({
        ...prev,
        lastTracking: Data.languages.length ? dateRegExp.exec(Data.lastTracking)[0] : prev.lastTracking,
        totalTime: Data.totalDevelopment,
        languages: Data.languages,
        token: Data.key,
        error: false,

      }))
    }else{
      setGlobalState(prev => ({
        ...prev,
        error: true,

      }))
    }
  }

  return(
    <UserProvider>
      <Layout>
        <Component
          state={globalState}
          setState={setGlobalState}
          // setDataState={setDataState}
          {...pageProps} 
        />
      </Layout>
    </UserProvider>
  ) 
}

export default MyApp