import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Carousel } from 'react-bootstrap'; // Asum că folosești react-bootstrap pentru Carousel
import 'boxicons'; // Asigură-te că ai instalat boxicons
import { CardContainer } from '../HomeCard/HomeCard.style';
import Events from '../../Pages/Events';
import {
  UserProfileContainer,
} from '../Profile/Profile.style';


export const category = [
  {
    title: "Party",
    img: "https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Concerte",
    img: "https://images.pexels.com/photos/416831/pexels-photo-416831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Teatru",
    img: "https://images.pexels.com/photos/6899928/pexels-photo-6899928.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Street Food",
    img: "https://images.pexels.com/photos/1483858/pexels-photo-1483858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Sport",
    img: "https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const Profile = () => {
  const [user, setUser] = useState(null);
  const [basketCount, setBasketCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('http://localhost:3001/users');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUser(data[0]);  // Presupunem că utilizatorul este primul din lista
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchUser();
    const count = JSON.parse(localStorage.getItem('basketCount')) || 0;
    setBasketCount(count);
  }, []);

  useEffect(() => {
    const count = JSON.parse(localStorage.getItem('basketCount')) || 0;
    setBasketCount(count);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!user) {
    return <div>Utilizatorul nu este găsit.</div>;
  }

  return (
    <div>
      <h1>Salut, {user.name}!</h1>
      <p>Email: {user.email}</p>
      <UserProfileContainer>
        <box-icon name='cart-add'></box-icon>
        <span>{basketCount}</span>
      </UserProfileContainer>
      <CardContainer>
        <Carousel>
          {category.map((cat) => (
            <Carousel.Item
              key={cat.title}
              style={{ cursor: "pointer" }}
              onClick={() => navigate('/events')}
            >
              <img className="d-block w-100" src={cat.img} alt={cat.title} />
              <Carousel.Caption>
                <h3>{cat.title}</h3>
                <p>Vezi bilete la {cat.title} in orasul tau.</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </CardContainer>
    </div>
  );
};

export default Profile;
