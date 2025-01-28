'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LabMenu = () => {
  const pathname = usePathname();
  console.log(pathname);

  const menuItems = [
    { href: '/lab/missions', label: 'Missions' },
    { href: '/lab/tools', label: 'Tools' },
    { href: '/lab/invent', label: 'Invent' },
  ];

  return (
    <nav className="flex gap-8">
      {menuItems.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`relative text-h3 font-bold ${
              isActive ? 'text-white' : 'text-[#929290] hover:text-white'
            } transition-colors duration-200`}
          >
            {item.label}
            <div
              className={`absolute -bottom-2 left-0 right-0 h-[3px] rounded-37 bg-color-primary-linear transition-opacity duration-200 ${
                isActive ? 'opacity-100' : 'opacity-0 hover:opacity-100'
              }`}
            />
          </Link>
        );
      })}
    </nav>
  );
};

export default LabMenu;
