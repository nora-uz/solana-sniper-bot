import React from "react";

const HomePage = () => {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
        background: "#020617",
        color: "#e5e7eb",
        padding: "24px",
      }}
    >
      <h1 style={{ fontSize: "32px", marginBottom: "12px" }}>
        Solana Sniper Bot
      </h1>
      <p
        style={{
          opacity: 0.8,
          marginBottom: "24px",
          textAlign: "center",
          maxWidth: 480,
        }}
      >
        Панель для мониторинга и настройки автоматического Solana sniper-бота
        на базе Helius RPC.
      </p>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "16px",
          width: "100%",
          maxWidth: "800px",
        }}
      >
        <div
          style={{
            borderRadius: "12px",
            padding: "16px",
            background: "rgba(15, 23, 42, 0.9)",
            border: "1px solid rgba(148, 163, 184, 0.2)",
          }}
        >
          <h2 style={{ fontSize: "18px", marginBottom: "8px" }}>Bot status</h2>
          <p style={{ fontSize: "14px", opacity: 0.8 }}>
            Сейчас: <span style={{ color: "#22c55e" }}>online (mock)</span>
          </p>
          <p
            style={{
              fontSize: "13px",
              opacity: 0.6,
              marginTop: "6px",
            }}
          >
            Позже сюда можно подключить реальный статус с сервера.
          </p>
        </div>

        <div
          style={{
            borderRadius: "12px",
            padding: "16px",
            background: "rgba(15, 23, 42, 0.9)",
            border: "1px solid rgba(148, 163, 184, 0.2)",
          }}
        >
          <h2 style={{ fontSize: "18px", marginBottom: "8px" }}>Last trades</h2>
          <ul
            style={{
              fontSize: "13px",
              opacity: 0.8,
              paddingLeft: "16px",
            }}
          >
            <li>• BUY 0.5 SOL → MEME123 (mock)</li>
            <li>• BUY 0.2 SOL → DOGE420 (mock)</li>
          </ul>
          <p
            style={{
              fontSize: "13px",
              opacity: 0.6,
              marginTop: "6px",
            }}
          >
            Здесь позже можно выводить реальные сделки из БД или логов.
          </p>
        </div>

        <div
          style={{
            borderRadius: "12px",
            padding: "16px",
            background: "rgba(15, 23, 42, 0.9)",
            border: "1px solid rgba(148, 163, 184, 0.2)",
          }}
        >
          <h2 style={{ fontSize: "18px", marginBottom: "8px" }}>Config</h2>
          <p
            style={{
              fontSize: "13px",
              opacity: 0.8,
            }}
          >
            Min liquidity, max slippage, auto-sell правила и др. можно будет
            менять прямо из веб-интерфейса.
          </p>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
