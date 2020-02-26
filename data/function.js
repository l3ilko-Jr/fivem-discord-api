const request = require('request');

getAllServers = () => {
  return new Promise(function(Success, Error) {
    request('http://servers-live.fivem.net/api/servers/', function (error, response, body) {
      if (error) return Error(error);
      all = JSON.parse(body);
    });
  });
}

getServerInfo = (ip) => {
  return new Promise(function(Success, Error) {
    request(`http://${ip}/info.json`, function (error, response, body) {
      if (error) return Error(error);
      info = JSON.parse(body);
    });
  });
}

getServerPlayers = (ip) => {
  return new Promise(function(Success, Error) {
    requesr(`http://${ip}/players.json`, function (error, response, body) {
      if (error) return Error(error);
      players = JSON.parse(body);
    });
  });
}

module.exports.getServerPlayers = getServerPlayers;
module.exports.getServerInfo = getServerInfo;
module.exports.getAllServers = getAllServers
