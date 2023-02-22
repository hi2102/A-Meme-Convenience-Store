import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import NewMeetUpForm from '../components/meetups/NewMeetUpForm';
import styles from '../components/meetups/NewMeetUpsForm.module.css';

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
      <h1>새로운 나만의 만물을 등록하세요!</h1>
      <NewMeetUpForm onAddMeetup={handleAddMeetup} />
      <Link to='/' className={styles.actions}>
        <button>메인 화면으로</button>
      </Link>
    </section>
  );
}
