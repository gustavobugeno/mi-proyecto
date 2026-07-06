import Card from "./Card";

function List({ items, addFavorite, blockItem }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {items.map((item) => (
        <Card
          key={item.id}
          item={item}
          addFavorite={addFavorite}
          blockItem={blockItem}
        />
      ))}
    </div>
  );
}

export default List;
