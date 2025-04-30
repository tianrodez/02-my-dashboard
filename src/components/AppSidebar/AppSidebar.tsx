import { MdDashboard, MdFavorite } from "react-icons/md";
import { TbHandClick } from "react-icons/tb";
import { MdCatchingPokemon } from "react-icons/md";
import { ToggleTheme } from "./ToggleTheme";
import { SidebarMenuItemData } from "./SidebarMenuItemData";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarTrigger,
} from "../ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const menuItems = [
  {
    icon: <MdDashboard className="text-xl" />,
    title: "Dashboard",
    description: "Data overview",
    path: "/dashboard/main",
  },
  {
    icon: <TbHandClick className="text-xl" />,
    title: "Counter",
    description: "Counter component",
    path: "/dashboard/counter",
  },
  {
    icon: <MdCatchingPokemon className="text-xl" />,
    title: "Pokemons",
    description: "A static pokemons list",
    path: "/dashboard/pokemons",
  },
  {
    icon: <MdFavorite />,
    title: "Favorites",
    description: "Favorite pokemons list",
    path: "/dashboard/favorites",
  },
];

export const AppSidebar = () => {
  return (
    <Sidebar collapsible="icon" variant="floating">
      <SidebarHeader>
        <SidebarTrigger />
        <Avatar className="rounded-lg h-8 w-8">
          <AvatarImage
            src="https://external-preview.redd.it/dB8kv_2ZGu4nI0MBXQBAB9C7uCMUi0rkDPwgZRSHqZo.png?auto=webp&s=41ae68953f723d0d77c76f869ae9d73cb9f43c57"
            alt="User image"
          />
          <AvatarFallback className="rounded-lg">SC</AvatarFallback>
        </Avatar>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item, index) => (
                <SidebarMenuItemData key={index} {...item} />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="flex">
        <ToggleTheme />
      </SidebarFooter>
    </Sidebar>
  );
};
