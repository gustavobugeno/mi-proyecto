import { useState } from "react";
import { useFetch } from "./hooks/useFetch";
import List from "./components/List";
import SearchBar from "./components/SearchBar";
import FavoritesPanel from "./components/FavoritesPanel";
import BlockedPanel from "./components/BlockedPanel";

function App() {
  const { data, loading, error } = useFetch("https://ghibliapi.vercel.app/films");

  const [searchTerm, setSearchTerm] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [blocked, setBlocked] = useState([]);

  if (loading) return <p>Cargando películas...</p>;
  if (error) return <p>Error al cargar API: {error}</p>;

  // FILTRO POR BUSQUEDA
  let filtered = data.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // EXCLUIR BLOQUEADOS
  filtered = filtered.filter((item) => !blocked.includes(item.id));

  // FAVORITOS
  const addFavorite = (item) => {
    if (!favorites.some((fav) => fav.id === item.id)) {
      setFavorites([...favorites, item]);
    }
  };

  const removeFavorite = (id) => {
    setFavorites(favorites.filter((fav) => fav.id !== id));
  };

  // BLOQUEADOS
  const blockItem = (item) => {
    if (!blocked.includes(item.id)) {
      setBlocked([...blocked, item.id]);
    }

    // Si está en favoritos → eliminarlo
    removeFavorite(item.id);
  };

  const unblockItem = (id) => {
    setBlocked(blocked.filter((b) => b !== id));
  };

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <div style={{ width: "60%" }}>
        <h1>Studio Ghibli</h1>

        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <List
          items={filtered}
          addFavorite={addFavorite}
          blockItem={blockItem}
        />
      </div>

      <FavoritesPanel favorites={favorites} removeFavorite={removeFavorite} />

      <BlockedPanel blocked={blocked} unblockItem={unblockItem} />
    </div>
  );
}

export default App;
