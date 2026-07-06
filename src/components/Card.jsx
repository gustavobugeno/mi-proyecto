function Card({ item, addFavorite, blockItem }) {
  return (
    <div
      className="card"
      style={{
        border: "1px solid #333",
        padding: "15px",
        borderRadius: "10px",
        width: "250px",
        background: "#1a1a1a",
        color: "white",
        boxShadow: "0 0 10px rgba(255,255,255,0.1)",
      }}
    >
      <img
        src={item.image}
        alt={item.title}
        style={{
          width: "100%",
          borderRadius: "10px",
          marginBottom: "10px",
        }}
      />

      <h3 style={{ marginBottom: "8px", color: "#ffd700" }}>
        {item.title}
      </h3>

      <p><strong>Director:</strong> {item.director}</p>
      <p><strong>Año:</strong> {item.release_date}</p>

      <div style={{ marginTop: "10px" }}>
        <button
          onClick={() => addFavorite(item)}
          style={{
            marginRight: "10px",
            background: "#444",
            color: "white",
            border: "none",
            padding: "6px 12px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          ⭐ Favorito
        </button>

        <button
          onClick={() => blockItem(item)}
          style={{
            background: "#f55",
            color: "white",
            border: "none",
            padding: "6px 12px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          🚫 Bloquear
        </button>
      </div>
    </div>
  );
}

export default Card;
