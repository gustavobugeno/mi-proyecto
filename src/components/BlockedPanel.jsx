function BlockedPanel({ blocked, unblockItem }) {
  return (
    <div className="panel">
      <h2 className="panel-title" style={{ color: "#ff5555" }}>
        🚫 Bloqueados
      </h2>

      {blocked.length === 0 && (
        <p className="panel-empty">No hay bloqueados.</p>
      )}

      {blocked.map((item) => (
        <div key={item.id} className="panel-item">
          <p>{item.title}</p>
          <button onClick={() => unblockItem(item.id)} className="panel-btn">
            Desbloquear
          </button>
        </div>
      ))}
    </div>
  );
}

export default BlockedPanel;
