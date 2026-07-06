import { useState } from "react";
import { useFetch } from "./hooks/useFetch";
import List from "./components/List";
import SearchBar from "./components/SearchBar";

function App() {
  const { data, loading, error } = useFetch("https://ghibliapi.vercel.app/films");
  const [searchTerm, setSearchTerm] = useState("");

  if (loading) return <p>Cargando películas...</p>;
  if (error) return <p>Error al cargar API: {error}</p>;

  const filtered = data.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Studio Ghibli</h1>

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <List items={filtered} />
    </div>
  );
}

export default App;
