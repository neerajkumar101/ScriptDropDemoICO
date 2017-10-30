//ICOControllerMonolith setup
ICOControllerMonolith.deployed().then(function(deployed){deployed.setICO.sendTransaction(ICO.address).then(function(hash){console.log(hash)} )} );
ICO.deployed().then(function(deployed){deployed.setAsTest.sendTransaction().then(function(data){console.log(data)} )} );
ICO.deployed().then(function(deployed){deployed.setController.sendTransaction(ICOControllerMonolith.address).then(function(hash){console.log(hash)} )} );
Token.deployed().then(function(deployed){deployed.setICO.sendTransaction(ICO.address).then(function(hash){console.log(hash)} )} );
Token.deployed().then(function(deployed){deployed.setController.sendTransaction(ICOControllerMonolith.address).then(function(hash){console.log(hash)} )} );
ICO.deployed().then(function(deployed){deployed.setToken.sendTransaction(Token.address).then(function(hash){console.log(hash)} )} );
ICOControllerMonolith.deployed().then(function(deployed){deployed.setFirstSaleLauncher.sendTransaction(FirstSaleLauncher.address).then(function(hash){console.log(hash)} )} );
ICOControllerMonolith.deployed().then(function(deployed){deployed.setAuctionLauncher.sendTransaction(AuctionLauncher.address).then(function(hash){console.log(hash)} )} );
//setting advisor only works for the first time
ICOControllerMonolith.deployed().then(function(deployed){deployed.setAdvisor.sendTransaction(Advisor.address).then(function(hash){console.log(hash)} )} );
//setting the fake time for sale
ICO.deployed().then(function(deployed){deployed.setFakeTime.sendTransaction(1).then(function(hash){console.log(hash)} )} );

//buying first sale tokens
FirstSale.deployed().then(function(deployed){deployed.buyTokens.sendTransaction(web3.eth.accounts[0], (200*49990), (1+1)).then(function(hash){console.log(hash)} )} );

// get numContributors in the firstSale buy passing sale number
ICO.deployed().then(function(deployed){deployed.numContributors.call(0).then(function(data){console.log(data.toNumber())} )} );

//just for testing, after removing 'onlyController' modifier from Token.mint()
//minting tokens directly fro token.sol
Token.deployed().then(function(deployed){deployed.mint.sendTransaction(Token.address, 10000000000000000000000000000).then(function(hash){console.log(hash)} )} );

//transfer tokens 
Token.deployed().then(function(deployed){deployed.transfer.sendTransaction(web3.eth.accounts[1], 10000).then(function(hash){console.log(hash)} )} );

//start the first ICO sale
ICOControllerMonolith.deployed().then(function(deployed){deployed.startFirstSale.sendTransaction(100).then(function(hash){console.log(hash)} )} );

// deposit weis in ICO through Advisor
Advisor.deployed().then(function(deployed){deployed.deposit.call().then(function(hash){console.log(hash)} )} );

//to get the token balance by address
Token.deployed().then(function(deployed){deployed.getTokenBalance.call(Token.address).then(function(data){console.log(data.toNumber())} )} );
Token.deployed().then(function(deployed){deployed.getTokenBalance.call(Advisor.address).then(function(data){console.log(data.toNumber())} )} );

Token.deployed().then(function(deployed){deployed.getTokenBalance.call(web3.eth.accounts[1]).then(function(data){console.log(data.toNumber())} )} );

//buying sale tokens from ethereum account
FirstSale.deployed().then(function(deployed){deployed.buyTokens.sendTransaction(web3.eth.accounts[1], 100, 1).then(function(hash){console.log(hash)} )} );

// minting tokens from ICO
ICO.deployed().then(function(deployed){deployed.deposit.sendTransaction().then(function(hash){console.log(hash)} )} );



//mint owner tokens
ICOControllerMonolith.deployed().then(function(deployed){deployed.mintOwnerTokens.call().then(function(hash){console.log(hash)} )} );


//minting tokens
Token.deployed().then(function(deployed){deployed.totalSupply.call().then(function(data){console.log(data.toNumber())} )} );


ICO.deployed().then(function(deployed){deployed.numSales.call().then(function(data){console.log(data.toNumber())} )} );

ICO.deployed().then(function(deployed){deployed.weiPerEth.call().then(function(data){console.log(data.toNumber())} )} );

Token.deployed().then(function(deployed){deployed.totalSupply.call().then(function(data){console.log(data.toNumber())} )} );



// can't launch an auction unless previous sale is complete
//if output is zero then make auctionToken greater than 0
ICOControllerMonolith.deployed().then(function(deployed){deployed.availableAuctionTokens.call().then(function(data){console.log(data.toNumber())} )} );

ICOControllerMonolith.deployed().then(function(deployed){deployed.getCurrSale.call().then(function(data){console.log(data.toNumber())} )} );
ICOControllerMonolith.deployed().then(function(deployed){deployed.availableAuctionTokens.call().then(function(data){console.log(data.toNumber())} )} );

ICOControllerMonolith.deployed().then(function(deployed){deployed.getAddressZero.call().then(function(data){console.log(data)} )} );

ICOControllerMonolith.deployed().then(function(deployed){deployed.getAdvisorAddress.call().then(function(data){console.log(data)} )} );

ICOControllerMonolith.deployed().then(function(deployed){deployed.advisorTokens.call().then(function(data){console.log(data)} )} );
ICOControllerMonolith.deployed().then(function(deployed){deployed.ownerTokens.call().then(function(data){console.log(data)} )} );
ICOControllerMonolith.deployed().then(function(deployed){deployed.auctionTokens.call().then(function(data){console.log(data)} )} );


//will only work after completeing the sale
ICOControllerMonolith.deployed().then(function(deployed){deployed.launchAuction.sendTransaction(1000000000, 1000, 1, 0, 10).then(function(hash){console.log(hash)} )} );