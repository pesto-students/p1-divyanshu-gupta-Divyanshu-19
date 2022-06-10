import { useState } from 'react';
import styles from './Shortener.module.css';

export default function Main() {
  const [url, setUrl] = useState('');
  const [shortenLink, setShortenLink] = useState('');
  async function handleSubmit() {
    const result = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
    const data = await result.json();
    setShortenLink(data.result.short_link);
  }
  console.log(styles);
  return (
    <>
      <div className={styles.mainInput}>
        <input
          className={styles.inputUrl}
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder={`Shorten a Link here...`}
        ></input>
        <button className={styles.inputButton} onClick={handleSubmit}>
          Shorten It!
        </button>
      </div>

      {shortenLink ? (
        <div className={styles.container}>
          <div className={styles.secondContainer}>
            <span className={styles.mainUrl}>{url}</span>
            <span className={styles.shortUrl}>{shortenLink}</span>
            <button
              className={styles.copyButton}
              onClick={() => {
                navigator.clipboard.writeText(shortenLink);
              }}
            >
              Copy
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
