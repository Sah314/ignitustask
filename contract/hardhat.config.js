require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const NODE_ADDRESS = process.env.NODE_ADDRESS;
console.log(NODE_ADDRESS)
const PRIVATE_KEY = process.env.PRIVATE_KEY;
console.log(PRIVATE_KEY)
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  networks: {
    sepolia: {
      url: NODE_ADDRESS,
      accounts: [PRIVATE_KEY],
    },
  },
};
