
import './App.css';
import './App-Nav.css';
import './App-Content.css';
import './App-Footer.css';
import './App-Article.css';
import './App-About.css';
import AppFooter from './App-Footer';
import AppNav from './App-Nav.js';
import AppContent from './App-Content.js';
import AppArticle from './App-Article';
import AppAbout from './App-About';



function App() {
  return (
    <div>
      <AppNav />
      <AppContent>
        
      </AppContent>
      <div className="main">
      <AppArticle />
      <AppAbout />
      </div>
      <AppFooter>

      </AppFooter>
    </div>
  )
}

export default App;
