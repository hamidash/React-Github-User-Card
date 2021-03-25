import logo from './logo.svg';
import './App.css';
import Followers from './components/Followers';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div className="App">
      <UserProfile />
      <Followers />
     
    </div>
  );
}

export default App;
