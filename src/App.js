import "./App.css";
import Header from "./layouts/Header/Header";
import Home from "./pages/Home/Home";
function App() {
    return (
        <div className="App bg-stone-50 h-[100vh]">
            <Header />
            <div className="main p-4">
                <Home />
            </div>
        </div>
    );
}

export default App;
