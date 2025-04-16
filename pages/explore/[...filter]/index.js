import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function Filter() {
  const router = useRouter();
  const { filter } = router.query;
  const userId = filter?.[1];

  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const url = 'https://jsonplaceholder.typicode.com/posts';

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        const result = json.filter((i) => i.userId == userId);
        setPosts(result);
      })
      .catch((error) => alert(error.message))
      .finally(() => setIsLoading(false));
  }, [userId]);

  return (
    <div>
      <h1>user {userId} posts</h1>
      <hr />

      {isLoading && <h1>Loading...</h1>}

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
    </div>
  );
}

export default Filter;
