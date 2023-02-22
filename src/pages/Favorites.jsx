import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import FavoritesContext from '../store/favorites-context';
import MeetupList from '../components/meetups/MeetupList';

export default function Favorites(props) {
  const favoritesCtx = useContext(FavoritesContext);

  let content;
  console.log(favoritesCtx.totalFavorites);
  favoritesCtx.totalFavorites === 0
    ? (content = <p> You got no favorites, Start adding some?</p>)
    : (content = <MeetupList meetups={favoritesCtx.favorites} />);

  return (
    <section>
      <h1>My {props.title}</h1>
      {content}
      <Link to='/'>
        <button>go to Home</button>
      </Link>
    </section>
  );
}
