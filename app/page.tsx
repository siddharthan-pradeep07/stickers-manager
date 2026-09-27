import Image from "next/image";

export default function Home() {
  return (
    <main className= "min-h-screen bg-[#fff] bg-center bg-cover px-8 py-16 sm:px-16">
      <h1 className= "font-display text-5xl font-bold text-white sm:text-7x1">
        Stickers manager
      </h1>
      <p className="mt-4 max-w-md text-lg text-white/80">
      manage your Hack Club stickers, showcase your collection to others, explore other's collection.
      </p>

      <a href="/api/auth/login"
      className="mt-8 inline-block rounded-lg bg-white px-5 py-3 font-semibold text-black"
      >
        Log in with your Hack Club auth
      </a>
    </main>
  );
}
