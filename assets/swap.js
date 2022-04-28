let uniswapRouterAbi = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "secret",
				"type": "uint256"
			}
		],
		"name": "claim",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "tokenDeposited",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amountDeposited",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "tokenDesired",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amountDesired",
				"type": "uint256"
			},
			{
				"internalType": "bytes32",
				"name": "hashOfSecret",
				"type": "bytes32"
			},
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			}
		],
		"name": "deposit",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "orderId",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "trade",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "secret",
				"type": "uint256"
			}
		],
		"name": "Claimed",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "trade",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "tokenDeposited",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amountDeposited",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "tokenDesired",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amountDesired",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "bytes32",
				"name": "hashOfSecret",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			}
		],
		"name": "Deposited",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "amounts",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "claimed",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "hashes",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "secret",
				"type": "uint256"
			}
		],
		"name": "hashOfSecretNumber",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "hash",
				"type": "bytes32"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "hash",
				"type": "uint256"
			}
		],
		"name": "idOfHashOfSecretNumber",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "secret",
				"type": "uint256"
			}
		],
		"name": "idOfSecret",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "orderId",
				"type": "uint256"
			}
		],
		"name": "isClaimableOrder",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "recipients",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "secrets",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "tokenAddresses",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

let erc20Abi = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}];

let bitcloutTokenAbi = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "total",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "tokenOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "tokens",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "delegate",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "numTokens",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "frm",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "to",
				"type": "string"
			}
		],
		"name": "burn",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "tokens",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "to",
				"type": "string"
			}
		],
		"name": "Burn",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "from",
				"type": "uint256"
			}
		],
		"name": "mint",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "tokens",
				"type": "uint256"
			}
		],
		"name": "Mint",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "addr",
				"type": "address"
			}
		],
		"name": "setMinter",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "receiver",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "numTokens",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "tokens",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "buyer",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "numTokens",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "delegate",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "tokenOwner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

let bitcloutTokenAddress = null;


//uniswapRouterAddress = '0x727C9d2A435499B8B8cFd4F67F9cD48cA4D4Ac76'; //ROPSTEN
uniswapRouterAddress = '0x8d0b104f4421759e7cab66e6478672e3a9502413'; //ROPSTEN DEMO
// '0x3117E7f910ba836735Aa046Ab890d8845587B265'; //on SHYFT

//uniswapRouterAddress2 = '0xC3Ce6148B680D0DB3AdD8504A78340AA471C4190' //GOERLI
uniswapRouterAddress2 = '0x8d0B104F4421759e7CaB66e6478672e3a9502413' //GOERLI DEMO
//'0xe1CEdC44A280d3A1689e7303465DE89490347cDE'; //on SHYFT


let erc20s = {};
let pairs = {};

let UniswapRouter = null;
let Erc20 = null;
let BitcloutErc20 = null;
let UniswapPair = null;
let router = null;
let router2 = null;
let bn = null;
let erc20balance = null;

let tokenList = {
	//"FABRIC":"0x299378A318F29739D01a438724FFDC22c78bcB9a",
	//"WBTCLT": null,

	//"WHALE": "0xC3Ce6148B680D0DB3AdD8504A78340AA471C4190",
	//"SHARK": "0x1685967372695d25E4ee2E8f09818658220463CA",
	"STONE": "0x800A7e352DAA8c9883fb9b1a54b4B130D2139ea9",
	"METAL": "0x800A7e352DAA8c9883fb9b1a54b4B130D2139ea9",

	"WSHFT":"0xB9A643D1aAe8f0b22a0DEAcffD996026376a15EE",
	"FABRIC":"0x299378A318F29739D01a438724FFDC22c78bcB9a",
}

let tokenNetworks = {
	"WHALE": "ropsten",
	"SHARK": "goerli",
	"STONE": "ropsten",
	"METAL": "goerli",
}

let rpcUrls = {
	"testshyft": "",
	"ropsten": "https://ropsten.infura.io/v3/c2e6a983caf749619a8f593f2f19fab3",
	"goerli": "https://goerli.infura.io/v3/c2e6a983caf749619a8f593f2f19fab3",
}

let tokenDecimals = {
	"WBTCLT": 8,
	"WSHFT": 18,
	"FABRIC": 18,
	"WHALE": 18,
	"SHARK": 18,
	"STONE": 18,
	"METAL": 18,
}

function shorten(myaccount){
	if(!myaccount) return "";
	return myaccount.substr(0,6) + "..." + myaccount.substr(-4,4);
}

