import { useEffect, useState } from 'react';
import api from '../api/axios';
import Sidebar from '../components/Sidebar';

const Messages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    api.get('/contact').then((res) => setMessages(res.data));
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6">Contact Messages</h1>
        <div className="space-y-3">
          {messages.map((m) => (
            <div key={m._id} className="bg-white p-4 rounded shadow">
              <p className="font-semibold">{m.name} — {m.email}</p>
              <p className="text-sm text-gray-500">{m.subject}</p>
              <p className="mt-2">{m.message}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Messages;