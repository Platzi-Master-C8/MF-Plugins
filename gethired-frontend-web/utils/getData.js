// env variables
const USER_KEY = process.env.USER_KEY;
const API = process.env.API

async function getData() {
  const options = {
    headers: {
      userkey: USER_KEY
    }
  };

  try {
    const userResponse = await fetch(
      "https://ms-plugins.herokuapp.com/api/v1/users",
      options
    );
    // getting userData (email, name, id, token)
    const userData = await userResponse.json();
    // getting statistics
    const statisticsResponse = await fetch(API, options);
    const statisticsData = await statisticsResponse.json();

    return {...statisticsData, ...userData}
  } catch (error) {
    return "error"
  }
}

export { getData }