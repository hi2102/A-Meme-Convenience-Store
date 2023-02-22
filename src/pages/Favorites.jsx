import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import FavoritesContext from '../store/favorites-context';
import MeetupList from '../components/meetups/MeetupList';
import styles from '../components/meetups/NewMeetUpsForm.module.css';

export default function Favorites(props) {
  const favoritesCtx = useContext(FavoritesContext);

  let content;
  console.log(favoritesCtx.totalFavorites);
  favoritesCtx.totalFavorites === 0
    ? (content = <p>좋아하는 만물이 아직 없어요! 우리 함께 찾아 볼까요?</p>)
    : (content = <MeetupList meetups={favoritesCtx.favorites} />);

  return (
    <section>
      <h1>내가 좋아한 짤들</h1>
      {content}
      <Link to='/' className={styles.actions}>
        <button>메인 화면으로</button>
      </Link>
    </section>
  );
}
