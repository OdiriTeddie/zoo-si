import { useEffect, useState } from "react";

import "./App.css";

import MonkeyImage from "./assets/monkey.jpg";
import DeadMonkeyImage from "./assets/monkey-dead.jpg";
import GiraffeImage from "./assets/giraffe.jpg";
import DeadGiraffeImage from "./assets/girrafe-dead.jpg";
import ElephantImage from "./assets/elephant.jpg";
import DeadElephantImage from "./assets/elephant-dead.jpg";

import { Monkey } from "./models/Monkey";
import { Giraffe } from "./models/Giraffe";
import { Elephant } from "./models/Elephant";
import Animal from "./components/Animal";

function App() {
  const initialMonkeys = Array.from({ length: 5 }, () => new Monkey());
  const initialGiraffes = Array.from({ length: 5 }, () => new Giraffe());
  const initialElephants = Array.from({ length: 5 }, () => new Elephant());

  const [monkeys, setMonkeys] = useState(initialMonkeys);
  const [giraffes, setGiraffes] = useState(initialGiraffes);
  const [elephants, setElephants] = useState(initialElephants);
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      simulateTime();
    }, 1000 * 60 * 60); // Adjust the interval to represent 1 hour

    return () => clearInterval(timer); // Cleanup
  }, []); // This effect runs once when the component mounts

  const simulateTime = () => {
    const decrementValue = () => Math.floor(Math.random() * 20) + 1;

    setTime((prevTime) => prevTime + 1);
    const updateAnimals = (animals, setAnimals) => {
      const updatedAnimals = animals.map((animal) => {
        animal.decreaseHealth(decrementValue());
        return animal;
      });
      setAnimals(updatedAnimals);
    };

    updateAnimals(monkeys, setMonkeys);
    updateAnimals(giraffes, setGiraffes);
    updateAnimals(elephants, setElephants);

    elephants.forEach((elephant) => {
      elephant.checkStatusAfterHour(time);
    });
  };

  const feedZoo = () => {
    const incrementValue = () => Math.floor(Math.random() * 16) + 10;

    const updateAnimals = (animals, setAnimals, increment) => {
      const updatedAnimals = animals.map((animal) => {
        animal.increaseHealth(increment());
        return animal;
      });
      setAnimals(updatedAnimals);
    };

    updateAnimals(monkeys, setMonkeys, incrementValue);
    updateAnimals(giraffes, setGiraffes, incrementValue);
    updateAnimals(elephants, setElephants, incrementValue);
  };

  const renderAnimals = (animals) => {
    return animals.map((animal, index) => {
      let status = "";

      if (animal.species === "Monkey" && animal.getHealth() <= 30) {
        status = "Dead";
      } else if (animal.species === "Giraffe" && animal.getHealth() <= 50) {
        status = "Dead";
      } else if (
        animal.species === "Elephant" &&
        animal.getStatus() === "Can't walk"
      ) {
        status = "Can't walk";
      } else if (
        animal.species === "Elephant" &&
        animal.getStatus() === "Dead"
      ) {
        status = "Dead";
      }

      // Reset status to null when conditions no longer apply
      if (
        (animal.species === "Monkey" && animal.getHealth() > 30) ||
        (animal.species === "Giraffe" && animal.getHealth() > 50) ||
        (animal.species === "Elephant" && animal.getHealth() >= 70)
      ) {
        status = "";
      }

      let images = {
        regular: "",
        dead: "",
      };

      if (animal.species === "Monkey") {
        images = {
          regular: MonkeyImage,
          dead: DeadMonkeyImage,
        };
      } else if (animal.species === "Giraffe") {
        images = {
          regular: GiraffeImage,
          dead: DeadGiraffeImage,
        };
      } else if (animal.species === "Elephant") {
        images = {
          regular: ElephantImage,
          dead: DeadElephantImage,
        };
      }

      return (
        <Animal
          key={index}
          animal={animal}
          status={status}
          imageSources={images}
        />
      );
    });
  };

  return (
    <div>
      <div className="simulator-header">
        <h1>Zoo Simulator</h1>
        <p>Current Time: {time} hours</p>
      </div>
      <div>
        {/* Render Monkeys */}
        <div>
          <h2>Monkeys</h2>
          <div className="animal-container">
            {renderAnimals(monkeys, {
              regular: MonkeyImage,
              dead: DeadMonkeyImage,
            })}
          </div>
        </div>
        {/* Render Giraffes */}
        <div>
          <h2>Giraffes</h2>
          <div className="animal-container">
            {renderAnimals(giraffes, {
              regular: GiraffeImage,
              dead: DeadGiraffeImage,
            })}
          </div>
        </div>
        {/* Render Elephants */}
        <div>
          <h2>Elephants</h2>
          <div className="animal-container">
            {renderAnimals(elephants, {
              regular: ElephantImage,
              dead: DeadElephantImage,
            })}
          </div>
        </div>
      </div>

      <button onClick={simulateTime}>Pass Time</button>
      <button onClick={feedZoo}>Feed Zoo</button>
    </div>
  );
}

export default App;
