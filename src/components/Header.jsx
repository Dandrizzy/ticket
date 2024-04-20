function Header() {
 return (
  <header className="flex bg-blue-300 text-blue-900 px-4 py-3 items-center justify-between">
   <div className="flex gap-2 font-bold text-2xl">
    <h1 className="p-0 -rotate-45 ">✈</h1>
    <h1>Trip<span>.</span>com</h1>
   </div>
   <div>
    <button>Round trip</button>
   </div>
  </header>
 );
}

export default Header;
