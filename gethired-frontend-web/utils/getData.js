// env variables
const USER_KEY = process.env.USER_KEY;
const API = process.env.API

async function getData() {

  let options = {
    headers: {
        Authorization: "Bearer"
    },
  };

  try {

      const userTokenResponse = await fetch('/api/users')
      const userToken = await userTokenResponse.json()
      options.headers.Authorization = `Bearer ${userToken.accessToken}`

      let userData
      // get user data
      const getUserResponse = await fetch("https://ms-plugins.herokuapp.com/api/v1/users", options)
      const getUserData = await getUserResponse.json()
      userData = getUserData
      console.log(userData, userToken)
      if(userData.error) {
        // create user data
        // console.log('error')
        const createUserResponse = await fetch("https://ms-plugins.herokuapp.com/api/v1/users", {
          ...options,
          method: 'POST',
        })
        const createUserData = await createUserResponse.json() 
        userData = createUserData
      }
      
      let statisticsData
      // get statistics of a user
      const getStatisticsResponse = await fetch(`https://ms-plugins.herokuapp.com/api/v1/users/${userData._id}/statistics`, options)
      const getStatisticsData = await getStatisticsResponse.json()
      statisticsData = getStatisticsData
      if(statisticsData.error) {
        statisticsData = []
      }
      
      
      return {...statisticsData,  ...userData}
  } catch (error) {
      console.error(error)
  }
}

export { getData }