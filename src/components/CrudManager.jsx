import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api/axios';
import Sidebar from './Sidebar';
import { contentTypes } from '../config/contentTypes';

const emptyForm = (fields) =>
  fields.reduce((acc, f) => {
    acc[f.name] = f.type === 'checkbox' ? false : f.type === 'tags' ? [] : '';
    return acc;
  }, {});

const CrudManager = () => {
  const { type } = useParams();
  const config = contentTypes[type];
  const [items, setItems] = useState([]);
  const [form, setForm] = useState(emptyForm(config.fields));
  const [editingId, setEditingId] = useState(null);

  const load = async () => {
    const { data } = await api.get(config.endpoint);
    if (config.singleton) {
      setForm({ ...emptyForm(config.fields), ...data });
    } else {
      setItems(data);
    }
  };

  useEffect(() => {
    setForm(emptyForm(config.fields));
    setEditingId(null);
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);

  const handleChange = (field, value) => setForm({ ...form, [field]: value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (config.singleton) {
      await api.put(config.endpoint, form);
    } else if (editingId) {
      await api.put(`${config.endpoint}/${editingId}`, form);
    } else {
      await api.post(config.endpoint, form);
    }
    setEditingId(null);
    setForm(emptyForm(config.fields));
    load();
  };

  const handleEdit = (item) => {
    setEditingId(item._id);
    setForm(item);
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this item?')) return;
    await api.delete(`${config.endpoint}/${id}`);
    load();
  };

  const renderField = (field) => {
    const value = form[field.name] ?? '';
    if (field.type === 'textarea') {
      return (
        <textarea className="w-full border p-2 rounded" rows={4} value={value}
          onChange={(e) => handleChange(field.name, e.target.value)} />
      );
    }
    if (field.type === 'checkbox') {
      return (
        <input type="checkbox" checked={!!value}
          onChange={(e) => handleChange(field.name, e.target.checked)} />
      );
    }
    if (field.type === 'tags') {
      return (
        <input className="w-full border p-2 rounded" placeholder="comma,separated,tags"
          value={Array.isArray(value) ? value.join(',') : value}
          onChange={(e) => handleChange(field.name, e.target.value.split(',').map((s) => s.trim()))} />
      );
    }
    return (
      <input
        type={field.type === 'date' ? 'date' : field.type === 'number' ? 'number' : 'text'}
        className="w-full border p-2 rounded"
        value={field.type === 'date' && value ? String(value).slice(0, 10) : value}
        onChange={(e) => handleChange(field.name, e.target.value)}
      />
    );
  };

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6">Manage {config.label}</h1>

        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow mb-8 space-y-4 max-w-xl">
          {config.fields.map((f) => (
            <div key={f.name}>
              <label className="block text-sm font-medium mb-1 capitalize">{f.name}</label>
              {renderField(f)}
            </div>
          ))}
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            {config.singleton ? 'Save' : editingId ? 'Update' : 'Create'}
          </button>
        </form>

        {!config.singleton && (
          <div className="space-y-3">
            {items.map((item) => (
              <div key={item._id} className="bg-white p-4 rounded shadow flex justify-between items-center">
                <span>{item[config.fields[0].name] || item._id}</span>
                <div className="space-x-2">
                  <button onClick={() => handleEdit(item)} className="text-blue-600">Edit</button>
                  <button onClick={() => handleDelete(item._id)} className="text-red-600">Delete</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default CrudManager;