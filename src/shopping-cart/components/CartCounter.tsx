"use client";
import { Button } from "@/components/ui/button";
import { RootState, useAppDispatch, useAppSelector } from "@/store";
import {
  decrement,
  increment,
  initCounterState,
} from "@/store/counter/counterSlice";
import { useEffect } from "react";

interface CartCounterProps {
  value?: number;
}

export const CartCounter = ({ value = 0 }: CartCounterProps) => {
  const count = useAppSelector((state: RootState) => state.counter.value);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initCounterState(value));
  }, [dispatch, value]);

  return (
    <>
      <span className="font-bold text-3xl">{count}</span>
      <div className="flex gap-2 items-center justify-center">
        <Button onClick={() => dispatch(increment())}>+1</Button>
        <Button variant={"outline"} onClick={() => dispatch(decrement())}>
          -1
        </Button>
      </div>
    </>
  );
};
