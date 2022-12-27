import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className=" p-5 bg-purple-600 flex flex-col gap-2">
      <p className=" font-bold text-white"> The Weekend</p>
      <div className=" flex gap-2">
        <Link
          className="p-5 bg-white text-purple-400 rounded-lg flex w-max"
          href="/"
        >
          Home
        </Link>
        <Link
          className="p-5 bg-white text-purple-400 rounded-lg flex w-max"
          href="/todos"
        >
          Todos
        </Link>
        <Link
          className="p-5 bg-yellow-500 text-purple-400 rounded-lg flex w-max"
          href="/test-animation"
        >
          test-animation
        </Link>
      </div>
    </header>
  );
};

export default Header;
