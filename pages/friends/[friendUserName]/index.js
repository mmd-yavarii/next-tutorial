import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function Friend() {
  const router = useRouter();
  const { friendUserName } = router.query;

  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((json) => setPosts(json.slice(0, 5)))
      .catch((error) => alert(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      <button>Back</button>
      <br />
      <br />

      <h1>{friendUserName}</h1>

      <hr />

      {isLoading && <h1>Loading ...</h1>}

      {!!posts.length &&
        posts.map((post) => (
          <div key={post.id} style={{ padding: '1em', borderBottom: '1px solid #2d2d2d' }}>
            <Link href={`${router.asPath}/${post.id}`}>{post.title}</Link>
          </div>
        ))}
    </div>
  );
}

export default Friend;
