import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function Post() {
  const router = useRouter();
  const { postId, friendUserName } = router.query;

  const [isLoading, setIsLoading] = useState(true);
  const [post, setPost] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/1`)
      .then((res) => res.json())
      .then((json) => setPost(json))
      .catch((error) => alert(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      <h1>
        {friendUserName} / post {postId}
      </h1>

      <hr />

      {isLoading && <h1>Loading ...</h1>}

      {post && (
        <>
          <h3>{post.title}</h3>
          <br />
          <p>{post.body}</p>
        </>
      )}
    </div>
  );
}

export default Post;
