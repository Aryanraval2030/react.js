function Shimmer() {
  return (
    <div className="flex flex-wrap gap-5 justify-center mt-[10vh]">
      {Array(8)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="w-[250px] h-[250px] bg-gray-300 animate-pulse rounded-lg"
          ></div>
        ))}
    </div>
  );
}

export default Shimmer;
