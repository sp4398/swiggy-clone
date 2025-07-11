const Simmer = () => {
  const shimmerCards = Array.from({ length: 8 });

  return (
    <div className="flex flex-wrap mt-[95px] mr-[150px] mb-0 ml-[160px]">
      {shimmerCards.map((_, index) => (
        <div
          key={index}
          className="w-[200px] h-[300px] m-[25px] bg-[#f0f0f0] rounded-[3%]"
        ></div>
      ))}
    </div>
  );
};

export default Simmer;
