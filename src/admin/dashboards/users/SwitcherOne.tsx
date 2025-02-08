import React, { useState } from 'react';
import { type User } from 'wasp/entities';
import { cn } from '../../../client/cn';

const SwitcherOne = ({ user, updateUserById }: { user?: Partial<User>; updateUserById?: (id: string, data: Partial<User>) => Promise<void> }) => {
  const [enabled, setEnabled] = useState<boolean>(user?.isAdmin || false);

  return (
    <div className='relative'>
      <label htmlFor={`toggle1-${user?.id}`} className='flex cursor-pointer select-none items-center'>
        <span className="sr-only">Toggle admin status</span>
        <div className='relative'>
          <input
            type='checkbox'
            id={`toggle1-${user?.id}`}
            className='sr-only'
            onChange={() => {
              setEnabled(!enabled);
              updateUserById?.(user?.id || '', { isAdmin: !enabled });
            }}
          />
          <div className='reblock h-8 w-14 rounded-full bg-[#5A616B]'></div>
          <div
            className={cn('absolute left-1 top-1 h-6 w-6 rounded-full  bg-gray-400 transition', {
              '!right-1 !translate-x-full !bg-primary !': enabled,
            })}
          ></div>
        </div>
      </label>
    </div>
  );
};

export default SwitcherOne;
