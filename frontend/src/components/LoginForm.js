import { useState } from 'react';

function LoginForm({ onLoginSuccess }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginEndpoint = 'http://localhost:3001/auth/login';

    const response = await fetch(loginEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include', // Importante para incluir cookies na requisição
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      onLoginSuccess();
    } else {
      alert('Falha no login');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Usuário"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Senha"
        required
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
