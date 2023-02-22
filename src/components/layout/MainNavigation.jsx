import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from './MainNavigation.module.css';
import FavoritesContext from '../../store/favorites-context';

export default function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext);
  return (
    <header className={styles.header}>
      <div className={styles.logo}>React MeetUps</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>All Meet ups</Link>
          </li>
          <li>
            <Link to='/new-meetup'>New Meet Up</Link>
          </li>
          <li>
            <Link to='/favorites'>
              Favorites
              <span className={styles.badge}>
                {favoritesCtx.totalFavorites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
