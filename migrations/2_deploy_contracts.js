const Marketplace = artifacts.require("Marketplace");

const MyTestContract = artifacts.require("MyTestContract");
const TestContract = artifacts.require("TestContract");

module.exports = function(deployer) {
  deployer.deploy(Marketplace);
  deployer.deploy(MyTestContract);
  deployer.deploy(TestContract);
};