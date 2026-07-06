function Card({ item }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "15px",
        borderRadius: "10px",
        width: "250px",
        background: "#fafafa"
      }}
    >
      <img
        src={item.image}
        alt={item.title}
        style={{ width: "100%", borderRadius: "10px" }}
      />

      <h3>{item.title}</h3>
      <p><strong>Director:</strong> {item.director}</p>
      <p><strong>Año:</strong> {item.release_date}</p>
    </div>
  );
}

export default Card;
