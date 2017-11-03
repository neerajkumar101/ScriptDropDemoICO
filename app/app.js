//=============================== Initial ICOController setup ===============================
ICOController.deployed().then(function(deployed){deployed.setICO.sendTransaction(ICO.address).then(function(hash){console.log(hash)} )} );
ICO.deployed().then(function(deployed){deployed.setAsTest.sendTransaction().then(function(data){console.log(data)} )} );
ICO.deployed().then(function(deployed){deployed.setController.sendTransaction(ICOController.address).then(function(hash){console.log(hash)} )} );
Token.deployed().then(function(deployed){deployed.setICO.sendTransaction(ICO.address).then(function(hash){console.log(hash)} )} );
Token.deployed().then(function(deployed){deployed.setController.sendTransaction(ICOController.address).then(function(hash){console.log(hash)} )} );
ICO.deployed().then(function(deployed){deployed.setToken.sendTransaction(Token.address).then(function(hash){console.log(hash)} )} );
// ICO.deployed().then(function(deployed){deployed.setICOSale.sendTransaction(ICOSale.address).then(function(hash){console.log(hash)} )} );
ICOController.deployed().then(function(deployed){deployed.setICOSaleLauncher.sendTransaction(ICOSaleLauncher.address).then(function(hash){console.log(hash)} )} );
//setting advisor only works for the first time
ICOController.deployed().then(function(deployed){deployed.setAdvisor.sendTransaction(Advisor.address).then(function(hash){console.log(hash)} )} );
//setting the fake time for sale
ICO.deployed().then(function(deployed){deployed.setFakeTime.sendTransaction(1).then(function(hash){console.log(hash)} )} );
//===================================================================================================

//================= scripts to send rthers directly to the ICO.sol =================================
//start the first ICO sale
ICOController.deployed().then(function(deployed){deployed.startICOSale.sendTransaction(100).then(function(hash){console.log(hash)} )} );
//staring new sale
ICO.deployed().then(function(deployed){deployed.numSales.call().then(function(data){console.log(data.toNumber())} )} );
//requesting approval for sending tokens in transferFrom() in return of recieved ethers
Token.deployed().then(function(deployed){deployed.approve(ICO.address, '937500000').then(function(data){console.log(data)} ) } )
//checking is the sale active or not
ICO.deployed().then(function(deployed){deployed.currSaleActive.call().then(function(hash){console.log(hash)} )} );
//test allowance
Token.deployed().then(function(deployed){deployed.allowance.call(web3.eth.accounts[0], ICO.address).then(function(hash){console.log(hash)} )} );

//to send ether directly to the ICO contract
ICO.deployed().then(function(deployed){deployed.sendTransaction({ from: web3.eth.accounts[1], value: '100000000000'}).then(function(data){console.log(data)} ) } );
//OR
//to send ether directly to the ICO contract
ICO.deployed().then(function(deployed){deployed.deposit.sendTransaction({ from: web3.eth.accounts[2], value: '100000'}).then(function(data){console.log(data)} ) } );
//==================================================================================================

//================================================ sale related functions ==========================
//to get the ethereum balance
(web3.eth.getBalance(web3.eth.accounts[1]).toNumber())
//to get the token balance of any account
Token.deployed().then(function(deployed){deployed.getTokenBalance.call(web3.eth.accounts[1]).then(function(hash){console.log(hash)} )} );
//increasing allowed approval
Token.deployed().then(function(deployed){deployed.increaseApproval(ICO.address, '937500000').then(function(data){console.log(data)} ) } )
//decrease approval
Token.deployed().then(function(deployed){deployed.decreaseApproval(ICO.address, '100000').then(function(data){console.log(data)} ) } )
//===================================================================================================

// get numContributors in the ICOSale buy passing sale number
ICO.deployed().then(function(deployed){deployed.numContributors.call(0).then(function(data){console.log(data.toNumber())} )} );
//transfer tokens 
Token.deployed().then(function(deployed){deployed.transfer.sendTransaction(web3.eth.accounts[2], 48000).then(function(hash){console.log(hash)} )} );
//to get the token balance by address
Token.deployed().then(function(deployed){deployed.getTokenBalance.call(Token.address).then(function(data){console.log(data)} ).catch(function(error){console.log('Error in getting token balance: ' + error)} ) }).catch(function(error){console.log('Error in getting deployed contract instance: ' + error)});
Token.deployed().then(function(deployed){deployed.getTokenBalance.call(ICO.address).then(function(data){console.log(data)} ).catch(function(error){console.log('Error in getting token balance: ' + error)} ) }).catch(function(error){console.log('Error in getting deployed contract instance: ' + error)});

// ================================================================================================
ICO.deployed().then(function(deployed){deployed.weiPerEth.call().then(function(data){console.log(data.toNumber())} )} );
Token.deployed().then(function(deployed){deployed.totalSupply.call().then(function(data){console.log(data.toNumber())} )} );



ICOController.deployed().then(function(deployed){deployed.getCurrSale.call().then(function(data){console.log(data.toNumber())} )} );

ICOController.deployed().then(function(deployed){deployed.getAddressZero.call().then(function(data){console.log(data)} )} );

ICOController.deployed().then(function(deployed){deployed.getAdvisorAddress.call().then(function(data){console.log(data)} )} );

ICOController.deployed().then(function(deployed){deployed.advisorTokens.call().then(function(data){console.log(data)} )} );
ICOController.deployed().then(function(deployed){deployed.ownerTokens.call().then(function(data){console.log(data)} )} );
