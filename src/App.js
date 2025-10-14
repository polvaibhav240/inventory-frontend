import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import DashboardCards from "./components/DashboardCards";
import ItemForm from "./components/ItemForm";
import ItemTable from "./components/ItemTable";

export default function App() {
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem("inventory-items");
    return saved ? JSON.parse(saved) : [];
  });

  const [editingItem, setEditingItem] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("inventory-items", JSON.stringify(items));
  }, [items]);

  const addItem = (item) => {
    if (editingItem) {
      setItems(
        items.map((i) => (i.id === editingItem.id ? { ...item, id: i.id } : i))
      );
      setEditingItem(null);
    } else {
      setItems([...items, { ...item, id: Date.now() }]);
    }
  };

  const deleteItem = (id) => {
    setItems(items.filter((i) => i.id !== id));
  };

  const clearAll = () => {
    if (window.confirm("Are you sure you want to clear all inventory?")) {
      setItems([]);
      localStorage.removeItem("inventory-items");
    }
  };

  const filteredItems = items.filter((i) =>
    i.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Manage Inventory</h1>

        <DashboardCards items={items} />

        <button className="clear-btn" onClick={clearAll}>
          🗑️ Clear All Inventory
        </button>

        <input
          type="text"
          placeholder="Search item..."
          className="search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <ItemForm addItem={addItem} editingItem={editingItem} />
        <ItemTable
          items={filteredItems}
          deleteItem={deleteItem}
          setEditingItem={setEditingItem}
        />
      </div>
    </div>
  );
}
