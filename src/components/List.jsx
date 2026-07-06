import Card from "./Card";

function List({ items, addFavorite }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {items.map((item) => (
        <Card key={item.id} item={item} addFavorite={addFavorite} />
      ))}
    </div>
  );
}

export default List;
