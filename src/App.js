import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';
import EditPage from './pages/EditPage';
import ListPage from './pages/ListPage';
import NavBar from './components/NavBar';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';


function App() {
  return (
    <Router>
      <NavBar />
      <div className="container">
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/blogs" exact>
            <ListPage />
          </Route>
          <Route path="/blogs/create" exact>
            <CreatePage />
          </Route>
          <Route path="/blogs/edit" exact>
            <EditPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};


export default App;
