const axios = require('axios');

const main = async () => {
  // const response1 = await axios.get(`https://api.ouraring.com/v2/usercollection/heartrate`, {
  //   headers: {
  //     Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
  //   }
  // });
  // console.log(response1.data);

  const now = new Date().getTime();
  const twoHourAgo = now - (2 * 60 * 60 * 1000); 
  const response2 = await axios.get(`https://api.ouraring.com/v2/usercollection/heartrate?start_datetime=${twoHourAgo}&end_datetime=${now}`, {
    headers: {
      Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
    }
  });
  console.log(response2.data);
};

main();
