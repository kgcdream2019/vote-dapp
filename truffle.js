
require('dotenv').config();
var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = process.env["MNEMONIC"];
var infuraProjectId = process.env["INFURA_PROJECT_ID"];

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 9545,
      network_id: "*" // Match any network id
    },
    // Useful for deploying to a public network.
    // NB: It's important to wrap the provider as a function.
    ropsten: {
      provider: () => new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/" + infuraProjectId),
      network_id: 3,       // Ropsten's id
      gas: 5500000,        // Ropsten has a lower block limit than mainnet
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },

    rinkeby: {
      host: "127.0.0.1",
      provider: function() {
        // Or, pass an array of private keys, and optionally use a certain subset of addresses
        var privateKeys = [
          "8008e5e33716a9c99374a45e6bf2c23a8c9ba419459e2e4e617538cdd243a68c",
          "af304e92e182d261623652e829206a6778e2ab0d6c04f4c364b52f3ef7eaaa56",
          "2d23fdc9f5e2f0545fa6d6df49b7257646447cf894279b8684b6adc26620d45d",
          "64774d80cf889dea461c3a19db922b5ff561e50a19dac4bb7410bacce2f49e64",
          
        ];
        return new HDWalletProvider(privateKeys, "https://rinkeby.infura.io/v3/" + infuraProjectId);
      },
      network_id: 4
      , gas : 6700000
      , gasPrice : 10000000000
    },
    kovan: {
      provider: function() {
        // Or, pass an array of private keys, and optionally use a certain subset of addresses
        var privateKeys = [
          "76251145F960F005B59369DF872BC99AEB9353920BF077FA6CFF870E1CD25A61",
        
        ];
        return new HDWalletProvider(privateKeys, "https://kovan.infura.io/v3/" + infuraProjectId);
      },
      network_id: 42
      , gas : 4700000
    },

    ganache: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    /////                          truffle migrate --network live
    live: {
      network_id: 1,
      host: "127.0.0.1",
      port: 8546   // Different than the default below
    },
  },
  // Docker
  compilers: {
    solc: {
      version: "0.4.24"   // Any published image name
    }
  }
};
