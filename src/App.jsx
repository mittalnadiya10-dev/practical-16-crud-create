import React, { useState } from 'react';

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Mechanical Gaming Keyboard', category: 'Accessories', price: 3499, stock: 12 },
    { id: 2, name: 'Ergonomic Office Chair', category: 'Furniture', price: 8999, stock: 5 }
  ]);

  const [newProduct, setNewProduct] = useState({
    name: '',
    category: 'Electronics',
    price: '',
    stock: ''
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setNewProduct((prev) => ({ ...prev, [name]: value }));
  }

  function handleAddProduct(e) {
    e.preventDefault();
    if (!newProduct.name || !newProduct.price) return;

    const item = {
      id: Date.now(),
      name: newProduct.name,
      category: newProduct.category,
      price: Number(newProduct.price),
      stock: Number(newProduct.stock) || 1
    };

    setProducts([item, ...products]);
    setNewProduct({ name: '', category: 'Electronics', price: '', stock: '' });
  }

  return (
    <div className="min-h-screen bg-slate-100 p-8 font-sans">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h1 className="text-2xl font-bold text-slate-900 mb-1">Product Management: Create Operation</h1>
          <p className="text-xs text-slate-500 mb-6">Unit 5 CRUD: Enter details to add a new product record.</p>

          <form onSubmit={handleAddProduct} className="grid grid-cols-1 md:grid-cols-4 gap-3">
            <input
              type="text"
              name="name"
              required
              placeholder="Product Name"
              value={newProduct.name}
              onChange={handleChange}
              className="p-2.5 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
            <select
              name="category"
              value={newProduct.category}
              onChange={handleChange}
              className="p-2.5 border border-slate-300 rounded-lg text-sm bg-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            >
              <option value="Electronics">Electronics</option>
              <option value="Accessories">Accessories</option>
              <option value="Furniture">Furniture</option>
              <option value="Stationery">Stationery</option>
            </select>
            <input
              type="number"
              name="price"
              required
              placeholder="Price (₹)"
              value={newProduct.price}
              onChange={handleChange}
              className="p-2.5 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-indigo-700 hover:bg-indigo-800 text-white font-semibold py-2.5 px-4 rounded-lg text-sm transition"
            >
              + Add Product
            </button>
          </form>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h2 className="text-lg font-bold text-slate-900 mb-4">Inventory List ({products.length})</h2>
          <div className="divide-y divide-slate-100">
            {products.map((p) => (
              <div key={p.id} className="py-3 flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-slate-900 text-sm">{p.name}</h3>
                  <span className="text-xs text-slate-500">{p.category}</span>
                </div>
                <div className="text-right">
                  <span className="font-bold text-indigo-700 text-sm">₹{p.price}</span>
                  <span className="block text-[11px] text-slate-400">Qty: {p.stock}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
