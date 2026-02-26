import Hello from './assets/Hello';
import Contact from './assets/Contact';
import Counter from './assets/Counter';

function App() {
  const helloData = [
    { name: 'Natthaphon Mueanwongtam', message: 'Welcome to my React app!' }
  ];

  return (
    <div className="App" style={{ padding: '20px' }}>
      <Counter />
      <hr />
      {helloData.map((data, index) => (
        <Hello 
          key={index} 
          name={data.name} 
          message={data.message} 
        />
      ))}
      <Contact 
        email="Natthaphon.M@gmail.com" 
        phone="0812345678" 
      />
    </div>
  );
}

export default App;