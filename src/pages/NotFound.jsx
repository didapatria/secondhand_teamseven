import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="md:flex text-center md:text-left md:space-x-8 space-y-4 md:space-y-0">
        <h1 className="text-6xl tracking-tight font-extrabold text-gray-900">
          <span className="text-purple-900">404</span>
        </h1>
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl tracking-tight font-extrabold text-gray-900">
            <span className="">Page not found</span>
          </h1>
          <div className="space-y-8">
            <p className="text-base text-gray-400">
              Please check the URL in the address bar and try again.
            </p>
            <Link
              type="submit"
              className="bg-purple-900 rounded-lg font-medium text-white hover:bg-white hover:text-purple-900 hover:shadow-lg hover:shadow-purple-900/50 px-3 py-2 self-center"
              to="/"
            >
              Go back home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
