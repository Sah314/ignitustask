// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";

contract TransferContract is Ownable {

         constructor(address initialOwner) Ownable(initialOwner) {
    }

    function transferToOwner() external payable {
        address _owner  =owner();
        uint256 amount = msg.value; 
        require(amount > 0, "No Ether sent");
        (bool sent, ) = payable(_owner).call{value: amount}("");
        require(sent, "Failed to send Ether to owner");
     
    }

   
}
