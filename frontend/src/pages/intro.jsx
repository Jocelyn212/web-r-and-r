/* import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function Intro() {
  const history = useHistory();
  const [count, setCount] = useState(5);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount(count - 1);
    }, 1000);
    if (count === 0) {
      history.push("/home");
    }
    return () => clearTimeout(timer);
  }, [count, history]); 


  return (
    {/ <div>
      <img src="logo.png" alt="Mi logotipo" className="Logo" />
      <Counter />
      <button onClick={() => history.push("/home")}>Entrar</button>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(5);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount(count - 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [count]);

  return (
    <div>
      <p>Esta página se redirigirá automáticamente en {count} segundos.</p>
    </div>
  );
} 
 */