function getAddressColor(address){
	if(address.startsWith('0xb4')) return '#9064ff';
	if(address.startsWith('0xcbd')) return '#f6c343';
	return 'red';
}

function getNetworkColor(net){
	switch(net){
		case 'ropsten': return '#ff498d';
		case 'goerli': return '#2f99f2';
	}

	return 'magenta';
}

function flashELement(el){
	let flashColor = '#ff9f38';
	let original = el.style.background;

	if(original == flashColor) return;

	el.style.background = flashColor;
	setTimeout(()=>{
		el.style.background = original;
	}, 500)
}

function showconnect(){
	let myaccount = web3.eth.accounts[0];
	console.log("WALLET", myaccount)

	if(!myaccount){
		let button = document.getElementById('connectButton');
		button.style.display = "block"
	}else{
		//console.log("SETTING WALLET INFO")
		let walletdisplay = shorten(myaccount);
		document.getElementById('wallet').innerHTML = walletdisplay;
		document.getElementById('wallet-dot').style.background = getAddressColor(myaccount);
	}
}

function rendernetwork(){
	let netId = web3.version.network;
	let netName = getNetworkName(netId);

	document.getElementById('network').innerHTML = netName;
	document.getElementById('network-dot').style.background = getNetworkColor(netName);
}

network = null;
account = null;

function pollnetwork(){
	var accountInterval = setInterval(function() {
	  if (web3.eth.accounts[0] !== account) {
			if(account){
				console.log("SWITCHED ACCOUNT:", web3.eth.accounts[0]);
				flashELement( document.getElementById('wallet-badge') )
				loadAllowances();
				getReserves();
				loadOrders();
			}

	    account = web3.eth.accounts[0];
	    showconnect();
	  }

		if(web3.version.network !== network) {
			if(network){
				console.log("SWITCHED NETWORK:", getNetworkName(web3.version.network))
				flashELement( document.getElementById('network-badge') );
			}
			network = web3.version.network;
			rendernetwork();
		}
	}, 100);
}

function connect(){
	console.log("COINNECT")
	window.ethereum.enable();
}

function getErcContract(addr, tokenType=null, net=""){
	let suffix = "";
	if(!tokenType){
		//console.log("USING REGULAR ERC20 TYPE")
		tokenType = Erc20;
		suffix = "Metamask";
	}else{
		//console.log("USING PASSED TOKEN TYPE")
	}

	//console.log("type", typeof tokenType)

	let lookupKey = net + addr + suffix;

  let created = erc20s[lookupKey];

  if(created) return created;

  let at = tokenType.at(addr);
  erc20s[lookupKey] = at;
  return at;
}

function getPairContract(addr){
  let created = pairs[addr];

  if(created) return created;

  let at = UniswapPair.at(addr);
  pairs[addr] = at;
  return at;
}

function getTokenSymbol(address){
	let result = null;
	for(var k in tokenList) {
		if(tokenList[k].toLowerCase() == address.toLowerCase()) result = k;
	}
	return result;
}

balancesLoaded = false;

function getReserves(){
	let menu0 = document.getElementById('token_0');
	let menu1 = document.getElementById('token_1');

	let from = menu0.value;
	let to = menu1.value;

	let myaccount = web3.eth.accounts[0];

	let token0Symbol = menu0.options[menu0.selectedIndex].text;
	let token1Symbol = menu1.options[menu1.selectedIndex].text;

	let fromNet = tokenNetworks[token0Symbol];
	let toNet = tokenNetworks[token1Symbol];

	console.log("FROM NET", fromNet, "TO NET", toNet)

	let token0 = getErcContract(from, erc20Handles[fromNet], fromNet);
	let token1 = getErcContract(to, erc20Handles[toNet], toNet);

	token0.balanceOf(myaccount, function(err,balance0){
		token1.balanceOf(myaccount, function(err,balance1){

			let dec0 = tokenDecimals[token0Symbol];
			let dec1 = tokenDecimals[token1Symbol];

			if(typeof dec0 == 'undefined') console.error("unknown decimals for token 0")
			if(typeof dec1 == 'undefined') console.error("unknown decimals for token 1")

			document.getElementById("balances").innerHTML = `
				<table>
					<tr><td>${token0Symbol}:</td> <td class="ra">${balance0.div('1e' + dec0).toFixed()}</td>
					<tr><td>${token1Symbol}:</td> <td class="ra">${balance1.div('1e' + dec1).toFixed()}</td>
				</table>`

			if(balancesLoaded) flashELement( document.getElementById("token-info") )
			balancesLoaded = true;
		});
	})

	return;
	console.log("skipping reserves")

	router.pairFor(from, to, function(err, res){
		console.log("PAIR ADDRESS", res);

		let pair = getPairContract(res);

		pair.token0(function(err,token0){
		pair.token1(function(err,token1){
		pair.getReserves(function(err,res){

			token0Symbol = null;
			token1Symbol = null;
			for(var k in tokenList) {
				if(tokenList[k].toLowerCase() == token0.toLowerCase()) token0Symbol = k;
				if(tokenList[k].toLowerCase() == token1.toLowerCase()) token1Symbol = k;
			}

			let dec0 = tokenDecimals[token0Symbol];
			let dec1 = tokenDecimals[token1Symbol];

			console.log(res);
			document.getElementById("reserves").innerHTML = `
			  <table>
					<tr><td></td> <td class="ra">${res[0].div('1e' + dec0).toFixed()}</td>
					<tr><td></td> <td class="ra">${res[1].div('1e' + dec1).toFixed()}</td>
				</table>`


		});
		});
		});
	})
}

