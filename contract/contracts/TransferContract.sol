// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";

contract TransferContract is Ownable {

         constructor(address initialOwner) Ownable(initialOwner) {
    }
    function transferToOwner(uint amount) external payable {
    require(msg.value >= amount, "Insufficient Ether sent");       
       address payable contractOwner = payable(owner());
    contractOwner.transfer(amount);
        
    }

   
}
