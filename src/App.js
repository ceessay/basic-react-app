import { useContext } from 'react';
import './App.css';
import DisplayUsers from './DisplayUsers';
import UserProvider, { UserContext } from './UserProvider';

function App() {



  return (

    <UserProvider>
      <div className="App">
        {<DisplayUsers />}
      </div>
    </UserProvider>
  );
}

export default App;
