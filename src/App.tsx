import "./styles/styles.css";

function App() {
  // tailwind test
  return (
    <>
      <button className="bg-primary hover:bg-primary-light text-white">
        Add
      </button>

      <div className="bg-neutral-50 text-neutral-900">
        <p className="text-neutral-500">500 ml</p>
      </div>

      <div className="bg-progress-gradient rounded-4xl">
      </div>
    </>
  );
}

export default App;
