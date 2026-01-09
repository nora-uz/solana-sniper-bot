import dotenv from 'dotenv';

dotenv.config();

export const config = {
  heliusApiKey: process.env.HELIUS_API_KEY || '',
  solanaSecretKey: process.env.SOLANA_SECRET_KEY || '',
  botEnabled: process.env.BOT_ENABLED === 'true',
  logLevel: process.env.LOG_LEVEL || 'info',
  
  // Trading parameters
  minLiquidity: 10000,
  minVolume24h: 500000,
  buyAmount: 0.1,
  sellProfit: 1.5,
  sellStopLoss: 0.8,
};
