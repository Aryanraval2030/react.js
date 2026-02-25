export default function Fiction() {
  return (
    <div>
      <h1></h1>

      <div
        className="books-container"
        style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}
      >
        {/* Map all Fictional Books here */}
      </div>
    </div>
  );
}
