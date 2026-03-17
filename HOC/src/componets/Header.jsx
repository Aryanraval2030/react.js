function Header() {
  return (
    <div className="border-b-2 border-[#bababa] h-[100px] w-[100vw] px-[3rem] text-xl font-medium">
      <nav className="flex justify-between items-center h-[100%]">
        <div className="text-3xl">logo</div>
        <ul className="flex gap-[5rem] items-center">
          <li>home</li>
          <li>about</li>
          <li>products</li>
          <div className="flex gap-2">
            <button className="border-2 rounded-md bg-blue-700 text-white border-blue-700 py-[8px] px-[20px]">
              sign up
            </button>
            <button className="border-2 rounded-md bg-blue-700 text-white border-blue-700 py-[8px] px-[20px]">
              login
            </button>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
