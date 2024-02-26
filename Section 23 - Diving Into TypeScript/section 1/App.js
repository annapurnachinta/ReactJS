import './App.css';
import UserProfile from './UserProfile'

function App() {
  return (
    <div className="container px-4 mx-auto">
      <UserProfile name='Me' job="engineer" email='me@gmail.com' />
    </div>
  );
}

export default App;
