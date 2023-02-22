import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import NewMeetUpForm from '../components/meetups/NewMeetUpForm';

export default function NewMeetUpPage({ title }) {
  const navigate = useNavigate();

  const handleAddMeetup = (meetupData) => {
    fetch(
      `https://my-first-project-358f9-default-rtdb.firebaseio.com/meetups.json`,
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then(() => {
      navigate('/', { replace: true });
    });
  };
  return (
    <section>
      <h1>This is {title} Page</h1>
      <NewMeetUpForm onAddMeetup={handleAddMeetup} />
      <Link to='/'>
        <button>go to Home</button>
      </Link>
    </section>
  );
}
