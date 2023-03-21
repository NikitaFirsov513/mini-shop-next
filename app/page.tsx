"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { ADD_COUNTER } from "@/redux/counterActionType";
import "../style/styles.scss";
import { Header } from "./header";
import { DataListComponent } from "./dataListComponent";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const count = useAppSelector((state) => state.counter.count);
  const data = useAppSelector((state) => state.dataList.data);
  //console.log(data)
  const dispatch = useAppDispatch();

  const addAction = () => {
    dispatch({
      type: ADD_COUNTER,
      payload: ADD_COUNTER,
    });
  };

  return (
    <div className="home">
      <div className="home__wrapper">
        <Header />
        <DataListComponent />
      </div>
    </div>
  );
}
