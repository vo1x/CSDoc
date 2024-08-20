import { Link } from 'react-router-dom';

function NavItem({
  path,
  icon,
  isActive
}: {
  path: string;
  icon: React.ReactNode;
  isActive: boolean;
}) {
  return (
    <Link
      to={path}
      className={`flex flex-col items-center h-16 justify-center  ${isActive ? 'border-r border-[#FBF1C7]' : ''} w-20`}
    >
      <span>{icon}</span>
      {/* <div className="text-xl">{itemName}</div> */}
    </Link>
  );
}

export default NavItem;
