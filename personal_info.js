const axios = require('axios');

const main = async () => {
  const response = await axios.get('https://api.ouraring.com/v2/usercollection/personal_info', {
    headers: {
      Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
    }
  });
  console.log(response.data);
};

main();
