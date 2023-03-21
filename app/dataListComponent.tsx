import { useAppSelector } from "@/redux/store";
import Image from "next/image";

type TDataListProps = {
  filter: string;
};
export const DataListComponent = ({ filter }: TDataListProps) => {
  const data = useAppSelector((state) => state.dataList.data);

  return (
    <div className="home__data">
      {data
        .filter((elem) =>
          elem.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
        )
        .map((elem, index) => (
          <div key={index + elem.name} className="home__element">
            <Image
              src={elem.image}
              width={500}
              height={500}
              alt="Picture of the author"
            />
            <h3>{elem.name}</h3>
            <button>Add to card - ${elem.price}</button>
            {elem.isNew && <span>new</span>}
          </div>
        ))}
    </div>
  );
};
/*
      {data.map((elem, index) => (
        <h3 key={index}>{elem.name}</h3>
      ))}
*/
