function BlockedPanel({ blocked, unblockItem }) {
  return (
    <div style={{ width: "20%", background: "#fee", padding: "10px" }}>
      <h2>🚫 Bloqueados</h2>

      {blocked.length === 0 && <p>No hay bloqueados.</p>}

      {blocked.map((id) => (
        <div key={id} style={{ marginBottom: "10px" }}>
          <p>ID: {id}</p>
          <button onClick={() => unblockItem(id)}>Desbloquear</button>
        </div>
      ))}
    </div>
  );
}

export default BlockedPanel;
