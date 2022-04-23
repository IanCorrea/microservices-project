import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";

export default function App() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <div>
        <pre>{JSON.stringify(user, null, 2)}</pre>
        <a href="/api/auth/logout">Logout</a>
      </div>
    );
  }

  return <a href="/api/auth/login">Login</a>;
}

export const getServerSideProps = withPageAuthRequired();
