import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import projects from '../Developer/Projects/projects.json';
import reviews from '../Developer/Reviews/reviews.json';
import "./HomePage.css";

const Home = () => {
  const { t } = useTranslation();
  const [activePerson, setActivePerson] = useState<number | null>(null);

  const handleButtonClick = (personIndex: number) => {
    setActivePerson(personIndex);
  };

  const newProjects = projects.filter(project => project.status === "new");

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
          {newProjects.map((project, index) => (
            <li key={index}>
              <img src={project.imgSrc} alt={project.imgAlt} />
              <h1>{project.title}</h1>
              <p>{project.description}</p>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <button>Open</button>
              </a>
            </li>
          ))}
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
