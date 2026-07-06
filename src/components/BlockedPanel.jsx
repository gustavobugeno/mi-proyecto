function BlockedPanel({ blocked, unblockItem }) {
  return (
    <div
      style={{
        width: "20%",
        background: "#111",        // Fondo negro profundo
        color: "#fff",             // Texto blanco
        padding: "15px",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(255,255,255,0.1)", // Sombra suave
      }}
    >
      <h2 style={{ color: "#ff5555", borderBottom: "1px solid #333", paddingBottom: "5px" }}>
        🚫 Bloqueados
      </h2>

      {blocked.length === 0 && <p style={{ color: "#aaa" }}>No hay bloqueados.</p>}

      {blocked.map((item) => (
        <div
          key={item.id}
          style={{
            marginBottom: "10px",
            padding: "8px",
            background: "#222",
            borderRadius: "6px",
          }}
        >
          <p style={{ margin: "0 0 5px 0" }}>{item.title}</p>
          <button
            onClick={() => unblockItem(item.id)}
            style={{
              background: "#444",
              color: "#fff",
              border: "none",
              padding: "5px 10px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Desbloquear
          </button>
        </div>
      ))}
    </div>
  );
}

export default BlockedPanel;
