import Image from "next/image";
import LoginForm from "./components/LoginForm";
import Card from "@/components/ui/card";
import { ChartLine, GitGraph } from "lucide-react";
import PageTitle from "@/components/PageTitle";

export default function Home() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Sales Summary" />
      <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4 ">
        <Card label="Today's Sales" amount="143.3k" icon={ChartLine} />
        <Card label="Today's Sales" amount="143.3k" icon={ChartLine} />
        <Card label="Today's Sales" amount="143.3k" icon={ChartLine} />
        <Card label="Today's Sales" amount="143.3k" icon={ChartLine} />
      </section>
    </div>
  );
}
