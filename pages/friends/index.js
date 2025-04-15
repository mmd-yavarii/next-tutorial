import Link from 'next/link';
import React, { useEffect, useState } from 'react';

function Friends() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((json) => setUsers(json))
      .catch((error) => alert(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      <h1>Friends</h1>
      <hr />

      {isLoading && <h1>Loading ...</h1>}

      {users.length &&
        users.map((user) => (
          <div key={user.id} style={{ padding: '1em', borderBottom: '1px solid #2d2d2d' }}>
            <Link href={`/friends/${user.username}`}>{user.username}</Link>
          </div>
        ))}
    </div>
  );
}

export default Friends;
