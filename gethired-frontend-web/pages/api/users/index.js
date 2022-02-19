import Database from "../../../__mocks__/db";
import { getAccessToken, getSession } from '@auth0/nextjs-auth0';


// const users = async(request, response) => {
//   const db = new Database();
//   const allEntries = await db.getAll();
//   // const { data } = allEntries
//   response.status(200).json({ data: allEntries});
// }


export default async(req, res) => {
  try {
    const session = await getSession(req, res)
    const accessToken = session.idToken 
    res.status(200).json({accessToken: accessToken});

    
  } catch (error) {
    console.error( 'errrrroooooor' ,error )
    res.status(400).send('error in get session');
  }
  
}