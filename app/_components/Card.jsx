'use client';

function Card({ children }) {
  return (
    <div className="card flex flex-col justify-between pb-[3.4rem] h-[90%] rounded-[25px]  bg-white mx-auto">
      {children}
    </div>
  );
}

export default Card;
