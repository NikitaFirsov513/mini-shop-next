"use client";

import { CARD_DELL } from "@/redux/card/cardActionTypes";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { TData } from "@/types/data.type";
import Image from "next/image";
import { useState } from "react";

export const CardElem = () => {
  const [isOpen, setIsOpen] = useState(false);
  const card = useAppSelector((sel) => sel.card.card);
  const dispatch = useAppDispatch();

  function toggleShow() {
    setIsOpen((open) => !open);
  }
  function delateFromCard(dataToDell: TData) {
    console.log(dataToDell)
    dispatch({
      type: CARD_DELL,
      payload: dataToDell,
    });
  }

  return (
    <>
      <div onClick={(e) => toggleShow()} className="home__card">
        <Image src="/basket.svg" width={55} height={55} alt="basket" />
      </div>
      {isOpen && (
        <div onClick={(e) => toggleShow()} className="home__window">
          <div
            onClick={(e) => e.stopPropagation()}
            className="home__window-wrap"
          >
            <div className="home__window-head">
              <h1>Your Bag</h1>
              <p>
                Items in your bag not reserved- check out now to make them
                yours.
              </p>
            </div>
            {card.length > 0 ? (
              card.map((elem, i) => {
                return (
                  <div key={elem.name + i} className="home__window-elem">
                    <Image
                      src={elem.image}
                      width={207.82}
                      height={225}
                      alt="basket"
                    />
                    <div className="home__window-right">
                      <h3>{elem.name}</h3>
                      <p>${elem.price}</p>
                      <button onClick={(e) => delateFromCard(elem)}>
                        <Image
                          src="/trash.svg"
                          width={32}
                          height={32}
                          alt="basket"
                        />
                      </button>
                    </div>
                  </div>
                );
              })
            ) : (
              <Image
                src="/not found.png"
                width={300}
                height={300}
                alt="Picture of the author"
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};
