var BuyItems = artifacts.require("./BuyItems.sol");

module.exports = function(deployer) {
    deployer.deploy(BuyItems);
};
