import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link,  NavbarMenu, NavbarMenuItem, NavbarMenuToggle, Image} from "@nextui-org/react";
import GndecAthletix from '../../assets/favicon.png'
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-[#111827] text-[#ffffffe3]">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Image src={GndecAthletix} width={45  } />
          <p className="font-bold text-inherit ml-4">GNDEC ATHLETIX</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 bg-[#1118276e]" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" aria-current="page">
            Event
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground"  href="#" aria-current="page">
            Dev Team
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Contact Us
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="bg-[#1118276e] ">
        <NavbarMenuItem>
          <Link className="w-full text-[#ffffffe3] mt-4 block text-center " href="#" size="lg">
            Home
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="w-full text-[#ffffffe3] mt-4 block text-center" href="#" size="lg">
            Events
          </Link>
        </NavbarMenuItem>
         <NavbarMenuItem>
          <Link className="w-full text-[#ffffffe3] mt-4 block text-center" href="#" size="lg">
            Dev Team
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="w-full text-[#ffffffe3] mt-4 block text-center" href="#" size="lg">
            Contact Us
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
