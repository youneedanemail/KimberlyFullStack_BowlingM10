import logo from './Logo.png';

function Header(props: any) {
  return (
    <header className="row header navbar ">
      <div className="col-4">
        <img src={logo} className="logo img-fluid" alt="logo" />
      </div>
      <div className="col subtitle">
        <h1>
          Check out our bowling database and discover the player on the infamous
          Marlin and Shark teams
        </h1>
      </div>
    </header>
  );
}

export default Header;