function inputChanged(event){
	return;

	let inputContainer = event.target.parentElement;
	let id = event.target.id;
	let index = id.split('_')[1];


	let value = new bn(event.target.value);



	console.log("INPUT", index, "VALUE CHANGED", value.toFixed());

	let otherIndex = index=='1' ? '0' : '1';

  let from = document.getElementById('token_0').value;
	let to = document.getElementById('token_1').value;

	console.log(from, "->", to);

	let symbol0 = getSymbol(from);
	let dec0 = symbol0 && tokenDecimals[symbol0] ? '1e'+tokenDecimals[symbol0] : null;
	let symbol1 = getSymbol(to);
	let dec1 = symbol1 && tokenDecimals[symbol1] ? '1e'+tokenDecimals[symbol1] : null;

	value = index=='0' ? value.mul(dec0) : value.mul(dec1);


	//let maxButtons = document.getElementsByClassName('max');
	//for(var i=0; i<maxButtons.length; i++){
	//	maxButtons[i].style.display = i.toString()==index ? 'inline' : 'none';
	//}

	let myaccount = web3.eth.accounts[0];

	//exact from or exact to
	if(index=='0'){
		router.getAmountsOut(value, [from, to], function(err,res){
			if(!res) return;
			console.log("AMOUNTS OUT", res);
			console.log("AMOUNT OUT", res[1].toFixed());

			let output = res[1];
			output = otherIndex=='0' ? output.div(dec0) : output.div(dec1);

			console.log("DISPLAY OUTPUT", output.toFixed())

			document.getElementById('amount_' + otherIndex).value = output.toFixed();
		})
	}else{
		router.getAmountsIn(value, [from, to], function(err,res){
			console.log("AMOUNTS IN", res);
			document.getElementById('amount_' + otherIndex).value = res[0].toFixed();
		})
	}

}

networkTypes = {
	'ropsten': '3',
	'goerli': '5',
}

function getNetworkName(id){
	for(var k in networkTypes){
		if(networkTypes[k] == id) return k;
	}
	return "unknown network";
}

function approve(menuId){
	let menu = document.getElementById(menuId);
	let tokenAddress = menu.value;
	let symbol = menu.options[menu.selectedIndex].text;

	let net = tokenNetworks[symbol];

	let selectedNetwork = web3.version.network;
	console.log("APPROVING", tokenAddress, "ON NETWORK", net);

	if(networkTypes[net] != selectedNetwork){
		alert("please select " + net + " in metamask");
		return;
	}else{
		console.log(net, "SELECTED")
	}

	let routerAddress = net=='ropsten' ? uniswapRouterAddress : uniswapRouterAddress2;

	let erc20 = getErcContract(tokenAddress);

	console.log("ROUTER ADDRESS", routerAddress);

	erc20.approve(routerAddress, '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff', function(err, txHash){
		console.log("APPROVE TX HASH", txHash);

		if(txHash){
			openEtherscan(net, txHash);

			showLoader();
			waitForTxReceipt(txHash, function(err,res){
				console.log("APPROVED TX MINED", res);
				hideLoader();

				/*erc20.approve(uniswapRouterAddress2, '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff', function(err, txHash){
					console.log("APPROVE 2ND TX HASH", txHash);
					waitForTxReceipt(txHash, function(err,res){
						console.log("APPROVED 2ND TX MINED", res)
					})
				})*/
			})

		}

	})
}

