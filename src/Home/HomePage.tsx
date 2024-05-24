import { useState } from 'react';
import "./HomePage.css";
import { useTranslation } from 'react-i18next';
const Home = () => {

  const { t } = useTranslation();

  const [activePerson, setActivePerson] = useState<number | null>(0);


  const handleButtonClick = (personIndex: number) => {
    setActivePerson(personIndex);
  };

  return (
    <div>
      <section>
        <h1 className="title">{t('Home.About-title')}</h1>
        <p>{t('Home.p1')}</p>
        <p>{t('Home.p2')}</p>
        <p>{t('Home.p3')}</p>
      </section>

      <section>
        <h1 className="title">New projects</h1>
        <p>Here you can see our new projects</p>
        <ul>

          <li>
          <img src="" alt="photo" />
          <h1>Title projects</h1>
          <p>our project</p>
          <button>Open</button>
          </li>

          <li>
          <img src="" alt="photo" />
          <h1>Title projects</h1>
          <p>our project</p>
          <button>Open</button>
          </li>

          <li>
          <img src="" alt="photo" />
          <h1>Title projects</h1>
          <p>our project</p>
          <button>Open</button>
          </li>

          <li>
          <img src="" alt="photo" />
          <h1>Title projects</h1>
          <p>our project</p>
          <button>Open</button>
          </li>

        </ul>
      </section>

     

      <section>
        <h1 className="title">Reviews</h1>

         <p>Our reviews</p>

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
