import { useState } from 'react';
import styles from './Shortener.module.css';

export default function Main() {
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [shortenLink, setShortenLink] = useState('');
  async function handleSubmit() {
    setLoading(true);
    const re = new RegExp(
      '((http|https)://)(www.)?[a-zA-Z0-9@:%._\\+~#?&//=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%._\\+~#?&//=]*)'
    );
    const validUrl = re.test(url);
    if (!validUrl) {
      setError(
        'URL is not valid. A example of valid url is https://google.com'
      );
      setInterval(() => {
        setError('');
      }, 5000);

      return;
    }

    const result = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
    const data = await result.json();
    setLoading(false);
    setShortenLink(data.result.short_link);
  }
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
      {error}
      {loading ? <>Loading...</> : <></>}
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
