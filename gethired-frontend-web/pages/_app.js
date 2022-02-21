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
    setGlobalState(prev => ({
      ...prev,
      error: true
    }))

    // console.log()
    // const Data = await getData()
    // console.log(Data)
    // if(typeof Data === 'string'){
    //   setGlobalState(prev => ({
    //     ...prev,
    //     error: true
    //   }))
    // }else{
    //   setGlobalState(prev => ({
    //     ...prev,
    //     lastTracking: dateRegExp.exec(Data.lastTracking)[0],
    //     languages: Data.languages,
    //     totalTime: Data.totalDevelopment,
    //     token: Data.key
    //   }))
    // }




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