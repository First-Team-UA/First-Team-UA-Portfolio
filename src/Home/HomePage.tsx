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
        <p>We are a team of talented developers who specialize in creating websites. Our mission is to ensure that each project embodies the unique ideas and needs of our clients. We find an individual approach to each task and ensure that each site is modern, functional and aesthetically attractive.</p>
        <p>Our team is always on the lookout for new technologies and innovations to provide our clients with the best web development solutions. We are proud to be a part of this fast-changing world of technology and help our customers succeed online.</p>
        <p>If you need a reliable partner in the creation of your next project, we are here to help. Let your business grow with us!</p>
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
      
       <section>
        <h1 className="title">Contact</h1>
        <p>Our contact details</p>
        <ul>
          <li>Instagram</li>
          <li>Linkedin</li>
          <li>GitHub</li>
          <li>Gmail</li>
          <li>Discord</li>
          <li>Telegram</li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
