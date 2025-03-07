import { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import QuackFeed from './QuackFeed';
import NewQuackForm from './NewQuackForm';
import LoginForm from './LoginForm';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
function App() {
  const [quacks, setQuacks] = useState([]);
  useEffect(() => {
    const fetchQuacks = async function () {
      const response = await fetch('http://localhost:5050/api/quacks');
      const data = await response.json();
      setQuacks(data);
    };
    fetchQuacks();
  }, []);

  const addQuack = async function (newQuack) {
    const response = await fetch('http://localhost:5050/api/quacks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newQuack),
    });
    setQuacks([...quacks, newQuack]);
  };

  // return (
  //   <>
  //     <Header />
  //     <div className="row">
  //       <div className="col-md-8">
  //         <QuackFeed quacks={quacks} />
  //       </div>
  //       <div className="col-md-4">
  //         <NewQuackForm quacks={quacks} addQuack={addQuack} />
  //         <LoginForm />
  //       </div>
  //     </div>
  //     <Footer />
  //   </>
  // );
  return (
    <Router>
      <Header />
      <div className="container mt-4">
        <Routes>
          {/* Quack Feed Route */}
          <Route
            path="/"
            element={
              <div className="row">
                <div className="col ">
                  <QuackFeed quacks={quacks} />
                </div>
                <div className="col">
                  <NewQuackForm quacks={quacks} addQuack={addQuack} />
                </div>
              </div>
            }
          />

          {/* Login Route */}
          <Route
            path="/login"
            element={
              <div className="row">
                <div className="col ">
                  <LoginForm />
                </div>
              </div>
            }
          />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