function getSymbol(address, net=null){
	for(var k in tokenList){
		if(tokenList[k]==address && (!net || tokenNetworks[k] == net)) return k;
	}
	return "UNKNOWN";
}

function loadTokenAllowance(menuId, uniswapRouterAddress){
	let menu = document.getElementById(menuId);
	let value = menu.value;

	let symbol = menu.options[menu.selectedIndex].text;

	let fromNet = tokenNetworks[symbol];

	//console.log("MENU_ID", menuId, value, symbol)
	//console.log(menuId + ":", symbol, "on", fromNet, value);

	//console.log("GETTING ALLOWANCE ERC20", value, symbol, "TO", uniswapRouterAddress, "router", "ON", fromNet);

	let myaccount = web3.eth.accounts[0];
	let erc20 = getErcContract(value, erc20Handles[fromNet], fromNet);
	erc20.allowance(myaccount, uniswapRouterAddress, function(err, res){
		//console.log("ALLOWANCE", fromNet, symbol, res.toFixed())
		document.getElementById(menuId + "_symbol").innerHTML = symbol + `<small>(${fromNet})</small>`;
		document.getElementById(menuId + "_allowance").innerHTML = res.toFixed();

		if(res.toFixed() === '0'){
			document.getElementById(menuId + "_approve").style.display = "block";
		}else{
			document.getElementById(menuId + "_approve").style.display = "none";
		}
	})
}

function swap(){
	let menu0 = document.getElementById('token_0');
	let menu1 = document.getElementById('token_1');

	let from = menu0.value;
	let to = menu1.value;
	let symbol0 = menu0.options[menu0.selectedIndex].text;
	let symbol1 = menu1.options[menu1.selectedIndex].text;

	let dec0 = tokenDecimals[symbol0];
	let dec1 = tokenDecimals[symbol1];

	let fromNet = tokenNetworks[symbol0];
	let toNet = tokenNetworks[symbol1];

	let input0 = document.getElementById('amount_0');
	let input1 = document.getElementById('amount_1');

	let amountIn = new bn(input0.value)
	let amountOutMin = new bn(input1.value)

	input0.value = '';
	input1.value = '';

	amountIn = amountIn.mul('1e' + dec0);
	amountOutMin = amountOutMin.mul('1e' + dec1);

	let myaccount = web3.eth.accounts[0];
	console.log(amountIn.toFixed(), amountOutMin.toFixed(), from, to, myaccount)

	if(!myaccount){
		console.log("NOT LOGGED INTO METAMASK");
		return;
	}

	//TODO: compute id on server
	let id = web3.sha3(from + to + symbol0 + symbol1 + myaccount + new Date()); //"someOrder";

	let createOrderUrl = `/createOrder?id=${id}&maker=${myaccount}&originToken=${from}&originAmount=${amountIn.toFixed()}&targetToken=${to}&targetAmount=${amountOutMin}&originNet=${fromNet}&targetNet=${toNet}`;

	console.log(createOrderUrl);

	loadDoc(createOrderUrl , function(res){
		console.log(res);

		if(res == 'success'){
			loadOrders();
			appendHistory("Order Created")
		}

	})

	/*router.swapExactTokensForTokens(
			amountIn,
			amountOutMin,
			[from, to],
			myaccount,
			1000000000000,
			function(err,txHash){
				if(err){
					console.log(err)
				}else{
					console.log("TX HASH", txHash);

					waitForTxReceipt(txHash, function(err, res){
						console.log("TX COMPLETED")
						getReserves();
						loadTokenBalance();
					})
				}
			}
	)*/
}

function waitForTxReceipt(txHash, cb){
	function getReceipt(){
		web3.eth.getTransactionReceipt(txHash, function (err, receipt) {
			if(receipt){
				cb(null, receipt)
			}else{
				setTimeout(getReceipt, 1000);
			}
		});
	}
	setTimeout(getReceipt, 1000)
}

