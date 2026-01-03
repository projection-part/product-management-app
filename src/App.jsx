import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { initialProducts } from "./data/initialProducts";
import SearchBar from "./components/SearchBar";
import ViewToggle from "./components/ViewToggle";
import ProductTable from "./components/ProductTable";
import ProductCard from "./components/ProductCard";
import ProductForm from "./components/ProductForm";
import Pagination from "./components/Pagination";

export default function App() {
  const [products, setProducts] = useState(initialProducts);
  const [view, setView] = useState("table");
  const [search, setSearch] = useState("");
  const [editing, setEditing] = useState(null);
  const [page, setPage] = useState(1);

  const perPage = 5;

  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProducts.length / perPage);

  const visibleProducts = filteredProducts.slice(
    (page - 1) * perPage,
    page * perPage
  );

  const saveProduct = (product) => {
    if (product.id) {
      setProducts(products.map(p => p.id === product.id ? product : p));
    } else {
      setProducts([...products, { ...product, id: Date.now() }]);
    }
    setEditing(null);
  };

  return (
  <div className="app-container">
    <h1>Product Management</h1>

    <div className="top-bar">
      <SearchBar onSearch={setSearch} />
      <ViewToggle view={view} setView={setView} />
    </div>

    <div className="content">
      <div className="form-section">
        <ProductForm onSave={saveProduct} editing={editing} />
      </div>

      <div className="list-section">
        {view === "table"
          ? <ProductTable products={visibleProducts} onEdit={setEditing} />
          : <ProductCard products={visibleProducts} onEdit={setEditing} />}

        <Pagination
          totalPages={totalPages}
          currentPage={page}
          setPage={setPage}
        />
      </div>
    </div>
  </div>
);

}
