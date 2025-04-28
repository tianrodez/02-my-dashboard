import Image from "next/image";
import { MdDashboard } from "react-icons/md";
import { TbHandClick } from "react-icons/tb";
import { MdCatchingPokemon } from "react-icons/md";
import { SidebarMenuItem } from "./SidebarMenuItem";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { ToggleTheme } from "./ToggleTheme";

const menuItems = [
  {
    icon: <MdDashboard />,
    title: "Dashboard",
    description: "Data overview",
    path: "/dashboard/main",
  },
  {
    icon: <TbHandClick />,
    title: "Counter",
    description: "Counter component",
    path: "/dashboard/counter",
  },
  {
    icon: <MdCatchingPokemon />,
    title: "Pokemons",
    description: "A static pokemons list",
    path: "/dashboard/pokemons"
  }
];

export const Sidebar = () => {
  return (
    <Card className="sm:min-w-1/6">
      <CardHeader  className="flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <Image
            className="rounded-full w-10 h-10 relative object-cover"
            src="https://Image.freepik.com/free-photo/no-problem-concept-bearded-man-makes-okay-gesture-has-everything-control-all-fine-gesture-wears-spectacles-jumper-poses-against-pink-wall-says-i-got-this-guarantees-something_273609-42817.jpg"
            alt=""
            width={10}
            height={10}
          />

          <p className="">John Doe</p>
        </div>
        <ToggleTheme />
      </CardHeader>
      <CardContent>
        <div id="menu" className="flex flex-col space-y-2 my-5">
          {menuItems.map((item, index) => (
            <SidebarMenuItem key={index} {...item} />
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <p className="text-sm text-center text-gray-600">
          v1.0 | &copy; 2025 NextJs Course
        </p>
      </CardFooter>
    </Card>
  );
};
