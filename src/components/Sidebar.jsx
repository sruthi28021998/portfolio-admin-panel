import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const links = [
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/manage/about', label: 'About' },
  { to: '/manage/skills', label: 'Skills' },
  { to: '/manage/projects', label: 'Projects' },
  { to: '/manage/blogs', label: 'Blogs' },
  { to: '/manage/experience', label: 'Experience' },
  { to: '/manage/testimonials', label: 'Testimonials' },
  { to: '/manage/services', label: 'Services' },
  { to: '/messages', label: 'Messages' }
];

const Sidebar = () => {
  const { logout } = useAuth();
  return (
    <aside className="w-64 bg-gray-900 text-white min-h-screen p-4 flex flex-col">
      <h2 className="text-xl font-bold mb-6">CMS Admin</h2>
      <nav className="flex-1 space-y-2">
        {links.map((l) => (
          <Link key={l.to} to={l.to} className="block px-3 py-2 rounded hover:bg-gray-700">
            {l.label}
          </Link>
        ))}
      </nav>
      <button onClick={logout} className="bg-red-600 hover:bg-red-700 p-2 rounded">
        Logout
      </button>
    </aside>
  );
};

export default Sidebar;