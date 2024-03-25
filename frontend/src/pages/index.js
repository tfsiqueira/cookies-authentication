import { useRouter } from 'next/router';
import LoginForm from '../components/LoginForm';

export default function Login() {
  const router = useRouter();

  const handleLoginSuccess = () => {
    router.push('/dashboard');
  };

  return (
    <div>
      <h1>Login</h1>
      <LoginForm onLoginSuccess={handleLoginSuccess} />
    </div>
  );
}
