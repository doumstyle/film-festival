import { ModeToggle } from "./ui/light-dark-mode";

export const Header = () => {
  return (
    <header className="border-b-2 border-yellow-300">
      <div className="flex items-center justify-between p-4 bg-gray-800">
        <div className="flex items-center space-x-2">
          <a href="/">
            <img src="/logo.png" alt="logo FPA" className="h-20 w-20" />
          </a>
          <h1 className="text-2xl font-bold text-white">
            Les films de Plein Air
          </h1>
        </div>
        <div className="flex items-center space-x-4">
          <nav className="flex space-x-4 text-white">
            <a href="/" className="hover:text-yellow-300">
              Accueil
            </a>
            <a href="/films" className="hover:text-yellow-300">
              Films
            </a>
            <a href="/apropos" className="hover:text-yellow-300">
              A Propos
            </a>
          </nav>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};
