import React from 'react';
import Head from 'next/head';
import PluginStatus  from '../../components/PluginStatus/PluginStatus.jsx';
import { UserMain } from '../../containers/UserMain/UserMain.jsx';
import Filter  from '../../containers/Filter/Filter.jsx';

export async function getStaticProps() {
    const res = await fetch('http://localhost:3000/api/users')
    const data = await res.json()

    if (!data) {
        return {
          notFound: true,
        }
    }
    
    return {
    props: { data }, 
    }

}


export default function adminView( { data } ) {
    const mockData = data.data
    console.log(mockData)

    return(
        <>
            <Head>
                <title>adminView</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400&family=Mulish:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500&family=Roboto:wght@100;300;400;500&display=swap" rel="stylesheet" />
            </Head>

            <main className='main'>
                <PluginStatus 
                    title="Plugin status"
                    text="Last tracking: "
                    date={mockData.plugin.lastTracking}
                />
                <UserMain 
                    userName={mockData.name}
                    currentToken={mockData.token}
                />
                <Filter />

            </main>
        </>
    )
}