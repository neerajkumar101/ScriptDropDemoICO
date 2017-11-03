var ICOController = artifacts.require("ICOController");
var ICO = artifacts.require("ICO");
var Token = artifacts.require("Token");
var ICOSaleLauncher = artifacts.require("ICOSaleLauncher");
var ICOSale = artifacts.require("ICOSale");
var Advisor = artifacts.require("Advisor");

module.exports = function(deployer) {
  deployer.deploy(ICOController); 

  deployer.link(ICOController, ICO);  
  deployer.deploy(ICO);  

  deployer.link(ICO, Token);    
  deployer.deploy(Token); 

  deployer.deploy(ICOSaleLauncher);
  
  deployer.deploy(Advisor);    
  deployer.deploy(ICOSale);        
  
};
