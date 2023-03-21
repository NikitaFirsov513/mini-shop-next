"use client";
import { Dispatch, SetStateAction } from "react";

type THeaderProps = {
  filter: string;
  setFilter: (value: string) => void;
};

export const Header = ({ setFilter, filter }: THeaderProps) => {
  return (
    <div className="home__head">
      <input
        value={filter}
        placeholder="Enter name"
        onChange={(e) => setFilter(e.target.value)}
        type="text"
      />
    </div>
  );
};
