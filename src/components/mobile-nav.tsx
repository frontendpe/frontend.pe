import { useState, useEffect } from "react";

export default function MobileNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    const newState = !isMenuOpen;
    setIsMenuOpen(newState);

    if (newState) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  const handleLinkClick = () => {
    if (isMenuOpen) {
      toggleMenu();
    }
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMenuOpen) {
        toggleMenu();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        toggleMenu();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  return (
    <>
      <button
        onClick={toggleMenu}
        className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 z-50"
        aria-label="Alternar menú móvil"
      >
        <span
          className={`w-6 h-0.5 bg-texto transition-all duration-300 transform ${
            isMenuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`w-6 h-0.5 bg-texto transition-all duration-300 transform ${
            isMenuOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`w-6 h-0.5 bg-texto transition-all duration-300 transform ${
            isMenuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      {isMenuOpen && (
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-background/95 backdrop-blur-sm transform transition-transform duration-300 ease-in-out md:hidden z-10 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <ul className="uppercase flex flex-col gap-8 items-center font-semibold text-center">
              <li>
                <a
                  href="#inicio"
                  className="text-2xl hover:text-nav-bg transition-colors duration-200"
                  onClick={handleLinkClick}
                >
                  inicio
                </a>
              </li>
              <li>
                <a
                  href="#nosotros"
                  className="text-2xl hover:text-nav-bg transition-colors duration-200"
                  onClick={handleLinkClick}
                >
                  nosotros
                </a>
              </li>
              <li>
                <a
                  href="#meetups"
                  className="text-2xl hover:text-nav-bg transition-colors duration-200"
                  onClick={handleLinkClick}
                >
                  meetups
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="text-2xl hover:text-nav-bg transition-colors duration-200"
                  onClick={handleLinkClick}
                >
                  contacto
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="bg-nav-bg text-2xl text-nav-text font-semibold px-8 py-3 rounded-full transition hover:bg-nav-text hover:text-nav-bg"
                  onClick={handleLinkClick}
                >
                  auspiciar
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
