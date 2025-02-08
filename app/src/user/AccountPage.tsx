import React, { useState } from 'react'
import type { User } from 'wasp/entities'
import {
  SubscriptionStatus,
  prettyPaymentPlanName,
  parsePaymentPlanId,
} from '../payment/plans'
import { getCustomerPortalUrl, useAction, useQuery, getCurrentUser, updateCurrentUser } from 'wasp/client/operations'
import { Link as WaspRouterLink, routes } from 'wasp/client/router'
import { logout, useAuth } from 'wasp/client/auth'
import { useNavigate } from 'react-router-dom'

export default function AccountPage() {
  const { data: user, isLoading: authLoading } = useAuth()
  const { data: userDetails, isLoading: detailsLoading } = useQuery(getCurrentUser)

  if (authLoading || detailsLoading) return <div>Loading...</div>
  if (!user || !userDetails) return <div>Error loading user data</div>

  return (
    <div className="scrollbar-hide container mx-auto px-6 py-12 max-w-4xl">
              <div className="text-center mb-10">
  <WaspRouterLink 
    to={routes.ContactPageRoute.to} 
    className="inline-flex items-center px-6 py-3 text-2xl rounded-lg bg-boxdark2 border border-primary/20 
              text-primary hover:text-boxdark2 hover:bg-primary transition-all duration-200 
              shadow-lg hover:shadow-primary/20 group"
  >
    <svg 
      className="h-5 w-5 mr-2 text-xl group-hover:animate-bounce" 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
      />
    </svg>
    Found a bug? Report it here!
  </WaspRouterLink>
  </div>
  {/* Outer container */}
  <div className="bg-boxdark shadow-xl rounded-t-lg overflow-hidden border border-boxdark">
    {/* Header with icon */}
    <div className="px-6 py-5 bg-boxdark2 sm:px-8">
      <div className="flex items-center space-x-3">
      <svg 
      className="h-6 w-6 text-primary" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
</svg>
        <h3 className="text-lg font-semibold leading-6 text-white">Account Information</h3>
      </div>
    </div>

        {/* Body container with <dl> fields */}
        <div className="border-t border-gray-100/10 px-4 py-5 sm:p-0">
          <dl className="sm:divide-y sm:divide-gray-100/10">

            {/* Editable Email Row */}
            <div className="py-4 sm:grid sm:grid-cols-3 sm:py-5 sm:px-6">
            <dt className="flex items-center gap-4 text-sm font-medium text-white">
            <svg className="mr-2 h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
</svg>
            Email Address
          </dt>
          <dd className="mt-1 text-md text-white sm:col-span-2 sm:mt-0">
                <EditableField field="email" value={user.email ?? ''} />
              </dd>
            </div>

            {/* Editable Username Row */}
            <div className="py-4 sm:grid sm:grid-cols-3 sm:py-5 sm:px-6">
            <dt className="flex items-center gap-4 text-sm font-medium text-white">
            <svg className="mr-2 h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />

            </svg>
            Username
          </dt>
          <dd className="mt-1 text-md text-white sm:col-span-2 sm:mt-0">
                <EditableField field="username" value={user.username ?? ''} />
              </dd>
            </div>

            {/* Subscription / Plan */}
            <div className="py-4 sm:grid sm:grid-cols-3 sm:py-5 sm:px-6">
            <dt className="flex items-center gap-4 text-sm font-medium text-white">
            <svg className="mr-2 h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
            </svg>
            Subscription / Plan
          </dt>
          <UserCurrentPaymentPlan
                subscriptionStatus={user.subscriptionStatus as SubscriptionStatus}
                subscriptionPlan={user.subscriptionPlan}
                datePaid={user.datePaid}
              />
            </div>

            {/* About row / placeholder */}
            <div className="py-4 sm:grid sm:grid-cols-3 sm:py-5 sm:px-6">
            <dt className="flex items-center gap-4 text-sm font-medium text-white">
            <svg className="mr-2 h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
            </svg>
            About
          </dt>
              <dd className="mt-1 text-md text-white sm:col-span-2 sm:mt-0">
                <div className="space-y-2">
                  <p>Account Type: {user.subscriptionStatus || 'Free'}</p>
                  <p>Newsletter: {userDetails.sendNewsletter ? 'Subscribed' : 'Not subscribed'}</p>
                  <p>Last Active: {new Date(userDetails.lastActiveTimestamp).toLocaleDateString()}</p>
                  <p>Member Since: {new Date(userDetails.createdAt).toLocaleDateString()}</p>
                  {user.datePaid && (
                    <p>Paid Member Since: {new Date(user.datePaid).toLocaleDateString()}</p>
                  )}
                </div>
              </dd>
            </div>

            {/* Additional Settings Row */}
            <AdditionalSettings />
          </dl>
        </div>

        {/* Log Out Button */}
        <div className="inline-flex w-full justify-end">
  <button
    onClick={logout}
    className="inline-flex items-center justify-center mb-5 mx-5 py-2 px-8 
               border border-transparent shadow-md text-md font-medium 
               rounded-md text-white bg-bodydark2 hover:bg-boxdark2
               focus:outline-none ring-1 ring-primary gap-2"
  >
    Logout
    <svg 
      className="h-5 w-5 text-primary" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
    </svg>
  </button>
</div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------
   1) EDITABLE FIELD COMPONENT
   ------------------------------------------------------------------ */
function EditableField({
  field,
  value,
}: {
  field: keyof User
  value: string
}) {
  const [isEditing, setIsEditing] = useState(false)
  const [inputValue, setInputValue] = useState(value)
  const [isSaving, setIsSaving] = useState(false)
  const updateUser = useAction(updateCurrentUser)

  const handleSave = async () => {
    setIsSaving(true)
    try {
      await updateUser({ [field]: inputValue })
      setIsEditing(false)
    } catch (error) {
      console.error(`Error updating ${field}:`, error)
    } finally {
      setIsSaving(false)
    }
  }

  if (isEditing) {
    return (
      <div className="flex items-center space-x-4">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="flex-grow p-2 rounded border border-primary bg-boxdark2 text-white"
        />
        <button
  onClick={handleSave}
  disabled={isSaving}
  className="px-4 py-2 bg-success text-white rounded hover:bg-success/90 
             transition-all duration-300 flex items-center space-x-2"
>
  {isSaving ? (
    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
    </svg>
  ) : (
    'Save'
  )}
</button>
        <button
          onClick={() => {
            setIsEditing(false)
            setInputValue(value)
          }}
          className="px-4 py-2 bg-danger text-white rounded hover:bg-danger/90"
        >
          Cancel
        </button>
      </div>
    )
  }

  // Non-editing view
  return (
    <div className="flex items-center space-x-4">
      <span className="text-white">{value || 'Not provided'}</span>
      <button
        onClick={() => setIsEditing(true)}
        className="px-4 py-2 bg-bodydark2 border border-primary text-white rounded hover:bg-boxdark2"
      >
        Edit
      </button>
    </div>
  )
}

/* ------------------------------------------------------------------
   2) USER SUBSCRIPTION COMPONENT
   ------------------------------------------------------------------ */
type UserCurrentPaymentPlanProps = {
  subscriptionPlan: string | null
  subscriptionStatus: SubscriptionStatus | null
  datePaid: Date | null
}
function UserCurrentPaymentPlan({
  subscriptionPlan,
  subscriptionStatus,
  datePaid,
}: UserCurrentPaymentPlanProps) {
  if (subscriptionStatus && subscriptionPlan && datePaid) {
    return (
      <>
        <dd className="mt-1 text-md text-white sm:col-span-1 sm:mt-0">
          {getUserSubscriptionStatusDescription({
            subscriptionPlan,
            subscriptionStatus,
            datePaid,
          })}
        </dd>
        {subscriptionStatus !== 'expired' ? <CustomerPortalButton /> : <BuyMoreButton />}
      </>
    )
  }

  return (
    <dd className="mt-1 text-md text-white sm:col-span-1 sm:mt-0">
      No subscription
    </dd>
  )
}

function getUserSubscriptionStatusDescription({
  subscriptionPlan,
  subscriptionStatus,
  datePaid,
}: {
  subscriptionPlan: string
  subscriptionStatus: SubscriptionStatus
  datePaid: Date
}) {
  const planName = prettyPaymentPlanName(parsePaymentPlanId(subscriptionPlan))
  const endOfBillingPeriod = prettyPrintEndOfBillingPeriod(datePaid)
  return prettyPrintStatus(planName, subscriptionStatus, endOfBillingPeriod)
}

function prettyPrintStatus(
  planName: string,
  subscriptionStatus: SubscriptionStatus,
  endOfBillingPeriod: string
): string {
  const statusToMessage: Record<SubscriptionStatus, string> = {
    active: `${planName}`,
    past_due: `Payment for your ${planName} plan is past due! Please update your subscription payment information.`,
    cancelled: `Your ${planName} plan subscription has been canceled, but remains active until the end of the current billing period${endOfBillingPeriod}`,
    expired: `Your previous subscription has been canceled and is no longer active.`,
  }
  if (subscriptionStatus in statusToMessage) {
    return statusToMessage[subscriptionStatus]
  }
  throw new Error(`Invalid subscriptionStatus: ${subscriptionStatus}`)
}

function prettyPrintEndOfBillingPeriod(date: Date) {
  const oneMonthFromNow = new Date(date)
  oneMonthFromNow.setMonth(oneMonthFromNow.getMonth() + 1)
  return ': ' + oneMonthFromNow.toLocaleDateString()
}

function BuyMoreButton() {
  return (
    <div className="ml-4 flex-shrink-0 sm:col-span-1 sm:mt-0">
      <WaspRouterLink
        to={routes.PricingPageRoute.to}
        className="font-medium text-md text-primary hover:underline"
      >
        Upgrade
      </WaspRouterLink>
    </div>
  )
}

function CustomerPortalButton() {
  const {
    data: customerPortalUrl,
    isLoading: isCustomerPortalUrlLoading,
    error: customerPortalUrlError,
  } = useQuery(getCustomerPortalUrl)

  const handleClick = () => {
    if (customerPortalUrlError) {
      console.error('Error fetching customer portal url')
    }
    if (customerPortalUrl) {
      window.open(customerPortalUrl, '_blank')
    } else {
      console.error('Customer portal URL is not available')
    }
  }

  return (
    <div className="ml-4 flex-shrink-0 sm:col-span-1 sm:mt-0">
      <button
        onClick={handleClick}
        disabled={isCustomerPortalUrlLoading}
        className="font-medium text-md text-primary hover:underline"
      >
        Manage Subscription
      </button>
    </div>
  )
}

/* ------------------------------------------------------------------
   3) ADDITIONAL SETTINGS (Password changes, etc.)
   ------------------------------------------------------------------ */
function AdditionalSettings() {
  const navigate = useNavigate()

  const handleChangePassword = () => {
    navigate('/passwordreset')
  }
  const handleContactUs = () => {
    navigate('/contact')
  }

  // Renders as a row in the <dl> to match your other fields
  return (
    <div className="py-4 sm:grid sm:grid-cols-3 sm:py-5 sm:px-6">
    <dt className="flex items-center gap-4 text-sm font-medium text-white">
    <svg className="mr-2 h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        Additional Settings
      </dt>
      <dd className="text-md text-white sm:col-span-2">
        <ul className="flex gap-10 items-center">
          <li>
            <button
              onClick={handleChangePassword}
              className="text-primary hover:underline"
            >
              Change Password
            </button>
          </li>
          <li>
            <button
              onClick={handleContactUs}
              className="text-primary hover:underline"
            >
              Contact Us
            </button>
          </li>
        </ul>
      </dd>
    </div>
  )
}
