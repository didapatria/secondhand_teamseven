import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="space-y-4 text-center md:flex md:space-x-8 md:space-y-0 md:text-left">
        <h1 className="text-6xl font-extrabold tracking-tight text-gray-900">
          <span className="text-purple-900">404</span>
        </h1>
        <div className="space-y-6">
          <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 md:text-6xl">
            <span className="">Page not found</span>
          </h1>
          <div className="space-y-8">
            <p className="text-base text-gray-400">
              Please check the URL in the address bar and try again.
            </p>
            <Link
              type="submit"
              className="self-center rounded-lg bg-purple-900 px-3 py-2 font-medium text-white hover:bg-white hover:text-purple-900 hover:shadow-lg hover:shadow-purple-900/50"
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
