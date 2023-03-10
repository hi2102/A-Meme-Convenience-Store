import React, { useRef } from 'react';
import Card from '../ui/Card';
import styles from './NewMeetUpsForm.module.css';

export default function NewMeetUpForm({ onAddMeetup }) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    // useState와 useRef 2가지 방법이 있다.
    // 값을 변경할 때는 useState를 입력 및 값을 읽을 때는 useRef가 유용
    const enterdTitle = titleInputRef.current.value;
    const enterdImage = imageInputRef.current.value;
    const enterdAddress = addressInputRef.current.value;
    const enterdDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enterdTitle,
      image: enterdImage,
      address: enterdAddress,
      description: enterdDescription,
    };

    onAddMeetup(meetupData);
  };

  return (
    <Card>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.control}>
          <label htmlFor='title'>짤 이름</label>
          <input type='text' id='title' ref={titleInputRef} required />
        </div>
        <div className={styles.control}>
          <label htmlFor='Address'>좋은 이유</label>
          <input type='text' id='Address' ref={addressInputRef} required />
        </div>
        <div className={styles.control}>
          <label htmlFor='description'>내 짤 설명</label>
          <input
            type='text'
            id='description'
            ref={descriptionInputRef}
            required
          />
        </div>
        <div className={styles.control}>
          <label htmlFor='Image'>짤줍한 곳(url)</label>
          <input type='url' id='Image' ref={imageInputRef} required />
        </div>
        <div className={styles.actions}>
          <button>짤 올리기</button>
        </div>
      </form>
    </Card>
  );
}
