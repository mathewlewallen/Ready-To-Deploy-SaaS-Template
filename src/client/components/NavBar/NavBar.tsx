// src/client/AppNavBar/AppNavBar.tsx
import React, { useState, Dispatch, SetStateAction } from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as WaspRouterLink, routes } from 'wasp/client/router'
import { useAuth } from 'wasp/client/auth'
import { Dialog } from '@headlessui/react'
import { BiLogIn } from 'react-icons/bi'
import { AiFillCloseCircle } from 'react-icons/ai'
import { HiBars3 } from 'react-icons/hi2'
import logo from '../../static/logo.webp'
import DropdownUser from '../../../user/DropdownUser'
import { UserMenuItems } from '../../../user/UserMenuItems'
import { useIsLandingPage } from '../../hooks/useIsLandingPage'
import { cn } from '../../cn'

/**
 * Basic interface for your navigation items.
 */
export interface NavigationItem {
  name: string
  to?: string  // local routes
  href?: string // external links
  icon?: React.ReactNode;
}

const NavLogo: React.FC<{ icon?: React.ReactNode }> = ({ icon }) => (
  <div className="flex items-center">
    {icon}
    <img
      className="h-12 w-12"
      src={logo}
      alt="Cloud Context Logo" // ensure alt text for accessibility
    />
  </div>
)

const LoginButton: React.FC = () => (
  <WaspRouterLink to={routes.LoginRoute.to} className="text-xl font-semibold leading-6 ml-3">
    <div className="flex items-center text-white duration-300 ease-in-out hover:text-primary">
      Log in <BiLogIn size="1.1rem" className="ml-1 mt-[0.1rem]" />
    </div>
  </WaspRouterLink>
)

/**
 * Main NavBar component for your application.
 *
 * @param navigationItems - An array of NavigationItem with optional local `to` or external `href`.
 */
const AppNavBar: React.FC<{ navigationItems: NavigationItem[] }> = ({ navigationItems }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const isLandingPage = useIsLandingPage()
  const { data: user, isLoading: isUserLoading } = useAuth()

  return (
    <header
      className={cn(
        'absolute inset-x-0 top-0 z-50 bg-boxdark-2',
        {
          'shadow sticky bg-opacity-50 backdrop-blur-lg backdrop-filter': !isLandingPage,
        }
      )}
    >
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        {/* Left side: Logo */}
        <div className="flex items-center lg:flex-1">
          <WaspRouterLink
            to={routes.LandingPageRoute.to}
            className="flex items-center -m-1.5 p-1.5 text-white duration-300 ease-in-out hover:text-primary"
          >
            <NavLogo />
            {isLandingPage && (
              <span className="ml-2 text-xl leading-6 font-semibold text-white hover:text-primary">
                Cloud Context
              </span>
            )}
          </WaspRouterLink>
        </div>

        {/* Mobile menu button (hidden on large) */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open main menu"
          >
            <HiBars3 className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop Navigation Items */}
        <div className="hidden lg:flex lg:gap-x-12">
          {renderNavigationItems(navigationItems)}
        </div>

        {/* Desktop Right Side: User or Login */}
        <div className="hidden lg:flex lg:flex-1 gap-3 justify-end items-center">
          <ul className="flex justify-center items-center gap-2 sm:gap-4">
            {isUserLoading
              ? null
              : !user
                ? <LoginButton />
                : <DropdownUser user={user} />}
          </ul>
        </div>
      </nav>

      {/* Mobile Menu (Headless UI Dialog) */}
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        {/* Overlays */}
        <div className="fixed inset-0 z-50" aria-hidden="true" />

        <Dialog.Panel className="fixed text-white inset-y-0 right-0 z-50 w-full sm:max-w-sm overflow-y-auto px-10 py-5 bg-boxdark2">
          <div className="flex items-center justify-end">
            <button
              type="button"
              className="rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <AiFillCloseCircle className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6">
              {/* Mobile nav items */}
              <div className="space-y-2 py-6">
                {renderNavigationItems(navigationItems, setMobileMenuOpen)}
              </div>

              {/* Mobile user menu items or login */}
              <div className="py-6">
                {isUserLoading
                  ? null
                  : !user
                    ? <LoginButton />
                    : <UserMenuItems setMobileMenuOpen={setMobileMenuOpen} />
                }
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}

/**
 * Renders either local or external navigation items.
 *
 * @param navigationItems - The array of NavigationItem objects.
 * @param setMobileMenuOpen - If present, means we are in mobile mode,
 *                            so we apply mobile-friendly classes.
 */
function renderNavigationItems(
  navigationItems: NavigationItem[],
  setMobileMenuOpen?: Dispatch<SetStateAction<boolean>>
) {
  const menuStyles = cn({
    '-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:text-primary': !!setMobileMenuOpen,
    'text-lg font-semibold leading-6 text-white duration-300 ease-in-out hover:text-primary': !setMobileMenuOpen,
  })

  return navigationItems.map((item) => {
    if (item.to) {
      // Local route
      return (
        <ReactRouterLink
          to={item.to}
          key={item.name}
          className={menuStyles}
          onClick={
            setMobileMenuOpen
              ? () => setMobileMenuOpen(false)
              : undefined
          }
        >
          {item.name}
        </ReactRouterLink>
      )
    }

    if (item.href) {
      // External link
      return (
        <a
          href={item.href}
          key={item.name}
          className={menuStyles}
          onClick={setMobileMenuOpen ? () => setMobileMenuOpen(false) : undefined}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.name}
        </a>
      )
    }

    // If an item doesn't have either "to" or "href" -- fallback
    return (
      <span key={item.name} className={menuStyles}>
        {item.name}
      </span>
    )
  })
}

export default AppNavBar
