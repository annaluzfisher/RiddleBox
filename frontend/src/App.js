import logo from './logo.svg';
import './App.css';

function App() {
  return (

    <div className='flex-col justify-center align-center border-4 border-gray-200 p-4 rounded-lg space-y-6'>
      <h1 className='text-gray-600 text-2xl font-semibold border-b-2 border-gray-200 text-center'>Riddle Me This....</h1>
      <div className='p-8 bg-gray-200 text-gray-600 rounded-lg'>If there's a Bee in my hand<br />What's in my eye?...</div>
      <div className='flex'>

        <button className='flex-1 hover:bg-gray-200 rounded-lg p-4'>Log In</button>
        <button className='flex-1 hover:bg-gray-200 rounded-lg p-4'>Sign Up</button>
      </div>


    </div>


  );
}

export default App;
