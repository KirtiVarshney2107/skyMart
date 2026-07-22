import { Zap } from "lucide-react";
import StatCard from "./StatCard";

const LeftSection = () => {
  return (
    <div className="flex flex-col justify-between p-14">

      <div className="flex items-center gap-3">
        <div className="bg-lime-400 p-3 rounded-full">
          <Zap className="text-black" size={22} />
        </div>

        <h1 className="text-4xl font-bold">
          Sky<span className="text-lime-400">Mart</span>
        </h1>
      </div>

      <div className="space-y-8 max-w-xl">

        <h3 className="uppercase text-lime-400 tracking-widest font-semibold">
          Welcome Back
        </h3>

        <h1 className="text-7xl font-bold leading-tight">
          Shop the future.
          <br />
          <span className="text-lime-400">
            Today.
          </span>
        </h1>

        <p className="text-zinc-400 text-xl leading-9">
          Thousands of products, lightning-fast delivery,
          and prices that make your wallet happy.
        </p>

      </div>

      <div className="grid grid-cols-3 gap-6">

        <StatCard number="20K+" text="Products" />
        <StatCard number="50K+" text="Users" />
        <StatCard number="4.9★" text="Rating" />

      </div>

    </div>
  );
};

export default LeftSection;