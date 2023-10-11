const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
const { ADDRESS }  = require("../constants/constants");
async function main() {
 
  const contract = await ethers.getContractFactory("TransferContract");
  const deployedContract = await contract.deploy(
   ADDRESS
  );

  // print the address of the deployed contract
  console.log(
    "Contract Address:",
    deployedContract.target
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
