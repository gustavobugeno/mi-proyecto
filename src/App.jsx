import { useState, useEffect } from "react";
import { useFetch } from "./hooks/useFetch";
import List from "./components/List";
import SearchBar from "./components/SearchBar";
import FavoritesPanel from "./components/FavoritesPanel";
import BlockedPanel from "./components/BlockedPanel";

function App() {
  const { data, loading, error } = useFetch("https://ghibliapi.vercel.app/films");

  const [searchTerm, setSearchTerm] = useState("");

  // ⭐ FAVORITOS con persistencia
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // ⭐ BLOQUEADOS con persistencia
  const [blocked, setBlocked] = useState(() => {
    const saved = localStorage.getItem("blocked");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("blocked", JSON.stringify(blocked));
  }, [blocked]);

  if (loading) return <p>Cargando películas...</p>;
  if (error) return <p>Error al cargar API: {error}</p>;

  // FILTRO POR BUSQUEDA
  let filtered = data.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // EXCLUIR BLOQUEADOS
  filtered = filtered.filter((item) => !blocked.some((b) => b.id === item.id));

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
    if (!blocked.some((b) => b.id === item.id)) {
      setBlocked([...blocked, item]);
    }

    // Si está en favoritos → eliminarlo
    removeFavorite(item.id);
  };

  const unblockItem = (id) => {
    setBlocked(blocked.filter((b) => b.id !== id));
  };

  // ⭐ AJUSTE VISUAL AQUÍ
  // Este contenedor principal define la distribución de los paneles
  // Puedes modificar los porcentajes para ajustar el ancho de cada sección
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: "20px",
        alignItems: "flex-start",
      }}
    >
      <div style={{ width: "60%" }}>
        <h1>Studio Ghibli</h1>

        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <List items={filtered} addFavorite={addFavorite} blockItem={blockItem} />
      </div>

      <FavoritesPanel favorites={favorites} removeFavorite={removeFavorite} />

      <BlockedPanel blocked={blocked} unblockItem={unblockItem} />
    </div>
  );
}

export default App;
