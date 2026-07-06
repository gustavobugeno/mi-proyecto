import { useState } from "react";
import { useFetch } from "./hooks/useFetch";

import SearchBar from "./components/SearchBar";
import List from "./components/List";
import FavoritesPanel from "./components/FavoritesPanel";
import BlockedPanel from "./components/BlockedPanel";
import Stats from "./components/Stats";

function App() {
  // Cargar API Ghibli
  const { data, loading, error } = useFetch("https://ghibliapi.vercel.app/films");

  // Estados globales
  const [searchTerm, setSearchTerm] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [blocked, setBlocked] = useState([]);

  // Filtrar películas
  const filtered = data
    .filter((item) => !blocked.includes(item.id)) // excluir bloqueados
    .filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  // Agregar favorito
  const addFavorite = (item) => {
    if (!favorites.some((fav) => fav.id === item.id)) {
      setFavorites([...favorites, item]);
    }
  };

  // Quitar favorito
  const removeFavorite = (id) => {
    setFavorites(favorites.filter((fav) => fav.id !== id));
  };

  // Bloquear película
  const blockItem = (item) => {
    if (!blocked.includes(item.id)) {
      setBlocked([...blocked, item.id]);

      // Si está en favoritos → eliminarlo automáticamente
      removeFavorite(item.id);
    }
  };

  // Desbloquear película
  const unblockItem = (id) => {
    setBlocked(blocked.filter((b) => b !== id));
  };

  // Estados de carga y error
  if (loading) return <p>Cargando películas...</p>;
  if (error) return <p>Error al cargar API: {error}</p>;

  return (
    <div className="app-container">
      <h1>Studio Ghibli</h1>

      {/* Barra de búsqueda */}
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {/* Estadísticas */}
      <Stats
        total={data.length}
        favs={favorites.length}
        blocked={blocked.length}
      />

      <div className="main-content" style={{ display: "flex", gap: "20px" }}>
        {/* Listado principal */}
        <List
          items={filtered}
          addFavorite={addFavorite}
          blockItem={blockItem}
        />

        {/* Panel de favoritos */}
        <FavoritesPanel
          favorites={favorites}
          removeFavorite={removeFavorite}
        />

        {/* Panel de bloqueados */}
        <BlockedPanel blocked={blocked} unblockItem={unblockItem} />
      </div>
    </div>
  );
}

export default App;
