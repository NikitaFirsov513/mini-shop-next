import { useAppSelector } from "@/redux/store";
import Image from "next/image";
export const DataListComponent = () => {
  const data = useAppSelector((state) => state.dataList.data);

  return (
    <div className="home__data">
      {data.map((elem, index) => (
        <div key={index + elem.name} className="home__element">
          <Image
            src="/image 1.png"
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
