var Weth = artifacts.require("WETH9");
var Factory = artifacts.require("UniswapV2Factory");
var Router = artifacts.require("UniswapV2Router02");
var admin = "0x035DfDe8457328F1102785cf94c770180C2036c7";

module.exports = function(deployer) {
  // deployment steps
  // deployer.deploy(Weth);
  // deployer.deploy(Factory, admin);
  // deployer.deploy(Router, Factory.address, Weth.address);
// Deploy A, then deploy B, passing in A's newly deployed address
deployer.deploy(Weth).then(function() {
  return deployer.deploy(Factory, admin);
}).then(function() {
  return deployer.deploy(Router, Factory.address, Weth.address)
});
};

