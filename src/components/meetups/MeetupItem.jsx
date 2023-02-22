import React, { useContext } from 'react';
import styles from './MeetupItem.module.css';
import { Link } from 'react-router-dom';
import Card from '../ui/Card';
import FavoritesContext from '../../store/favorites-context';

export default function MeetupItem(props) {
  const favoriteCtx = useContext(FavoritesContext);
  const handleToggleFavoriteStatus = () => {
    if (itemIsFavorite) {
      favoriteCtx.removeFavorite(props.id);
    } else {
      favoriteCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  };
  const itemIsFavorite = favoriteCtx.itemIsFavorite(props.id);

  return (
    <Card>
      <li className={styles.item}>
        <div className={styles.image}>
          {/* eslint-disable-next-line */}
          <img src={props.image} alt='image' />
        </div>
        <div className={styles.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={styles.actions}>
          <Link to='/favorites'>
            <button onClick={handleToggleFavoriteStatus}>
              {itemIsFavorite ? 'Remove From Favorites' : 'To Favorites'}
            </button>
          </Link>
        </div>
      </li>
    </Card>
  );
}
