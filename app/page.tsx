"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { ADD_COUNTER } from "@/redux/counterActionType";
import "../style/styles.scss";
import { Header } from "./header";
import { DataListComponent } from "./dataListComponent";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [filter, setFilter] = useState("");

  return (
    <div className="home">
      <div className="home__wrapper">
        <Header filter={filter} setFilter={setFilter} />
        <DataListComponent filter={filter} />
      </div>
    </div>
  );
}
