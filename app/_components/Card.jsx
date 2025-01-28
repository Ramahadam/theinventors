'use client';

function Card({ children, className }) {
  return (
    <div
      className={`card relative mx-auto flex h-[90%] w-[90%] flex-col justify-between rounded-[25px] bg-white pb-[3.4rem] ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;
