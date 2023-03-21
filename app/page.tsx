"use client";
import { Inter } from "next/font/google";
import "../style/styles.scss";
import { Header } from "./header";
import { DataListComponent } from "./dataListComponent";
import { useState } from "react";
import { CardElem } from "./cardElem";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [filter, setFilter] = useState("");

  return (
    <div className="home">
      <div className="home__wrapper">
        <Header filter={filter} setFilter={setFilter} />
        <DataListComponent filter={filter} />
      </div>
      <CardElem />
    </div>
  );
}
