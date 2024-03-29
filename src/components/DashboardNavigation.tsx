import {
  RocketLaunchIcon,
  CheckBadgeIcon,
  ClockIcon,
  FolderOpenIcon,
  Squares2X2Icon,
  CurrencyDollarIcon,
  FolderPlusIcon,
  ArchiveBoxIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react';

type NavItem = {
  name: string;
  icon: React.ElementType;
  href: string;
};

interface NavItemProp {
  item: NavItem;
}

function NavigationItemLink({ item }: NavItemProp) {
  return (
    <div key={item.name} className='mb-4'>
      <Link
        href={item.href}
        className='flex items-center gap-x-3  text-gray-500'
      >
        <item.icon className='h-5 w-5' />
        <span>{item.name}</span>
      </Link>
    </div>
  );
}

export default function DashboardNavigation() {
  const appRoutes: Array<NavItem> = [
    {
      name: 'Dashboard',
      icon: Squares2X2Icon,
      href: '/dashboard',
    },
    {
      name: 'Upload',
      icon: FolderPlusIcon,
      href: '/dashboard/upload',
    },
    {
      name: 'Pending',
      icon: ClockIcon,
      href: '/dashboard/pending',
    },
    {
      name: 'In Progress',
      icon: RocketLaunchIcon,
      href: '/dashboard/in-progress',
    },
    {
      name: 'Delivered',
      icon: CheckBadgeIcon,
      href: '/dashboard/delivered',
    },
    {
      name: 'Archived',
      icon: ArchiveBoxIcon,
      href: '/dashboard/archived',
    },
  ];

  const folders = [
    {
      name: 'My Files',
      icon: FolderOpenIcon,
      href: '/dashboard/my-files',
    },
    {
      name: 'Downloaded',
      icon: ArchiveBoxIcon,
      href: '/dashboard/downloaded',
    },
  ];

  const support = [
    {
      name: 'Contact Us',
      icon: Squares2X2Icon,
      href: '/dashboard/support',
    },
    {
      name: 'Billing',
      icon: CurrencyDollarIcon,
      href: '/dashboard/billing',
    },
  ];

  return (
    <div className='min-w-md px-6 py-5 border-r border-gray-300  min-h-screen'>
      {appRoutes.map((item) => (
        <NavigationItemLink key={item.name} item={item} />
      ))}
      <div className='border-t border-gray-200'>
        <div className='uppercase py-3 text-gray-600'>Folders</div>
      </div>
      {folders.map((item) => (
        <NavigationItemLink key={item.name} item={item} />
      ))}
      <div className='border-t border-gray-200'>
        <div className='uppercase py-3 text-gray-600'>Support</div>
      </div>
      {support.map((item) => (
        <NavigationItemLink key={item.name} item={item} />
      ))}
    </div>
  );
}
