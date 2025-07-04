const Navbar = () => {
  return ( 
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-betwen items-center py-5 mx-auto c-space">
          <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
            Joseph
          </a>
        </div>
      </div>
    </header>
   );
}
 
export default Navbar;