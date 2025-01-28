export default function LabHeader() {
  return (
    <header className="flex items-center justify-between bg-opacity-35 px-4 py-2">
      <a href="/">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 10C14.2091 10 16 8.20914 16 6C16 3.79086 14.2091 2 12 2C9.79086 2 8 3.79086 8 6C8 8.20914 9.79086 10 12 10Z"
            stroke="white"
            strokeOpacity="0.35"
            strokeWidth="1.5"
          />
          <path
            d="M19.9975 18C20 17.8358 20 17.669 20 17.5C20 15.0147 16.4183 13 12 13C7.58172 13 4 15.0147 4 17.5C4 19.9853 4 22 12 22C14.231 22 15.8398 21.8433 17 21.5634"
            stroke="white"
            strokeOpacity="0.35"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </a>
      <h1 className="text-dark-gray-custom text-p-md">Lab</h1>
      <a href="/notifications">
        <svg
          width="20"
          height="22"
          viewBox="0 0 20 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 18H0V16H1V9.031C1 4.043 5.03 0 10 0C14.97 0 19 4.043 19 9.031V16H20V18ZM3 16H17V9.031C17 5.148 13.866 2 10 2C6.134 2 3 5.148 3 9.031V16ZM7.5 19H12.5C12.5 19.663 12.2366 20.2989 11.7678 20.7678C11.2989 21.2366 10.663 21.5 10 21.5C9.33696 21.5 8.70107 21.2366 8.23223 20.7678C7.76339 20.2989 7.5 19.663 7.5 19Z"
            fill="white"
            fillOpacity="0.35"
          />
        </svg>
      </a>
    </header>
  );
}
