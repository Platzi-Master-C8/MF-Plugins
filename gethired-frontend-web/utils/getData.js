// env variables
const USER_KEY = process.env.USER_KEY;
const API = process.env.API

async function getData() {

  // try {
  //   const userResponse = await fetch(
  //     "https://ms-plugins.herokuapp.com/api/v1/users",
  //     options
  //   );
  //   // getting userData (email, name, id, token)
  //   const userData = await userResponse.json();
  //   // getting statistics
  //   const statisticsResponse = await fetch(API, options);
  //   const statisticsData = await statisticsResponse.json();

  //   return {...statisticsData, ...userData}
  // } catch (error) {
  //   return "error"
  // }


  let options = {
    headers: {
        Authorization: "Bearer"
    },
  };

  try {

      const userTokenResponse = await fetch('/api/users')
      const userToken = await userTokenResponse.json()
      options.headers.Authorization = `Bearer ${userToken.accessToken}`

      // console.log(userToken)

      const userResponse = await fetch("https://ms-plugins.herokuapp.com/api/v1/users", options)
      const userData = await userResponse.json()
      const statisticsResponse = await fetch(`https://ms-plugins.herokuapp.com/api/v1/users/${userData._id}/statistics`, options)
      const statisticsData = await statisticsResponse.json()

      console.log(userData, statisticsData)
      return {...statisticsData, ...userData}
      // return 'trying to get a token'
  } catch (error) {
      console.error(error)
  }
}

export { getData }