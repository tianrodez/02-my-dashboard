"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface CartCounterProps {
  value?: number;
}

export const CartCounter = ({ value = 0 }: CartCounterProps) => {
  const [count, setCount] = useState(value);
  return (
    <>
      <span className="font-bold text-3xl">{count}</span>
      <div className="flex gap-2 items-center justify-center">
        <Button onClick={() => setCount(count + 1)}>
          +1
        </Button>
        <Button variant={"outline"} onClick={() => setCount(count - 1)}>
          -1
        </Button>
      </div>
    </>
  );
};
