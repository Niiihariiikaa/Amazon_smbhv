import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Package, 
  FileText, 
  ShoppingCart, 
  TrendingUp,
  Ship,
  HelpCircle,
  User,
  MessageSquare,
  PanelLeftClose,
  PanelLeftOpen
} from 'lucide-react';

const Navigation = ({ isCollapsed, onCollapse }) => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const navItems = [
    { path: '/', icon: LayoutDashboard, text: 'Dashboard' },
    { path: '/inventory', icon: Package, text: 'Inventory' },
    { path: '/documents', icon: FileText, text: 'Documents' },
    { path: '/orders', icon: ShoppingCart, text: 'Orders' },
    { path: '/shipments', icon: Ship, text: 'Shipments' },
    { path: '/messages', icon: MessageSquare, text: 'Messages' },
    { path: '/analytics', icon: TrendingUp, text: 'Analytics' },
    { path: '/help', icon: HelpCircle, text: 'Help' },
    { path: '/account', icon: User, text: 'Account' }
  ];

  return (
    <nav className={`fixed h-full ${isCollapsed ? 'w-20' : 'w-64'} bg-[#232F3E] text-white p-4 transition-all duration-300 ease-in-out`}>
      <div className="flex items-center justify-between mb-8">
        <div className={`flex items-center ${isCollapsed ? 'justify-center w-full' : ''}`}>
          <img src="/cargo-logo.svg" alt="Cargo Connect Logo" className="h-8" />
          {!isCollapsed && <span className="ml-2 text-lg font-semibold">Cargo Connect</span>}
        </div>
        {!isCollapsed && (
          <button
            onClick={() => onCollapse(!isCollapsed)}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <PanelLeftClose className="h-5 w-5" />
          </button>
        )}
      </div>
      <div className="space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center ${isCollapsed ? 'justify-center' : ''} space-x-3 px-4 py-3 rounded-lg transition-colors ${
                isActive(item.path)
                  ? 'bg-[#FF9900] text-white'
                  : 'hover:bg-[#394759] text-gray-300'
              } group relative`}
            >
              <Icon className={`${isCollapsed ? 'h-6 w-6' : 'h-5 w-5'} transition-all duration-300`} />
              {!isCollapsed && <span className="ml-3">{item.text}</span>}
              {isCollapsed && (
                <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-50 shadow-lg">
                  {item.text}
                </div>
              )}
            </Link>
          );
        })}
      </div>
      {isCollapsed && (
        <button
          onClick={() => onCollapse(!isCollapsed)}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-white transition-colors"
        >
          <PanelLeftOpen className="h-5 w-5" />
        </button>
      )}
    </nav>
  );
};

export default Navigation;