import Counter from "./redux/slices/Counter";
import UserComponent from "./redux/UserComponent";
import CounterComponent from "./redux/CounterComponent";

function App() {
  return (
    <main className="App">
      <Counter />
      <UserComponent />
      <CounterComponent />
    </main>
  );
}

export default App;