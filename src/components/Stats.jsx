function Stats({ data, favorites, blocked }) {
  return (
    <div className="stats">
      <p>Total: {data.length}</p>
      <p>Favoritos: {favorites.length}</p>
      <p>Bloqueados: {blocked.length}</p>
    </div>
  );
}

export default Stats;
