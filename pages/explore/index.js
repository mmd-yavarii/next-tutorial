import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';

export default function Explore() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const url = 'https://jsonplaceholder.typicode.com/posts';

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setPosts(json))
      .catch((error) => alert(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <h1>Explore</h1>
      <hr />

      {isLoading && <h1>Loading ...</h1>}

      {!!posts.length && (
        <div>
          {posts.map((post) => (
            <div style={{ padding: '1em', border: '1px solid #2d2d2d' }} key={post.id}>
              <Link href={`/explore/${post.id}`}>
                <p>{post.title}</p>
                <span style={{ opacity: '0.5', marginTop: '1em', display: 'inline-block' }}>{post.body}</span>
              </Link>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
