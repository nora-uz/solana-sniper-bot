import dotenv from "dotenv";

dotenv.config();

export const config = {
  heliusApiKey: process.env.HELIUS_API_KEY!,
  rpcEndpoint: process.env.RPC_ENDPOINT!,
  walletPrivateKey: process.env.WALLET_PRIVATE_KEY!,
};
