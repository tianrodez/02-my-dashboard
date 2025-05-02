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

export interface CounterResponse {
  count: number;
}

const getApiCounter = async (): Promise<CounterResponse> => {
  const data = await fetch("/api/counter").then((res) => res.json());
  // return data as CounterResponse; si no tipamos lo que devuelve la funcion
  return data;
};

export const CartCounter = ({ value = 0 }: CartCounterProps) => {
  const count = useAppSelector((state: RootState) => state.counter.value);
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(initCounterState(value));
  // }, [dispatch, value]);

  useEffect(() => {
    getApiCounter().then(({ count }) => dispatch(initCounterState(count)));
  }, [dispatch]);

  return (
    <>
      <span className="font-bold text-3xl">{count ? count : value}</span>
      <div className="flex gap-2 items-center justify-center">
        <Button onClick={() => dispatch(increment())}>+1</Button>
        <Button variant={"outline"} onClick={() => dispatch(decrement())}>
          -1
        </Button>
      </div>
    </>
  );
};
