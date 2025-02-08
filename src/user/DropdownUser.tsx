// src/user/DropdownUser.tsx
import React, { useEffect, useRef, useState } from 'react'
import { type User } from 'wasp/entities'
import { CgProfile } from 'react-icons/cg'
import { UserMenuItems } from './UserMenuItems'
import { cn } from '../client/cn'

interface DropdownUserProps {
  user: Partial<User>
}

/**
 * Displays a user-profile dropdown that toggles the 'UserMenuItems'.
 */
const DropdownUser: React.FC<DropdownUserProps> = ({ user }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const triggerRef = useRef<HTMLButtonElement | null>(null)
  const dropdownRef = useRef<HTMLDivElement | null>(null)

  const toggleDropdown = () => setDropdownOpen((prev) => !prev)

  // Close dropdown on clicks outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!dropdownOpen) return
      if (
        dropdownRef.current?.contains(e.target as Node) ||
        triggerRef.current?.contains(e.target as Node)
      ) {
        return
      }
      setDropdownOpen(false)
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [dropdownOpen])

  // Close on Escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (!dropdownOpen || e.key !== 'Escape') return
      setDropdownOpen(false)
    }
    document.addEventListener('keydown', handleEsc)
    return () => document.removeEventListener('keydown', handleEsc)
  }, [dropdownOpen])

  const handleMenuClose = () => setDropdownOpen(false)

  return (
    <div className="relative">
      <button
        ref={triggerRef}
        onClick={toggleDropdown}
        className="flex items-center gap-4 duration-300 ease-in-out text-white hover:text-primary"
        aria-label="Open user menu"
      >
        <CgProfile size="1.1rem" className="ml-1 mt-[0.1rem] text-white" />
        <svg
          className={cn('hidden sm:block fill-white', {
            'rotate-180': dropdownOpen,
          })}
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.410765 0.910734C0.736202 0.585297 1.26384 0.585297 1.58928 0.910734L6.00002 5.32148L10.4108 0.910734C10.7362 0.585297 11.2638 0.585297 11.5893 0.910734C11.9147 1.23617 11.9147 1.76381 11.5893 2.08924L6.58928 7.08924C6.26384 7.41468 5.7362 7.41468 5.41077 7.08924L0.410765 2.08924C0.0853277 1.76381 0.0853277 1.23617 0.410765 0.910734Z"
          />
        </svg>
      </button>

      {/* Dropdown */}
      <div
        ref={dropdownRef}
        className={cn(
          'absolute right-0 mt-4 flex w-62.5 flex-col rounded-sm border shadow-default border-strokedark bg-boxdark text-white z-50',
          {
            hidden: !dropdownOpen,
          }
        )}
      >
        {/* The user menu items. We pass a function that toggles the dropdown closed if needed. */}
        <UserMenuItems setMobileMenuOpen={handleMenuClose} />
      </div>
    </div>
  )
}

export default DropdownUser
