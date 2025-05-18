import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Calendar, 
  ListChecks,
  BarChart4,
  Settings
} from 'lucide-react';

const Sidebar = () => {
  const navLinks = [
    { 
      name: 'Dashboard', 
      path: '/', 
      icon: <LayoutDashboard size={20} /> 
    },
    { 
      name: 'Solicitações', 
      path: '/requests', 
      icon: <ListChecks size={20} /> 
    },
    { 
      name: 'Calendário', 
      path: '/calendar', 
      icon: <Calendar size={20} /> 
    },
    { 
      name: 'Relatórios', 
      path: '/reports', 
      icon: <BarChart4 size={20} /> 
    },
    { 
      name: 'Configurações', 
      path: '/settings', 
      icon: <Settings size={20} /> 
    },
  ];

  return (
    <div className="bg-blue-600 text-white border-r border-blue-700 w-64 min-h-screen flex flex-col">
      <div className="p-4 border-b border-blue-700">
        <h1 className="text-xl font-bold">
          <span className="text-white"></span>Liferay Spaces
        </h1>
        <p className="text-xs text-blue-200">Painel Administrativo</p>
      </div>
      <nav className="flex-1 p-4 overflow-y-auto">
        <ul className="space-y-1">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink 
                to={link.path} 
                className={({ isActive }) => 
                  `flex items-center px-4 py-3 rounded-md transition-colors ${
                    isActive 
                      ? 'bg-blue-700 text-white font-medium' 
                      : 'text-blue-100 hover:bg-blue-700 hover:text-white'
                  }`
                }
              >
                <span className="mr-3">{link.icon}</span>
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4 border-t border-blue-700">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">
            A
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-white">Admin</p>
            <p className="text-xs text-blue-200">admin@empresa.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;