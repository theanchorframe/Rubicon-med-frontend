import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-navy text-navy-foreground">
      <div className="text-center">
        <p className="text-primary font-semibold text-lg tracking-wide uppercase mb-4">Error</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">404</h1>
        <p className="mb-4 text-xl text-navy-foreground/80">Oops! Page not found</p>
        <a href="/" className="text-primary underline hover:text-primary/80">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
