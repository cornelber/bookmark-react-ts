import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-40 w-screen">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-8">Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className="text-primary-blue hover:underline">
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;