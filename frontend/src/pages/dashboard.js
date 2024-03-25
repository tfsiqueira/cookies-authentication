import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Dashboard() {
  const [users, setUsers] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('http://localhost:3001/users', {
        credentials: 'include', // Assegura que os cookies sejam enviados com a requisição
      });

      if (!response.ok) {
        router.push('/');
      } else {
        const data = await response.json();
        setUsers(data);
      }
    };

    fetchUsers();
  }, [router]);

  return (
    <div>
      <h1>Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}