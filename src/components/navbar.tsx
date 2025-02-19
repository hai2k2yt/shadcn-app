import React from 'react'

import Link from "next/link";
import Image from 'next/image';
import logo from '~/img/logo.png';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import ThemeToggler from "@/components/theme-toggler";

const Navbar = () => {
  return (
    <div className="bg-primary dark:bg-slate-700 text-white py-2 px-5 flex justify-between">
      <Link href='/'>
        <Image src={logo} alt='Test' width={40}/>
      </Link>
      <div className="flex items-center">
        <ThemeToggler/>
        <DropdownMenu>
          <DropdownMenuTrigger>Open</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator/>
            <DropdownMenuItem>
              <a href="/profile">Profile</a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href="/logout">Logout</a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>


    </div>
  )
}

export default Navbar;