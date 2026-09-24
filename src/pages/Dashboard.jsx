import Sidebar from '../components/Sidebar';

const Dashboard = () => (
  <div className="flex">
    <Sidebar />
    <main className="flex-1 p-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to your Portfolio CMS</h1>
      <p className="text-gray-600">Use the sidebar to manage your content.</p>
    </main>
  </div>
);

export default Dashboard;