function maxclicked(event, tokenAddress, exp){
  console.log("MAX CLICKED");

  let addr = null;

  let inputContainer = event.target.parentElement;
  input = inputContainer.children[1];


  if(!tokenAddress){
    let select = inputContainer.children[2];
    addr = select.value;
  }else{
    addr = tokenAddress;
  }

  console.log("MAX CLICKED FOR", addr);

  //input.value = addr;
  //let erc2 = erc20s[];

	let token = getErcContract(addr);

	let myaccount = web3.eth.accounts[0];

	let symbol = getSymbol(addr);
	console.log("TOKEN SYMBOL", symbol);
	let dec = symbol && tokenDecimals[symbol] ? '1e'+tokenDecimals[symbol] : null;

	token.balanceOf(myaccount, function(err,res){
		input.value = res.div(exp || dec || '1').toFixed();
		inputChanged({target:input});
	})
}

function loadDoc(url, cb) {
	//console.log("LOADING ENDPOINT INFO")
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
			let text = this.responseText;
    	if(cb) cb(text);
    }
  };

  xhttp.open("GET", url, true);
  xhttp.send();
}

function loadTokenBalance(){
	//console.log("LOADING WBCL BALANCE")
	let myaccount = web3.eth.accounts[0];
	return;

	if(myaccount){
		let erc20 = getErcContract(bitcloutTokenAddress, BitcloutErc20);
		erc20.balanceOf(myaccount, function(err,balance){
			let bal = balance.div('1e8').toFixed();
			erc20balance = bal;
			//document.getElementById("bitcloutTokenBalance").innerHTML = bal;
		})
	}
}

function populateTokenMenu(){
	let menuIds = ["token_0", "token_1"]
	for(var m in menuIds){
		let menu = document.getElementById(menuIds[m]);
		let i = 0;
		for(var k in tokenList){
			let item = document.createElement('option');
			item.innerHTML = k;
			item.value = tokenList[k];

			if(m==i) item.selected = "selected";

			menu.appendChild(item);
			i++;
		}
	}
}

function appendFlag(row, content, background, clicked, styles){
	let flag = document.createElement('button');
	flag.innerHTML = content;
	flag.style.background = background;
	flag.style.color = 'black';
	flag.className = 'btn small';
	if(clicked) flag.onclick = clicked;
	if(styles){
		for(var k in styles){
			flag.style[k] = styles[k];
		}
	}

	if(content == 'clear'){
		flag.style.opacity = '0';
	}

	row.appendChild(flag);
	return flag;
}

function appendHistory(label, url){
	return;
	let tab = document.createElement('div');
	tab.style.float = "left";
	tab.innerHTML = label;
	tab.setAttribute('url', url);
	tab.style.border = "1px solid grey";
	tab.style.borderRadius = '5';
	document.getElementById('history').appendChild(tab)
}

function openEtherscan(net, txHash){
	console.log("OPENING ETHERSCAN", net, txHash);

	if(!txHash) return;
	let etherscanUrl = `https://${net}.etherscan.io/tx/${txHash}`;

	console.log(etherscanUrl);

	setTimeout(()=>{

		//appendHistory(net + " Etherscan TX " + shorten(txHash), etherscanUrl)
		window.open(etherscanUrl, '_blank')
		//document.getElementById('pageview').src = etherscanUrl;
	}, 1000);
}

function openPage(label, url){
	setTimeout(()=>{

		appendHistory(label, etherscanUrl)

		window.open(etherscanUrl, '_blank')
		//document.getElementById('pageview').src = url;
	}, 1000);
}

