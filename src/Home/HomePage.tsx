import { useState } from 'react';
import "./HomePage.css";

const Home = () => {

  const [activePerson, setActivePerson] = useState<number | null>(0);


  const handleButtonClick = (personIndex: number) => {
    setActivePerson(personIndex);
  };

  return (
    <div>
      <section>
        <h1 className="title">About us</h1>
        <p>what do we do</p>
      </section>

      <section>
        <h1 className="title">New projects</h1>
        <p>What a section</p>
        <ul>
          <li>new projects item</li>
          <li>new projects item</li>
          <li>new projects item</li>
          <li>new projects item</li>
        </ul>
      </section>

      <section>
        <h1 className="title">Contact</h1>
        <ul>
          <li>Instagram</li>
          <li>Linkedin</li>
          <li>GitHub</li>
          <li>Gmail</li>
          <li>Discord</li>
          <li>Telegram</li>
        </ul>
      </section>

      <section>
        <h1 className="title">Reviews</h1>
        <ul>
          {['Person 1', 'Person 2', 'Person 3', 'Person 4'].map((person, index) => (
            <li key={index}>
              <button onClick={() => handleButtonClick(index)}>{person}</button>
              {activePerson === index && (
                <div className="person-details">
                  <h1>{person}</h1>
                  <a href="#">More details</a>
                  <p>Comment - {person}</p>
                </div>
              )}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Home;
