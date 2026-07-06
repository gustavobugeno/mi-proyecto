function FavoritesPanel({ favorites, removeFavorite }) {
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
      <h2 style={{ color: "#ffd700", borderBottom: "1px solid #333", paddingBottom: "5px" }}>
        ⭐ Favoritos
      </h2>

      {favorites.length === 0 && <p style={{ color: "#aaa" }}>No hay favoritos.</p>}

      {favorites.map((fav) => (
        <div
          key={fav.id}
          style={{
            marginBottom: "10px",
            padding: "8px",
            background: "#222",
            borderRadius: "6px",
          }}
        >
          <p style={{ margin: "0 0 5px 0" }}>{fav.title}</p>
          <button
            onClick={() => removeFavorite(fav.id)}
            style={{
              background: "#444",
              color: "#fff",
              border: "none",
              padding: "5px 10px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Quitar
          </button>
        </div>
      ))}
    </div>
  );
}

export default FavoritesPanel;
