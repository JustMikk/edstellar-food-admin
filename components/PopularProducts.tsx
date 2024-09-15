import React from "react";

export type PopularProductsProps = {
  id: number;
  name: string;
  sales: number;
};

export default function PopularProducts(props: PopularProductsProps) {
  return (
    <div className="flex flex-wrap justify-between gap-3 pr-4">
      <section className="flex justify-between gap-3">
        <div className="h-12 w-12 rounded-full bg-gray-100 p-1">
          <img
            width={200}
            height={200}
            src={`https://themealdb.com//images/media/meals/llcbn01574260722.jpg/preview
            `}
            alt="avatar"
          />
        </div>
        <div className="text-sm">
          <p>{props.name}</p>
          {/* <div className="text-ellipsis overflow-hidden whitespace-nowrap w-[120px] sm:w-auto">
            {props.sales}
          </div> */}
        </div>
      </section>
      <p>{props.sales}</p>
    </div>
  );
}
