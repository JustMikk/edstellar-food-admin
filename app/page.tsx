import Image from "next/image";
import LoginForm from "./components/LoginForm";
import Card, { CardContent } from "@/components/ui/card";
import { ChartLine, GitGraph } from "lucide-react";
import PageTitle from "@/components/PageTitle";
import BarChart from "@/components/BarChart";
import PopularProducts, {
  PopularProductsProps,
} from "@/components/PopularProducts";

export default function Home() {
  const products = [
    {
      id: 1,
      name: "Lamb Tzatziki Burgers",
      sales: 500,
    },
    {
      id: 2,
      name: "Teriyaki Chicken Casserole",
      sales: 322,
    },
    {
      id: 3,
      name: "Teriyaki Chicken Casserole",
      sales: 322,
    },
    {
      id: 4,
      name: "Teriyaki Chicken Casserole",
      sales: 322,
    },
    {
      id: 5,
      name: "Teriyaki Chicken Casserole",
      sales: 322,
    },
    {
      id: 6,
      name: "Teriyaki Chicken Casserole",
      sales: 322,
    },
  ];
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Sales Summary" />
      <section className="grid w-full grid-cols-1 gap-4 gap-x-20 transition-all sm:grid-cols-2 xl:grid-cols-4 ">
        <Card label="Today's Sales" amount="143.3k" icon={ChartLine} />
        <Card label="Today's Sales" amount="143.3k" icon={ChartLine} />
        <Card label="Today's Sales" amount="143.3k" icon={ChartLine} />
        <Card label="Today's Sales" amount="143.3k" icon={ChartLine} />
      </section>

      <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
        <CardContent>
          <p className="p-4 font-semibold">Overview</p>
          <BarChart />
        </CardContent>
        <CardContent className="flex justify-between gap-4">
          <div className="flex justify-between">
            <p className="p-4 font-semibold">Popular Products</p>
            <p className="p-4 pr-1 font-semibold">Sales/Week</p>
          </div>
          <p className="text-sm text-gray-400">
            {" "}
            Top selling products this week
          </p>
          {products
            .slice(0, 5)
            .map((member: PopularProductsProps, index: number) => (
              <PopularProducts
                id={member.id}
                key={index}
                name={member.name}
                sales={member.sales}
              />
            ))}
        </CardContent>
      </section>
    </div>
  );
}
