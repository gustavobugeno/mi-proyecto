import { useFetch } from "./hooks/useFetch";
import List from "./components/List";

function App() {
  const { data, loading, error } = useFetch("https://ghibliapi.vercel.app/films");

  if (loading) return <p>Cargando películas...</p>;
  if (error) return <p>Error al cargar API: {error}</p>;

  return (
    <div>
      <h1>Studio Ghibli</h1>
      <List items={data} />
    </div>
  );
}

export default App;
