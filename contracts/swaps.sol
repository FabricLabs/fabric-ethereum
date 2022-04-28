pragma solidity ^0.7.6;

interface IERC20 {
    function transfer(address to, uint256 value) external returns (bool);

    function approve(address spender, uint256 value) external returns (bool);

    function transferFrom(address from, address to, uint256 value) external returns (bool);

    function totalSupply() external view returns (uint256);

    function balanceOf(address who) external view returns (uint256);

    function allowance(address owner, address spender) external view returns (uint256);

    event Transfer(address indexed from, address indexed to, uint256 value);

    event Approval(address indexed owner, address indexed spender, uint256 value);
}


contract Swaps {
    constructor() {

    }

    mapping(uint => bool) public hashes;
    mapping(uint => bool) public claimed;
    mapping(uint => uint) public amounts;
    mapping(uint => address) public tokenAddresses;
    mapping(uint => address) public recipients;
    mapping(uint => uint) public secrets;

    event Deposited(uint trade, address tokenDeposited, uint amountDeposited, address tokenDesired, uint amountDesired, bytes32 hashOfSecret, address recipient);
    event Claimed(uint trade, uint secret);

    function hashOfSecretNumber(uint secret) public pure returns (bytes32 hash) {
        hash = keccak256(toBytes(secret));
    }

    function idOfHashOfSecretNumber(uint hash) public pure returns (uint id){
        id = uint(hash);
    }

    function idOfSecret(uint secret) public pure returns (uint id) {
        id = uint(keccak256(toBytes(secret)));
    }

    function isClaimableOrder(uint orderId) public view returns (bool) {
        return
            hashes[orderId] &&
            !claimed[orderId] &&
            recipients[orderId] == msg.sender;
    }

    function claim(uint secret) public returns (bool) {

        bytes32 hash = keccak256(toBytes(secret));
        uint orderId = uint(hash);

        require(isClaimableOrder(orderId));


        IERC20 erc20 = IERC20(tokenAddresses[orderId]);

        erc20.transfer(msg.sender, amounts[orderId]);

        secrets[orderId] = secret;
        claimed[orderId] = true;

        emit Claimed(orderId, secret);

        return true;
    }

    /*function onTokenTransfer(address from, uint256 amount, bytes memory data) public returns (bool success) {
        uint id = hashes.length;
        amounts[id] = amount;
        bytes32 data2 = bytesToBytes32(data, 0);
        hashes.push(data2);
        return true;
    }*/

    function deposit(address tokenDeposited, uint amountDeposited, address tokenDesired, uint amountDesired, bytes32 hashOfSecret, address recipient) public returns(uint orderId){

        //bytes32 hashBytes32 = hashOfSecret;// bytesToBytes32(hashOfSecret, 0);
        orderId = uint(hashOfSecret);

        IERC20 erc20 = IERC20(tokenDeposited);

        erc20.transferFrom(msg.sender, address(this), amountDeposited);

        tokenAddresses[orderId] = tokenDeposited;
        recipients[orderId] = recipient;
        hashes[orderId] = true;
        amounts[orderId] = amountDeposited;

        emit Deposited(orderId, tokenDeposited, amountDeposited, tokenDesired, amountDesired, hashOfSecret, recipient);
        return orderId;
    }

    function toBytes(uint256 x) pure internal returns (bytes memory b) {
        b = new bytes(32);
        assembly { mstore(add(b, 32), x) }
        return b;
    }

    function bytesToBytes32(bytes memory b, uint offset) private pure returns (bytes32) {
      bytes32 out;

      for (uint i = 0; i < 32; i++) {
        out |= bytes32(b[offset + i] & 0xFF) >> (i * 8);
      }
      return out;
    }
}
