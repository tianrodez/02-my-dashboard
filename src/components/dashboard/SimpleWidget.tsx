import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Separator } from "../ui/separator";
import Link from "next/link";
import { Button } from "../ui/button";
import React from "react";

interface SimpleWidgetProps {
  title: string;
  subTitle?: string;
  label?: string;
  icon?: React.ReactNode;
  href?: string;
}

export const SimpleWidget = ({
  title,
  subTitle,
  label,
  icon,
  href,
}: SimpleWidgetProps) => {
  return (
    <Card className="min-w-[25%]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {subTitle && <CardDescription>{subTitle}</CardDescription>}
      </CardHeader>
      <CardContent className="w-full flex items-center justify-center gap-2">
        {icon && icon}
        {label && <span>{label}</span>}
      </CardContent>
      {href && (
        <>
          <Separator />
          <CardFooter className="flex items-center justify-end">
            <Button variant={"link"}>
              <Link href={href}>Más</Link>
            </Button>
          </CardFooter>
        </>
      )}
    </Card>
  );
};
