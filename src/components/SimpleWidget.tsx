import { IoCafeOutline } from "react-icons/io5";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { Button } from "./ui/button";

export const SimpleWidget = () => {
  return (
    <Card className="min-w-[25%]">
      <CardHeader>
        <CardTitle>Contador</CardTitle>
        <CardDescription>Subtitulo</CardDescription>
      </CardHeader>
      <CardContent className="w-full flex items-center justify-center gap-2">
        <IoCafeOutline />
        <span>Titulo</span>
      </CardContent>
      <Separator />
      <CardFooter className="flex items-center justify-end">
        <Button variant={"link"}>
          <Link href={"/"}>Más</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
