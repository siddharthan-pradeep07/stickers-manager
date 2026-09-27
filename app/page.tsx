import Image from "next/image";

export default function Home() {
  return (
    <main className= "main">
      <h1 className= "main-title">
        Stickers manager
      </h1>
        <p className="main-subtitle">
          manage your Hack Club stickers, showcase your collection to others, explore other's collection.
        </p>
        <a href="/api/auth/login"
          className="auth-button"
        >
          Log in with your Hack Club auth
        </a>
    </main>
  );
}
