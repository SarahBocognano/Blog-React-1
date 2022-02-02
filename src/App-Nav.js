


function AppNav() {
  return (
    <div className="App">
      <header className="App-header">
          <nav className="App-nav">
            <h1>Creating a New World</h1>
              <ul className="App-nav-link">
                <li className="App-nav-link-li"><a className="App-nav-link-accueil" href="#">Accueil</a></li>
                <li className="App-nav-link-li"><a className="App-nav-link-accueil" href="#mainContainer">Mon blog</a></li>
                <li className="App-nav-link-li"><a className="App-nav-link-accueil" href="#mainContainer">A propos</a></li>
                <li className="App-nav-link-li"><a className="App-nav-link-accueil" href="#mainContainerContact">Contact</a></li>
              </ul>
          </nav>
      </header>
    </div>
  );
}

export default AppNav;