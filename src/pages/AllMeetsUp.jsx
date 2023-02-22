import React, { useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList';

export default function AllMeetsUp({ title }) {
  const [isLoading, setIsLoading] = useState();
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://my-first-project-358f9-default-rtdb.firebaseio.com/meetups.json`
    )
      .then((res) => res.json())
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }

        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);
  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }
  return (
    <section>
      <h1>This is {title} Page</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}
