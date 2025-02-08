import React from 'react';
import { Link as WaspRouterLink, routes } from 'wasp/client/router';
import { getMessages, useQuery } from 'wasp/client/operations';
import { useAuth } from 'wasp/client/auth';

const MessageButton = () => {
  const { data: user } = useAuth();
  const { data: messages } = useQuery(getMessages, {
    enabled: !!user?.isAdmin // Only fetch if user is admin
  });
  
  const unreadCount = messages?.filter((msg) => !msg.isRead).length || 0;

  if (!user?.isAdmin) return null; // Don't show button for non-admins

  return (
    <li className='relative'>
      <WaspRouterLink
        className='relative flex h-8.5 w-8.5 items-center justify-center rounded-full border-[0.5px] hover:text-primary border-boxdark bg-boxdark2 text-white hover:bg-boxdark2 duration-300 ease-in-out'
        to={routes.AdminMessagesRoute.to}
      >
        {unreadCount > 0 && (
          <span className='absolute -top-0.5 -right-0.5 z-1 h-2 w-2 rounded-full bg-danger'>
            <span className='absolute -z-1 inline-flex h-full w-full animate-ping rounded-full bg-danger opacity-75'></span>
          </span>
        )}
        <svg
          className='fill-bodydark'
          width='18'
          height='18'
          viewBox='0 0 18 18'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M10.9688 1.57495H7.03135C3.43135 1.57495 0.506348 4.41558 0.506348 7.90308C0.506348 11.3906 2.75635 13.8375 8.26885 16.3125C8.40947 16.3687 8.52197 16.3968 8.6626 16.3968C8.85947 16.3968 9.02822 16.3406 9.19697 16.2281C9.47822 16.0593 9.64697 15.75 9.64697 15.4125V14.2031H10.9688C14.5688 14.2031 17.522 11.3625 17.522 7.87495C17.522 4.38745 14.5688 1.57495 10.9688 1.57495Z'
            fill=''
          />
        </svg>
      </WaspRouterLink>
    </li>
  );
};

export default MessageButton;