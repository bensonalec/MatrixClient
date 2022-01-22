var axios = require("axios");
async function authenticate(username, password) {
  var data = JSON.stringify({
    type: "m.login.password",
    identifier: {
      type: "m.id.user",
      user: username,
    },
    password: password,
  });

  var config = {
    method: "post",
    url: "https://matrix-client.matrix.org/_matrix/client/v3/login",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };
  console.log("Executing")
  return axios(config)
}

export {
  authenticate
}