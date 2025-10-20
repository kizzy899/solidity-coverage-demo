import * as dotenv from "dotenv";
dotenv.config();

import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "solidity-coverage";
import "hardhat-gas-reporter";

const config: HardhatUserConfig = {
  solidity: { 
    version: "0.8.24", 
    settings: { 
      optimizer: { 
        enabled: true, 
        runs: 200 
      } 
    } 
  },
  networks: {
    localhost: { 
      url: "http://127.0.0.1:8545" 
    },
    sepolia: {
      url: process.env.SEPOLIA_RPC1 || "https://eth-sepolia.public.blastapi.io", // 提供默认 RPC
      accounts: process.env.PRIVATE_KEY1 ? [process.env.PRIVATE_KEY1] : [], // 检查是否存在
      chainId: 11155111
    }
  },
  etherscan: { 
    apiKey: process.env.ETHERSCAN_KEY || "your-etherscan-key" // 提供默认值
  },
  gasReporter: { 
    enabled: process.env.REPORT_GAS === "true", 
    currency: "USD",
    gasPrice: 21,
    outputFile: "gas-report.txt",
    onlyCalledMethods: false,
  },
};

export default config;