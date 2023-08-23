import logo from './logo.svg';
import './App.css';

function App() {
  return (

    <div className='flex-col justify-center align-center  p-4 border-4 rounded-lg space-y-4 shadow-xl'>
      <h1 className='text-gray-600 text-2xl font-semibold border-b-2 border-gray-200 text-center'>Riddle Me This....</h1>
      <div className='border-2 p-6 text-gray-600 rounded-lg shadow-indent'>If there's a Bee in my hand<br />What's in my eye?...</div>
      <div className='flex'>

        <button className='flex-1 hover:bg-gray-200 rounded-lg p-2 text-gray-600'>Log In</button>
        <button className='flex-1 hover:bg-gray-200 rounded-lg p-2 text-gray-600'>Sign Up</button>
      </div>


    </div>


  );
}

export default App;
