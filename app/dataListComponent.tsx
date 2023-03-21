import { CARD_ADD, CARD_DELL } from "@/redux/card/cardActionTypes";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { TData } from "@/types/data.type";
import Image from "next/image";
import { useMemo } from "react";

type TDataListProps = {
  filter: string;
};
export const DataListComponent = ({ filter }: TDataListProps) => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.dataList.data);
  const card = useAppSelector((state) => state.card.card);

  const dataList = useMemo(
    () =>
      data.filter((elem) =>
        elem.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
      ),
    [filter]
  );

  function delateFromCard(dataToDell: TData) {
    console.log(dataToDell);
    dispatch({
      type: CARD_DELL,
      payload: dataToDell,
    });
  }

  function addToCard(dataToCard: TData) {
    dispatch({
      type: CARD_ADD,
      payload: dataToCard,
    });
  }

  if (dataList.length > 1) {
    return (
      <div className="home__data">
        {dataList.map((elem, index) => {
          const inCard = card.indexOf(elem);
          return (
            <div key={index + elem.name} className="home__element">
              <Image
                src={elem.image}
                width={500}
                height={500}
                alt="Picture of the author"
              />
              <h3>{elem.name}</h3>
              {inCard === -1 ? (
                <button onClick={(e) => addToCard(elem)}>
                  Add to card - ${elem.price}
                </button>
              ) : (
                <button
                  style={{ backgroundColor: "#ffa52f" }}
                  onClick={(e) => delateFromCard(elem)}
                >
                  Add to card - ${elem.price}
                </button>
              )}

              {elem.isNew && <span>new</span>}
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="home__data">
      <Image
        src="/not found.png"
        style={{ marginTop: 50 }}
        width={500}
        height={500}
        alt="Picture of the author"
      />
    </div>
  );
};