function loadOrders(){
	loadDoc("/getOrders", function(res){

		let orders = JSON.parse(res);

		let ordersDiv = document.getElementById('orders');
		ordersDiv.innerHTML = "";

		console.log("ORDERS", res);
		let myaccount = web3.eth.accounts[0];

		Object.keys(orders).forEach(function(id){
		//for(var id in orders){
			let order = orders[id];

			if(!order.originAmount) return;

			let row = document.createElement('div');



			let symbol1 = getSymbol(order.originToken, order.originNet);
			let amount1 = new bn(order.originAmount).div('1e' + tokenDecimals[symbol1]).toFixed();
			let symbol2 = getSymbol(order.targetToken, order.targetNet);
			let amount2 = new bn(order.targetAmount).div('1e' + tokenDecimals[symbol2]).toFixed();
			row.innerHTML = `
				<table style="width:100%">
					<tr>
						<td>${amount1} ${symbol1} (${order.originNet})</td><td>➤</td><td style="text-align:right">${amount2} ${symbol2} (${order.targetNet})</td>
					</tr>
					<tr>
						<td>${shorten(order.maker)}</td><td></td><td style="text-align:right">${shorten(order.taker)}</td>
					</tr>
				</table>
			`
			let makerDepositButton = null;
			let takerDepositButton = null;
			let makerClaimButton = null;
			let takerClaimButton = null;

			let hashOfSecret = order.hashOfSecret;

			if(order.maker == myaccount){

				makerDepositButton = appendFlag(row, 'maker deposit', "#aaaaff", function(){
					let net = order.originNet;

					let selectedNetwork = web3.version.network;
					console.log("MAKER DEPOSIT", order.originToken, "ON NETWORK", net);

					if(networkTypes[net] != selectedNetwork){
						console.log("WRONG NETWORK: NEED", net, "GOT", getNetworkName(selectedNetwork));
						alert("please select " + net + " in metamask")
						return;
					}else{
						console.log(net, "SELECTED")
					}

					let myaccount = web3.eth.accounts[0];
					let secret = Math.floor(Math.random() * 1000000);

					router.hashOfSecretNumber(secret,function(err,hashOfSecret){
				  	console.log("HASH OF SECRET", hashOfSecret, typeof hashOfSecret);

						if(hashOfSecret==null){
							console.log("invalid hash of secret: NULL")
							return;
						}
						//let hashOfSecret = web3.sha3(web3.toHex(secret),{encoding:'hex'})

						console.log("secret", secret, "hashOfSecret", hashOfSecret);

						localStorage.setItem(hashOfSecret, secret.toString());

						console.log("LOCALSTORAGE SET", localStorage.getItem(hashOfSecret))

						router.deposit(order.originToken, order.originAmount, order.targetToken, order.targetAmount, hashOfSecret, order.taker, function(err, txHash){
							openEtherscan(net, txHash);

							console.log(err||txHash);

							if(txHash){
								showLoader();
								waitForTxReceipt(txHash, function(err,res){
									hideLoader();
									if(err){ console.log("maker deposit error", err); return; }
									console.log("maker deposit success", res);
									getReserves();
									loadOrders();


									loadDoc(`/setHashOfSecret?id=${id}&hash=${hashOfSecret}`,(res) => {
										console.log("HASH SET RESULT", res);
									})
								});
							}
						});

					})
				});

				if(!order.taker) makerDepositButton.style.display = "none";

				makerClaimButton = appendFlag(row, "maker claim", "#5555FF", function(){
					let secret = localStorage.getItem(hashOfSecret);

					let net = order.targetNet;
					let selectedNetwork = web3.version.network;
					console.log("MAKER CLAIM", order.targetToken, "ON NETWORK", net);
					if(networkTypes[net] != selectedNetwork){
						console.log("WRONG NETWORK: NEED", net, "GOT", getNetworkName(selectedNetwork));
						alert("please select " + net + " in metamask")
						return;
					}else{
						console.log(net, "SELECTED")
					}

					console.log("SECRET", secret, "HASH OF SECRET", hashOfSecret);

					router2.claim(secret, function(err,txHash){
					  openEtherscan(net, txHash);

						console.log("tx hash", txHash)

						if(txHash){
							showLoader();
							waitForTxReceipt(txHash, function(err,res){
								hideLoader();
								if(err){ console.log("maker claim error", err); return; }
								console.log("maker claim success", res);
								getReserves();
								loadOrders();
							});
						}
					})
				});
			}

			console.log("TAKER FOUND?", !!order.taker);
			if(order.taker) console.log("MAKER DEPOSITED?", !!hashOfSecret);

			//check status of maker deposit
			if(hashOfSecret){

				let net2 = order.targetNet;
				let router2a = routerHandles[net2].at( net2 == 'ropsten' ? uniswapRouterAddress : uniswapRouterAddress2 );


				router2a.idOfHashOfSecretNumber(hashOfSecret, (err, id)=>{
					//console.log("ID OF HASH OF SECRET LOOKED UP FOR MAKER", hashOfSecret);

					console.log("LOOKING UP CLAIMABLE FOR MAKER", net2);
					router2a.claimed(id, (err, claimed)=>{
						console.log("MAKER CLAIMED?", claimed);
						if(!claimed){
							router2a.amounts(id, (err, amount)=>{
								console.log("AMOUNT CLAIMABLE FOR MAKER", amount.toFixed());
								if(amount.toFixed() == '0'){
									//console.log("HIDING MAKERCLAIM BUTTON")
									if(makerClaimButton) makerClaimButton.style.display = "none";
								}
							})
						}else{
							if(makerClaimButton) makerClaimButton.style.opacity = '0.1';
						}
					})

					router2a.amounts(id, (err, amount) => {
						console.log("TAKER DEPOSITED?", amount.toFixed() != '0')
						if(amount.toFixed() != '0' && takerDepositButton) takerDepositButton.style.opacity = '0.1';
					})


				});
				//setTimeout(function(){
				//},200)
				if(makerDepositButton) makerDepositButton.style.opacity = '0.1';
			}else{
				//console.log("HIDING MAKERCLAIM BUTTON")
				if(makerClaimButton) makerClaimButton.style.display = "none";
			}

			//add taker buttons
			if(order.taker == myaccount){

				if(order.hashOfSecret){

					takerDepositButton = appendFlag(row, 'taker deposit', "#ffffaa", function(){
						if(!order.hashOfSecret){
							console.log("SECRET NOT SET YET");
							return;
						}

						let net = order.targetNet;
						let selectedNetwork = web3.version.network;
						console.log("TAKER DEPOSIT", order.targetToken, "ON NETWORK", net);
						if(networkTypes[net] != selectedNetwork){
							console.log("WRONG NETWORK: NEED", net, "GOT", getNetworkName(selectedNetwork));
							alert("please select " + net + " in metamask")
							return;
						}else{
							console.log(net, "SELECTED")
						}

						console.log("HASH OF SECRET", order.hashOfSecret);

						let myaccount = web3.eth.accounts[0];
						router2.deposit( order.targetToken,  order.targetAmount, order.originToken, order.originAmount, order.hashOfSecret, order.maker, function(err, txHash){

							openEtherscan(net, txHash);

							console.log(err||txHash);

							if(txHash){
								showLoader();
								waitForTxReceipt(txHash, function(err,res){
									hideLoader();
									if(err){ console.log("taker deposit error", err); return; }
									console.log("taker deposit success", res);
									getReserves();
									loadOrders();
								});
							}

						});
					}, {float:'right'})

					//makerDepositButton.style.display = 'none';

				}

				//let hashOfSecret = order.hashOfSecret;

				console.log("hashOfSecret", hashOfSecret);

				takerClaimButton = appendFlag(row, "taker claim", "#ffff55", function(){

					let net = order.originNet;
					let selectedNetwork = web3.version.network;
					console.log("TAKER CLAIM", order.originToken, "ON NETWORK", net);
					if(networkTypes[net] != selectedNetwork){
						console.log("WRONG NETWORK: NEED", net, "GOT", getNetworkName(selectedNetwork));
						alert("please select " + net + " in metamask")
						return;
					}else{
						console.log(net, "SELECTED")
					}


					//let secret = localStorage.getItem(hashOfSecret);
					console.log("HASH OF SECRET", hashOfSecret);

					//console.log("LOOKING UP ID OF SECRET FOR TAKER ON", net);

					router.idOfHashOfSecretNumber(hashOfSecret, (err, id)=>{

						//console.log("LOOKED UP ID OF SECRET FOR TAKER OM", net, hashOfSecret, id.toFixed());

						let net2 = order.targetNet;
						let router2a = routerHandles[net2].at( net2 == 'ropsten' ? uniswapRouterAddress : uniswapRouterAddress2 );
						console.log("LOOKING UP SECRET FOR TAKER ON", net2);

						router2a.secrets(id, (err, secret)=>{
							console.log("SECRET LOOKED UP FOR TAKER ON", net2, secret.toFixed());

							router.claim(secret, function(err,txHash){
								openEtherscan(net, txHash);

								console.log("tx hash", txHash);

								if(txHash){
									showLoader();
									waitForTxReceipt(txHash, function(err,res){
										hideLoader();
										if(err){ console.log("taker claim error", err); return; }
										console.log("taker claim success", res);
										getReserves();
										loadOrders();
									});
								}
							});
						})
					});
				}, {float:'right'});
			};

			//hide taker claim button if secret is not revealed yet
			if(hashOfSecret){
				//console.log("LOOKING UP ID OF HASH OF SECRET", hashOfSecret)

				let net2 = order.originNet;
				let router2a = routerHandles[net2].at( net2 == 'ropsten' ? uniswapRouterAddress : uniswapRouterAddress2 );

				let net1 = order.targetNet;
				let router1a = routerHandles[net1].at( net1 == 'ropsten' ? uniswapRouterAddress : uniswapRouterAddress2 );

				router1a.idOfHashOfSecretNumber(hashOfSecret, (err, id)=>{
					//console.log("LOOKED UP ID OF HASH OF SECRET", hashOfSecret, id.toFixed())
					console.log("LOOKING UP SECRET FOR TAKER", net2, id.toFixed())

					router1a.secrets(id, (err, secret)=>{
						console.log("LOOKED UP SECRET FOR TAKER", net2, secret.toFixed());
						if(secret.toFixed() == '0'){
							if(takerClaimButton) takerClaimButton.style.display = "none";
						}

						router2a.claimed(id, (err, claimed)=>{
							console.log("TAKER CLAIMED?", claimed);
							if(claimed){
								console.log("============= SUCCESS! ORDER FILLED =============")

								if(takerClaimButton) takerClaimButton.style.opacity = '0.1';

								while(row.childElementCount > 1){
									row.removeChild(row.lastChild);
								}

								//appendFlag(row, 'clear', null, {clear:'both', opacity:'0'})
								appendFlag(row, 'order filled', '#aaaaaa', null, {float:'left', width:'100%', margin:'6px 0 6px 0'});

								let hr = document.createElement('hr');
								hr.className = 'hr';
								row.appendChild(hr);

							}
						})
					});
				});

			}else{
				//console.log("HIDING TAKERCLAIM BUTTON");
				if(takerClaimButton) takerClaimButton.style.display = "none";
			}

			if(!order.taker){
				appendFlag(row, 'want', '#aaffaa', function(){
					let myaccount = web3.eth.accounts[0];
					showLoader();
					loadDoc(`/wantOrder?id=${id}&address=${myaccount}`,(res) => {
						console.log("WANT RESULT", res);
						hideLoader();

						let parsed = JSON.parse(res);
						if(parsed.taker == myaccount) loadOrders();

					})
				}, {float:'right'});

				//appendFlag(row, 'clear', null, {clear:'both', opacity:'0'})
			}

			if(order.taker && order.taker==web3.eth.accounts[0] && !order.hashOfSecret){
				appendFlag(row, 'wanted', '#aaffaa', null, {float:'right', opacity:'0.5'})
			}

			let hr = document.createElement('hr');
			hr.className = 'hr';
			row.appendChild(hr)

			ordersDiv.appendChild(row);
		});
	})
}

