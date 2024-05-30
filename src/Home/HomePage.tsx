import { useState } from 'react';
import "./HomePage.css";
import { useTranslation } from 'react-i18next';
import reviews from '../Developer/Reviews/reviews.json';


const Home = () => {
  const { t } = useTranslation();
  const [activePerson, setActivePerson] = useState<number | null>(null);

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
          {reviews.map((person, index) => (
            <li key={index}>
              <button onClick={() => handleButtonClick(index)}>{person.name}</button>
              {activePerson === index && (
                <div className="person-details">
                  <h1>{person.name}</h1>
                  <a href={person.moreDetailsUrl}>More details</a>
                  <p>{person.comment}</p>
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
