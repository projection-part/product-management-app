import { useEffect, useState } from "react";

export default function ProductForm({ onSave, editing }) {
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    stock: "",
    description: ""
  });

  const [error, setError] = useState("");

  useEffect(() => {
    if (editing) setForm(editing);
  }, [editing]);

  const handleSubmit = () => {
    if (!form.name || !form.price || !form.category) {
      setError("Name, Price & Category are required");
      return;
    }

    onSave(form);
    setForm({ name: "", price: "", category: "", stock: "", description: "" });
    setError("");
  };

  return (
    <div>
      <h3>{editing ? "Edit Product" : "Add Product"}</h3>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <input placeholder="Name" value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })} />

      <input type="number" placeholder="Price" value={form.price}
        onChange={(e) => setForm({ ...form, price: e.target.value })} />

      <input placeholder="Category" value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })} />

      <input type="number" placeholder="Stock" value={form.stock}
        onChange={(e) => setForm({ ...form, stock: e.target.value })} />

      <textarea placeholder="Description"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })} />

      <br />
      <button onClick={handleSubmit}>
        {editing ? "Update" : "Add"} Product
      </button>
    </div>
  );
}
