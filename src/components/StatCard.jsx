const StatCard = ({ number, text }) => {
  return (
    <div className="border border-zinc-700 rounded-2xl py-7 text-center">

      <h2 className="text-lime-400 text-4xl font-bold">
        {number}
      </h2>

      <p className="text-zinc-500 mt-2">
        {text}
      </p>

    </div>
  );
};

export default StatCard;