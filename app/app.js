//=============================== Initial ICOControllerMonolith setup ===============================

ICOControllerMonolith.deployed().then(function(deployed){deployed.setICO.sendTransaction(ICO.address).then(function(hash){console.log(hash)} )} );
ICO.deployed().then(function(deployed){deployed.setAsTest.sendTransaction().then(function(data){console.log(data)} )} );
ICO.deployed().then(function(deployed){deployed.setController.sendTransaction(ICOControllerMonolith.address).then(function(hash){console.log(hash)} )} );
Token.deployed().then(function(deployed){deployed.setICO.sendTransaction(ICO.address).then(function(hash){console.log(hash)} )} );
Token.deployed().then(function(deployed){deployed.setController.sendTransaction(ICOControllerMonolith.address).then(function(hash){console.log(hash)} )} );
ICO.deployed().then(function(deployed){deployed.setToken.sendTransaction(Token.address).then(function(hash){console.log(hash)} )} );
// ICO.deployed().then(function(deployed){deployed.setFirstSale.sendTransaction(FirstSale.address).then(function(hash){console.log(hash)} )} );
ICOControllerMonolith.deployed().then(function(deployed){deployed.setFirstSaleLauncher.sendTransaction(FirstSaleLauncher.address).then(function(hash){console.log(hash)} )} );
ICOControllerMonolith.deployed().then(function(deployed){deployed.setAuctionLauncher.sendTransaction(AuctionLauncher.address).then(function(hash){console.log(hash)} )} );
//setting advisor only works for the first time
ICOControllerMonolith.deployed().then(function(deployed){deployed.setAdvisor.sendTransaction(Advisor.address).then(function(hash){console.log(hash)} )} );
//setting the fake time for sale
ICO.deployed().then(function(deployed){deployed.setFakeTime.sendTransaction(1).then(function(hash){console.log(hash)} )} );

//===================================================================================================



//================= scripts to send rthers directly to the ICO.sol =================================

//start the first ICO sale
ICOControllerMonolith.deployed().then(function(deployed){deployed.startFirstSale.sendTransaction(100).then(function(hash){console.log(hash)} )} );

//staring new sale
ICO.deployed().then(function(deployed){deployed.numSales.call().then(function(data){console.log(data.toNumber())} )} );

//requesting approval
Token.deployed().then(function(deployed){deployed.approve(ICO.address, '100000').then(function(data){console.log(data)} ) } )

//checking is the sale active or not
ICO.deployed().then(function(deployed){deployed.currSaleActive.call().then(function(hash){console.log(hash)} )} );

//test allowance
Token.deployed().then(function(deployed){deployed.allowance.call(web3.eth.accounts[0], ICO.address).then(function(hash){console.log(hash)} )} );

//to send ether directly to the ICO contract
ICO.deployed().then(function(deployed){deployed.sendTransaction({ from: web3.eth.accounts[1], value: '1000'}).then(function(data){console.log(data)} ) } );

//OR

//to send ether directly to the ICO contract
ICO.deployed().then(function(deployed){deployed.deposit.sendTransaction({ from: web3.eth.accounts[1], value: '100'}).then(function(data){console.log(data)} ) } );

//==================================================================================================


//to get the ethereum balance
(web3.eth.getBalance(web3.eth.accounts[0]).toNumber() / 10**18)

//increasing allowed approval
Token.deployed().then(function(deployed){deployed.increaseApproval(ICO.address, '100000').then(function(data){console.log(data)} ) } )

//decrease approval
Token.deployed().then(function(deployed){deployed.decreaseApproval(ICO.address, '100000').then(function(data){console.log(data)} ) } )


//buying first sale tokens
ICO.deployed().then(function(deployed){deployed.buyTokensFromICO.sendTransaction({value: '100'}).then(function(hash){console.log(hash)} )} );

// get numContributors in the firstSale buy passing sale number
ICO.deployed().then(function(deployed){deployed.numContributors.call(0).then(function(data){console.log(data.toNumber())} )} );

//just for testing, after removing 'onlyController' modifier from Token.mint()
//minting tokens directly fro token.sol
Token.deployed().then(function(deployed){deployed.mint.sendTransaction(Token.address, 10000000000000000000000000000).then(function(hash){console.log(hash)} )} );

//transfer tokens 
Token.deployed().then(function(deployed){deployed.transfer.sendTransaction(web3.eth.accounts[2], 48000).then(function(hash){console.log(hash)} )} );


//to get the token balance by address
Token.deployed().then(function(deployed){deployed.getTokenBalance.call(Token.address).then(function(data){console.log(data)} ).catch(function(error){console.log('Error in getting token balance: ' + error)} ) }).catch(function(error){console.log('Error in getting deployed contract instance: ' + error)});
Token.deployed().then(function(deployed){deployed.getTokenBalance.call(ICO.address).then(function(data){console.log(data)} ).catch(function(error){console.log('Error in getting token balance: ' + error)} ) }).catch(function(error){console.log('Error in getting deployed contract instance: ' + error)});
//buying sale tokens from ethereum account
Token.deployed().then(function(deployed){deployed.getTokenBalance.call(web3.eth.accounts[1]).then(function(hash){console.log(hash)} )} );



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



var solidityDisplay; ICO.deployed().then(function(deployed){solidityDisplay = deployed.PrintDisplay()})

solidityDisplay.implementation;


solidityDisplay.watch(function(err, result) {if (err) { console.log(err); return; } console.log(result.args._value) })