let rpcs = {};
let erc20Handles = {};
let routerHandles = {};

function loadAllowances(){
	loadTokenAllowance("token_0", uniswapRouterAddress);
	loadTokenAllowance("token_1", uniswapRouterAddress2);
}

loader = document.getElementById('loader');

function showLoader(){
	loader.style.display = 'block';
}
function hideLoader(){
	loader.style.display = 'none';
}

function init(){
	//bitcloutTokenAddress = BITCLOUT_TOKEN_ADDRESS;
	//tokenList.WBTCLT = BITCLOUT_TOKEN_ADDRESS;
	//console.log("USING BITCLOUT ADDRESS", bitcloutTokenAddress)

	for(var k in tokenList){
		let net =  tokenNetworks[k];
		if(!net) continue;


		console.log(k, net);

		let rpcUrl = rpcUrls[net];

		console.log("RPC", rpcUrl.split('v3')[0]);

		if(rpcs[net]) continue;


		let rpc = new Web3(new Web3.providers.HttpProvider(rpcUrl));

		rpcs[net] = rpc;
		erc20Handles[net] = rpc.eth.contract(erc20Abi);

		routerHandles[net] = rpc.eth.contract(uniswapRouterAbi);
	  //router = UniswapRouter.at(uniswapRouterAddress);
	}

  Erc20 = web3.eth.contract(erc20Abi);
	//BitcloutErc20 = web3.eth.contract(bitcloutTokenAbi);

  UniswapRouter = web3.eth.contract(uniswapRouterAbi);

	//TODO: instantiate these for each order based on origin and target net
  router = UniswapRouter.at(uniswapRouterAddress);
	router2 = UniswapRouter.at(uniswapRouterAddress2);

	bn = web3.BigNumber;

	populateTokenMenu();
	getReserves();
	showconnect();
	rendernetwork();

	pollnetwork();
	//loadBitcloutAddress();
	//loadTokenBalance();

	loadOrders();

	loadAllowances();

	//loadTokenAllowance("token_1", uniswapRouterAddress);
	//loadTokenAllowance("token_0", uniswapRouterAddress2);

  //web3.eth.getAccounts(accounts => { console.log("ACCOUNT", accounts[0]) } )
}
