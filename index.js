const data = require("data/function.js")

runAll = (ip) => {
  data.getAllServers();
  data.getServerInfo(ip);
  data.getServerPlayers(ip);
}

runPlayers = (ip) => {
  data.getServerPlayers(ip);
}

runInfo = (ip) => {
  data.getServerInfo(ip);
}

runAllServers = (ip) => {
  data.getAllServers();
}

module.exports.runAll = runAll;
module.exports.runPlayers = runPlayers;
module.exports.runInfo = runInfo;
module.exports.runAllServers = runAllServers;
