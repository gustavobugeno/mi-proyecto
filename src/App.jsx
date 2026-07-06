import { useState } from "react";
import { useFetch } from "./hooks/useFetch";
import List from "./components/List";
import SearchBar from "./components/SearchBar";
import FavoritesPanel from "./components/FavoritesPanel";

function App() {
  const { data, loading, error } = useFetch("https://ghibliapi.vercel.app/films");
  const [searchTerm, setSearchTerm] = useState("");
  const [favorites, setFavorites] = useState([]);

  if (loading) return <p>Cargando películas...</p>;
  if (error) return <p>Error al cargar API: {error}</p>;

  const filtered = data.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addFavorite = (item) => {
    if (!favorites.some((fav) => fav.id === item.id)) {
      setFavorites([...favorites, item]);
    }
  };

  const removeFavorite = (id) => {
    setFavorites(favorites.filter((fav) => fav.id !== id));
  };

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <div style={{ width: "70%" }}>
        <h1>Studio Ghibli</h1>

        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <List items={filtered} addFavorite={addFavorite} />
      </div>

      <FavoritesPanel favorites={favorites} removeFavorite={removeFavorite} />
    </div>
  );
}

export default App;
