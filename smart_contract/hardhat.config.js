require("@nomiclabs/hardhat-waffle")
const PRIVATE_KEY =
  "0x056791bc5f99469905a2fee22fe4810e534bbbd5287635c78239305414cef2b1"
module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/bqNOZPAp-rZTN--8PeZ_-J-xgxkvoltT",
      accounts: [PRIVATE_KEY],
    },
  },
}
