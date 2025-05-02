"use client";
import { RootState, useAppSelector } from "@/store";
import { SimpleWidget } from "./SimpleWidget";
import { TbHandClick } from "react-icons/tb";

export const WidgetsGrid = () => {
  const count = useAppSelector((state: RootState) => state.counter.value);

  return (
    <div className="flex flex-wrap gap-2 items-center justify-center">
      <SimpleWidget
        title={"Counter"}
        subTitle={"Component"}
        label={`${count}`}
        icon={<TbHandClick />}
        href={"/dashboard/counter"}
      />
    </div>
  );
};
