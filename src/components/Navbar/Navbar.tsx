import NavItem from './NavItem';
import { NotebookTabs, BookOpenText, LucideFolderRoot } from 'lucide-react';
import { useLocation } from 'react-router-dom';

function Navbar() {
  interface NavItemProps {
    name: string;
    path: string;
    icon?: React.ReactNode;
    active: boolean;
  }

  const navItems: NavItemProps[] = [
    { name: '/', path: '/', icon: <LucideFolderRoot />, active: true },
    { name: 'notes', path: '/notes', icon: <NotebookTabs />, active: false },
    { name: 'books', path: '/books', icon: <BookOpenText />, active: false }
  ];

  const location = useLocation();

  return (
    <div className="flex flex-col items-center justify-center h-screen border-r border-[#3C3836] w-max">
      <span></span>
      <div className="flex flex-col items-center justify-between">
        {navItems.map((item: NavItemProps) => (
          <NavItem path={item.path} icon={item.icon} isActive={item.path === location.pathname} />
        ))}
      </div>
    </div>
  );
}

export default Navbar;
