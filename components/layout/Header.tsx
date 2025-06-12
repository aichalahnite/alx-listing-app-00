const Header = () => {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <div className="text-xl font-bold">🏡 LuxStays</div>
      <nav className="flex gap-4">
        <input type="text" placeholder="Search..." className="border px-2 py-1 rounded" />
        <button className="ml-4 text-blue-600">Sign In</button>
        <button className="ml-2 bg-blue-500 text-white px-3 py-1 rounded">Sign Up</button>
      </nav>
    </header>
  );
};

export default Header;
