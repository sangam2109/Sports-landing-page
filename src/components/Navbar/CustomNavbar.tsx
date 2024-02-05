/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { NavItems } from "../../contanst";

const CustomNavbar = ({setSelectedCard}:any) => {
    const [isMenuOpen, setIsMenuOpen] = React.useReducer(
      (current) => !current,
      false
    );
    return (
      <Navbar
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        className="bg-dark text-white"
        isBordered
      >
        <NavbarContent >
          <NavbarBrand>
            <Image src={GndecAthletix} width={45} />
            <p className="font-bold text-inherit ml-4">GNDEC ATHLETIX</p>
          </NavbarBrand>
          <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="sm:hidden"
          />
        </NavbarContent>

        <NavbarContent
          className="hidden sm:flex gap-8 bg-[#111827]  "
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
              style={{cursor:'pointer'}}
              onClick={()=>{setSelectedCard(1);document.getElementById('EventListCont')?.scrollIntoView({behavior:'smooth', block:'center'})}}
              aria-current="page"
            >
              How to Register
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              color="foreground"
              className="text-inherit"
              style={{cursor:'pointer'}}
              onClick={()=>{setSelectedCard(2);document.getElementById('EventListCont')?.scrollIntoView({behavior:'smooth', block:'center'})}}
              aria-current="page"
            >
              Events
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              color="foreground"
              className="text-inherit"
              href="#DevTeam"
              aria-current="page"
            >
              Dev Team
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" className="text-inherit" href="https://docs.google.com/forms/d/1_Iwr8IrmGebCCm94TL-mWa3H4MjsUPdswBs5sGd-KZ0/edit">
              Contact Us
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu className="bg-dark">
          <NavbarMenuItem>
            {NavItems.Items.map((item) => {
              return (
                <Link
                  key={item.key}
                  className="text-white mt-4 block text-center"
                  href={item.href}
                  style={{cursor:'pointer'}}
                  onClick={()=>{
                    if(item.key == "2"){
                      setSelectedCard(1);document.getElementById('EventListCont')?.scrollIntoView({behavior:'smooth', block:'center'})
                    }
                    if(item.key == "3"){
                      setSelectedCard(2);document.getElementById('EventListCont')?.scrollIntoView({behavior:'smooth', block:'center'})
                    }
                  }}
                  size="lg"
                  onPress={() => setIsMenuOpen()}
                >
                  {item.heading}
                </Link>
              );
            })}
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    );
  };

 
export default CustomNavbar;
