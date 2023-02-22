import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from './MainNavigation.module.css';
import FavoritesContext from '../../store/favorites-context';

export default function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext);
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <div>
          <div>A Meme</div>
          <div>Convenience Store</div>
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <Link to='/'>내가 주운 짤들</Link>
          </li>
          <li>
            <Link to='/new-meetup'>뉴 짤 등록</Link>
          </li>
          <li>
            <Link to='/favorites'>
              <span>좋짤</span>
              <span role='img' aria-label='like'>
                👍
              </span>
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
