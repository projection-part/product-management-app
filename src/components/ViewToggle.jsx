export default function ViewToggle({ view, setView }) {
  return (
    <button onClick={() => setView(view === "table" ? "card" : "table")}>
      Switch to {view === "table" ? "Card" : "Table"}
    </button>
  );
}
