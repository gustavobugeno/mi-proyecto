function FavoritesPanel({ favorites, removeFavorite }) {
  return (
    <div style={{ width: "30%", background: "#eef", padding: "10px" }}>
      <h2>⭐ Favoritos</h2>

      {favorites.length === 0 && <p>No hay favoritos.</p>}

      {favorites.map((fav) => (
        <div key={fav.id} style={{ marginBottom: "10px" }}>
          <p>{fav.title}</p>
          <button onClick={() => removeFavorite(fav.id)}>Quitar</button>
        </div>
      ))}
    </div>
  );
}

export default FavoritesPanel;
