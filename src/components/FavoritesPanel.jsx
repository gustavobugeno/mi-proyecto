function FavoritesPanel({ favorites, removeFavorite }) {
  return (
    <div className="panel">
      <h2 className="panel-title" style={{ color: "#ffd700" }}>
        ⭐ Favoritos
      </h2>

      {favorites.length === 0 && (
        <p className="panel-empty">No hay favoritos.</p>
      )}

      {favorites.map((fav) => (
        <div key={fav.id} className="panel-item">
          <p>{fav.title}</p>
          <button onClick={() => removeFavorite(fav.id)} className="panel-btn">
            Quitar
          </button>
        </div>
      ))}
    </div>
  );
}

export default FavoritesPanel;
