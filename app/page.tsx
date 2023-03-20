"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { ADD_COUNTER } from "@/redux/counterActionType";
import '../style/styles.scss'
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
    <div>
      {data.map((elem, index) => <h3 key={index}>{elem.name}</h3>)}
    </div>
  );
}
