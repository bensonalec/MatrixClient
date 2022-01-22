var axios = require("axios");

async function getRooms(token) {
  var config = {
    method: "get",
    url: "https://matrix-client.matrix.org/_matrix/client/v3/joined_rooms",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const rooms = await axios(config);
  return rooms;
}

async function getRoomMembers(room, token) {
  var axios = require("axios");

  var config = {
    method: "get",
    url: `matrix-client.matrix.org/_matrix/client/v3/rooms/${room}/joined_members`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const members = await axios(config);
  
  return members;
}

export { getRooms, getRoomMembers };
