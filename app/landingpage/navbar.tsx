const Navbar = () => {
  return (
    <nav className="navbar"style={{  justifyContent: 'left', left: '124px', position:'relative'}}>
      <ul style={{ listStyleType: 'none', margin: 0, padding: '20px' }}>
        <li style={{ float: 'left', border: '1px solid #3A8D31DE' , padding: '10px', margin:'5px'}}>
          <a href="/">Citizen</a>
        </li>
        <li style={{ float: 'left', border: '1px solid #3A8D31DE', padding: '10px', margin:'5px'}}>
          <a href="/">Business</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;