import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function PostDetails() {
  const router = useRouter();
  const { postId } = router.query;

  const [postInto, setPostInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/1`)
      .then((res) => res.json())
      .then((json) => setPostInfo(json))
      .catch((error) => alert(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      {isLoading && <h1>Loading ...</h1>}

      {postInto && !isLoading && (
        <>
          <h1>post / {postId}</h1>
          <hr />

          <p>{postInto.title}</p>
          <hr />
          <p>{postInto.body}</p>
        </>
      )}
    </div>
  );
}

export default PostDetails;
