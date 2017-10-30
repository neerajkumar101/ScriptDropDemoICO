var ICOControllerMonolith = artifacts.require("ICOControllerMonolith");
var ICO = artifacts.require("ICO");
var Token = artifacts.require("Token");
var AuctionLauncher = artifacts.require("AuctionLauncher");
var FirstSaleLauncher = artifacts.require("FirstSaleLauncher");
var FirstSale = artifacts.require("FirstSale");
var Advisor = artifacts.require("Advisor");

console.log(AuctionLauncher);

module.exports = function(deployer) {
  deployer.deploy(ICOControllerMonolith); 

  deployer.link(ICOControllerMonolith, ICO);  
  deployer.deploy(ICO);  

  deployer.link(ICO, Token);    
  deployer.deploy(Token); 

  deployer.deploy(AuctionLauncher);   
  deployer.deploy(FirstSaleLauncher);
  
  deployer.deploy(Advisor);    
  deployer.deploy(FirstSale);        
  
};
