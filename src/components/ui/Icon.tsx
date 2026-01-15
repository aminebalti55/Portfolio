export type IconName = "spark" | "layout" | "compass" | "users";

export function Icon({
  name,
  className = "",
}: {
  name: IconName;
  className?: string;
}) {
  const common = `h-5 w-5 ${className}`;

  switch (name) {
    case "spark":
      return (
        <svg
          className={common}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M12 2l1.3 6.2L20 12l-6.7 3.8L12 22l-1.3-6.2L4 12l6.7-3.8L12 2z"
            fill="currentColor"
          />
        </svg>
      );
    case "layout":
      return (
        <svg
          className={common}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M4 5a2 2 0 012-2h12a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V5z"
            stroke="currentColor"
            strokeWidth="1.7"
          />
          <path d="M4 9h16" stroke="currentColor" strokeWidth="1.7" />
          <path d="M10 9v12" stroke="currentColor" strokeWidth="1.7" />
        </svg>
      );
    case "compass":
      return (
        <svg
          className={common}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M12 21a9 9 0 100-18 9 9 0 000 18z"
            stroke="currentColor"
            strokeWidth="1.7"
          />
          <path
            d="M14.7 9.3l-1.2 4.8-4.8 1.2 1.2-4.8 4.8-1.2z"
            fill="currentColor"
          />
        </svg>
      );
    case "users":
      return (
        <svg
          className={common}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M16 11a3 3 0 10-6 0 3 3 0 006 0z"
            stroke="currentColor"
            strokeWidth="1.7"
          />
          <path
            d="M6 19c1.2-3 4-4 7-4s5.8 1 7 4"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
          <path
            d="M8.5 11.2a2.7 2.7 0 10-5.4 0 2.7 2.7 0 005.4 0z"
            stroke="currentColor"
            strokeWidth="1.2"
            opacity="0.55"
          />
        </svg>
      );
    default:
      return null;
  }
}
