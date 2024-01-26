import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Image,
} from "@nextui-org/react";
import GndecAthletix from "../../assets/favicon.png";

export default function CustomNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="bg-[#111827] text-[#ffffffe3]"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Image src={GndecAthletix} width={45} />
          <p className="font-bold text-inherit ml-4">GNDEC ATHLETIX</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex gap-8 bg-[#1118276e] "
        justify="center"
      >
        <NavbarItem>
          <Link className="text-inherit" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            className="text-inherit"
            href="#FAQ"
            aria-current="page"
          >
            Event
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            className="text-inherit"
            href="#"
            aria-current="page"
          >
            Dev Team
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" className="text-inherit" href="#">
            Contact Us
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="{bg-[#1118276e] {isNavbarOpen ? block : hidden )}">
        <NavbarMenuItem>
          <Link
            className="w-full text-[#ffffffe3] mt-4 block text-center "
            href="#"
            size="lg"
            
          >
            Home
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className="w-full text-[#ffffffe3] mt-4 block text-center"
            href="#FAQ"
            size="lg"
            
          >
            Events
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className="w-full text-[#ffffffe3] mt-4 block text-center"
            href="FAQ"
            size="lg"
            
          >
            Dev Team
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className="w-full text-[#ffffffe3] mt-4 block text-center"
            href="#"
            size="lg"
            
          >
            Contact Us
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
