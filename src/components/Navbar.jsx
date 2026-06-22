import * as React from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const location = useLocation()
  const navRef = React.useRef(null)

  const isActive = React.useCallback((path) => location.pathname === path, [location.pathname])
  const toggleMenu = React.useCallback(() => setIsOpen((prev) => !prev), [])
  const closeMenu = React.useCallback(() => setIsOpen(false), [])

  React.useEffect(() => {
    closeMenu()
  }, [location.pathname, closeMenu])

  React.useEffect(() => {
    const handleOutsideClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target) && isOpen) {
        closeMenu()
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick)
      return () => document.removeEventListener("mousedown", handleOutsideClick)
    }
  }, [isOpen, closeMenu])

  const navLinks = React.useMemo(() => [
    { path: "/", label: "Home" },
    { path: "/connect", label: "Connect Us" },
    { path: "/get-app", label: "Get the App" }
  ], [])

  const getLinkClass = React.useCallback((path) => {
    return "text-sm font-medium transition-colors hover:text-primary " + (isActive(path) ? "text-primary" : "text-foreground/80")
  }, [isActive])

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 md:h-25">
          <Link to="/" className="flex items-center py-2" aria-label="FarmV Home">
            <img
              src="/assets/Farmv-LOGO-DIPt5yaE.png"
              alt="FarmV Logo"
              className="h-16 md:h-20 w-auto max-h-16 md:max-h-20 object-contain transition-transform duration-200 hover:scale-105"
              loading="eager"
              decoding="async"
              width="80"
              height="80"
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={getLinkClass(path)}
                aria-current={isActive(path) ? "page" : undefined}
              >
                {label}
              </Link>
            ))}
            <Link to="/get-app">
              <Button size="sm" className="shrink-0">
                Start Free Trial
              </Button>
            </Link>
          </div>

          <button
            className="md:hidden p-2 -m-2 touch-manipulation focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md transition-colors"
            onClick={toggleMenu}
            onKeyDown={(e) => {
              if (e.key === "Escape" && isOpen) closeMenu()
            }}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            type="button"
          >
            {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>

        {isOpen && (
          <div
            id="mobile-menu"
            className="md:hidden py-4 border-t border-border animate-in slide-in-from-top-2 duration-200"
          >
            <div className="flex flex-col gap-4" role="menu">
              {navLinks.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className={getLinkClass(path)}
                  onClick={closeMenu}
                  role="menuitem"
                  aria-current={isActive(path) ? "page" : undefined}
                >
                  {label}
                </Link>
              ))}
              <Link to="/get-app" onClick={closeMenu} className="w-full">
                <Button size="sm" className="w-full mt-2" role="menuitem">
                  Start Free Trial
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export { Navbar }
export default Navbar
