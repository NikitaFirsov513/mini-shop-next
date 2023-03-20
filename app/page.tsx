"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { ADD_COUNTER } from "@/redux/counterActionType";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  const addAction = () => {
    dispatch({
      type: ADD_COUNTER,
      payload: ADD_COUNTER,
    });
  };

  return (
    <div>
      <button>-</button>
      <h1>{count}</h1>  
      <button onClick={() => addAction()}>+</button>
    </div>
  );
}
