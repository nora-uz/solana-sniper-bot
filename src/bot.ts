import { Connection, Keypair } from "@solana/web3.js";
import axios from "axios";
import { config } from "./config";
import * as bs58 from "bs58";

class SolanaSniperBot {
  private connection: Connection;
  private wallet: Keypair;
  private isRunning = false;

  constructor() {
    console.log("🤖 Initializing Solana Sniper Bot...");

    // Connect to Solana via Helius RPC
    this.connection = new Connection(
      `https://mainnet.helius-rpc.com/?api-key=${config.heliusApiKey}`,
      "confirmed"
    );

    // Load wallet from secret key
    try {
      const secretKeyBuffer = Buffer.from(config.walletPrivateKey, "utf-8");
      this.wallet = Keypair.fromSecretKey(new Uint8Array(secretKeyBuffer));
      console.log(`✅ Wallet loaded: ${this.wallet.publicKey.toString()}`);
    } catch (error) {
      throw new Error("❌ Error loading secret key. Check your env variables");
    }
  }

  async start() {
    // Если хочешь, можешь потом вернуть флаг из config.botEnabled
    this.isRunning = true;
    console.log("🚀 Bot started. Monitoring for new tokens...\n");

    // Monitor every second
    setInterval(() => this.monitorTokens(), 1000);
  }

  private async monitorTokens() {
    try {
      const timestamp = new Date().toLocaleTimeString();
      console.log(`[${timestamp}] Checking for new tokens...`);

      // Здесь потом добавим логику:
      // 1) запросы через axios к Helius
      // 2) фильтрация новых пулов
      // 3) отправка транзакций
    } catch (error) {
      console.error("❌ Monitoring error:", error);
    }
  }

  stop() {
    this.isRunning = false;
    console.log("❌ Bot stopped");
  }
}

// Start the bot
const bot = new SolanaSniperBot();

// Handle graceful shutdown
process.on("SIGINT", () => {
  bot.stop();
  process.exit(0);
});

// Run
bot.start().catch((error) => {
  console.error("💥 Critical error:", error);
  process.exit(1);
});
