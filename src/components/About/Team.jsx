import React from "react";

const Team = () => {
  return (
    <div className="container lg:py-20 mx-auto px-6">
      <div className="pt-8 pb-4">
        <h1 className="text-4xl font-bold tracking-wider text-center font-dmDisplayfont">
          TEAM
        </h1>
      </div>
      <div className="grid gap-20 py-8 lg:grid-cols-3">
        <div className="border-2 border-gray-500 ">
          <div className="-m-0.5 p-4 text-center transition hover:-translate-y-3 hover:-translate-x-3 aspect-square bg-zinc-100 ">
            <img
              src="https://images.unsplash.com/photo-1611432579402-7037e3e2c1e4?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={200}
              height={200}
              alt=""
              className="mx-auto rounded-full "
            />
            <h2 className="py-4 text-2xl font-semibold ">BUILDING SURVEYS</h2>
            <p className="text-sm text-gray-400">
              Creativity is the ability to generate, create, or discover new
              ideas, solutions, and possibilities.
            </p>
          </div>
        </div>
        <div className="border-2 border-gray-500 ">
          <div className="-m-0.5 p-4 text-center transition hover:-translate-y-3 hover:-translate-x-3 aspect-square bg-zinc-100 ">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={200}
              height={200}
              alt=""
              className="mx-auto rounded-full "
            />
            <h2 className="py-4 text-2xl font-semibold ">BUILDING SURVEYS</h2>
            <p className="text-sm text-gray-400">
              Creativity is the ability to generate, create, or discover new
              ideas, solutions, and possibilities.
            </p>
          </div>
        </div>
        <div className="border-2 border-gray-500 ">
          <div className="-m-0.5 p-4 text-center transition hover:-translate-y-3 hover:-translate-x-3 aspect-square bg-zinc-100 ">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={200}
              height={200}
              alt=""
              className="mx-auto rounded-full "
            />
            <h2 className="py-4 text-2xl font-semibold ">BUILDING SURVEYS</h2>
            <p className="text-sm text-gray-400">
              Creativity is the ability to generate, create, or discover new
              ideas, solutions, and possibilities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
