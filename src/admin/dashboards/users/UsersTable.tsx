import { type SubscriptionStatus } from '../../../payment/plans';
import { updateUserById, useQuery, getPaginatedUsers } from 'wasp/client/operations';
import React, { useState, useEffect } from 'react';
import SwitcherOne from './SwitcherOne';
import LoadingSpinner from '../../layout/LoadingSpinner';
import DropdownEditDelete from './DropdownEditDelete';

const UsersTable = () => {
  const [skip, setskip] = useState(0);
  const [page, setPage] = useState(1);
  const [email, setEmail] = useState<string | undefined>(undefined);
  const [isAdminFilter, setIsAdminFilter] = useState<boolean | undefined>(undefined);
  const [statusOptions, setStatusOptions] = useState<SubscriptionStatus[]>([]);
  const { data, isLoading } = useQuery(getPaginatedUsers, {
    skip,
    emailContains: email,
    isAdmin: isAdminFilter,
    subscriptionStatus: statusOptions?.length > 0 ? statusOptions : undefined,
  });

  useEffect(() => {
    setPage(1);
  }, [email, statusOptions]);

  useEffect(() => {
    setskip((page - 1) * 10);
  }, [page]);

  return (
    <div className='flex flex-col gap-4'>
      <div className='rounded-sm border border-bodydark shadow-default bg-boxdark'>
        <div className='flex-col flex items-start justify-between p-6 gap-3 w-full bg-gray-700/50'>
          <span className='text-sm font-medium'>Filters:</span>
          <div className='flex items-center justify-between gap-3 w-full px-2'>
            <div className='relative flex items-center gap-3 '>
              <label htmlFor='email-filter' className='block text-sm text-white'>
                email:
              </label>
              <input
                type='text'
                id='email-filter'
                placeholder='dude@example.com'
                onChange={(e) => {
                  setEmail(e.currentTarget.value);
                }}
                className='rounded border border-bodydark py-2 px-5  outline-none transition  active:border-primary disabled:cursor-default disabled:bg-white  bg-boxdark focus:border-primary'
              />
              <label htmlFor='status-filter' className='block text-sm ml-2  text-white'>
                status:
              </label>
              <div className='flex-grow relative z-20 rounded border border-bodydark pr-8 outline-none  transition focus:border-primary active:border-primary  bg-boxdark'>
                <div className='flex items-center'>
                  {!!statusOptions && statusOptions.length > 0 ? (
                    statusOptions.map((opt) => (
                      <span
                        key={opt}
                        className='z-30 flex items-center my-1 mx-2 py-1 px-2 outline-none transition active:border-primary disabled:cursor-default disabled:bg-white border-boxdark bg-boxdark focus:border-primary'
                      >
                        {opt ? opt : 'has not subscribed'}
                        <span
                          onClick={(e) => {
                            e.stopPropagation();
                            setStatusOptions((prevValue) => {
                              return prevValue?.filter((val) => val !== opt);
                            });
                          }}
                          className='z-30 cursor-pointer pl-2 hover:text-danger'
                        >
                          <svg
                            width='14'
                            height='14'
                            viewBox='0 0 12 12'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              fillRule='evenodd'
                              clipRule='evenodd'
                              d='M9.35355 3.35355C9.54882 3.15829 9.54882 2.84171 9.35355 2.64645C9.15829 2.45118 8.84171 2.45118 8.64645 2.64645L6 5.29289L3.35355 2.64645C3.15829 2.45118 2.84171 2.45118 2.64645 2.64645C2.45118 2.84171 2.45118 3.15829 2.64645 3.35355L5.29289 6L2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L6 6.70711L8.64645 9.35355C8.84171 9.54882 9.15829 9.54882 9.35355 9.35355C9.54882 9.15829 9.54882 8.84171 9.35355 8.64645L6.70711 6L9.35355 3.35355Z'
                              fill=''
                            ></path>
                          </svg>
                        </span>
                      </span>
                    ))
                  ) : (
                    <span className=' text-gray-500 py-2 px-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-white border-boxdark bg-boxdark focus:border-primary'>
                      Select Status Filters
                    </span>
                  )}
                </div>
                <select
                  onChange={(e) => {
                    const targetValue = e.target.value === '' ? null : e.target.value;
                    setStatusOptions((prevValue) => {
                      if (prevValue?.includes(targetValue as SubscriptionStatus)) {
                        return prevValue?.filter((val) => val !== targetValue);
                      } else if (prevValue) {
                        return [...prevValue, targetValue as SubscriptionStatus];
                      } else {
                        return prevValue;
                      }
                    });
                  }}
                  name='status-filter'
                  id='status-filter'
                  className='absolute top-0 left-0 z-20 h-full w-full  opacity-0'
                >
                  <option value=''>Select filters</option>
                  {['past_due', 'canceled', 'active', 'deleted', null].map((status) => {
                    if (!statusOptions.includes(status as SubscriptionStatus)) {
                      return <option key={status} value={status || ''}>{status ? status : 'has not subscribed'}</option>;
                    }
                  })}
                </select>
                <span className='absolute top-1/2 right-4 z-10 -translate-y-1/2'>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <g opacity='0.8'>
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z'
                        fill='#637381'
                      ></path>
                    </g>
                  </svg>
                </span>
              </div>
              <div className='flex items-center gap-2'>
                <label htmlFor='isAdmin-filter' className='block text-sm ml-2 text-gray-700 text-white'>
                  isAdmin:
                </label>
                <select
                  name='isAdmin-filter'
                  onChange={(e) => {
                    if (e.target.value === 'both') {
                      setIsAdminFilter(undefined);
                    } else {
                      setIsAdminFilter(e.target.value === 'true');
                    }
                  }}
                  className='relative z-20 w-full appearance-none rounded border border-bodydark  p-2 pl-4 pr-8  outline-none transition focus:border-primary active:border-primary border-boxdark bg-boxdark'
                >
                  <option value='both'>both</option>
                  <option value='true'>true</option>
                  <option value='false'>false</option>
                </select>
              </div>
            </div>
            {!isLoading && (
              <div className='max-w-60'>
                <span className='text-md mr-2 text-black text-white'>page</span>
                <input
                  type='number'
                  value={page}
                  min={1}
                  max={data?.totalPages}
                  onChange={(e) => {
                    setPage(parseInt(e.currentTarget.value));
                  }}
                  className='rounded-md border-1 border-stroke bg-transparent  px-4 font-medium outline-none transition focus:border-primary active:border-primary border-boxdark bg-boxdark focus:border-primary'
                />
                <span className='text-md text-black text-white'> / {data?.totalPages} </span>
              </div>
            )}
          </div>
        </div>

        <div className='grid grid-cols-12 border-t-4  border-bodydark py-4.5 px-4 border-boxdark md:px-6 '>
          <div className='col-span-3 flex items-center'>
            <p className='font-medium'>Email / Username</p>
          </div>
          <div className='col-span-3 hidden items-center sm:flex'>
            <p className='font-medium'>Last Active</p>
          </div>
          <div className='col-span-2 flex items-center'>
            <p className='font-medium'>Subscription Status</p>
          </div>
          <div className='col-span-2 flex items-center'>
            <p className='font-medium'>Lemon Squeezy ID</p>
          </div>
          <div className='col-span-1 flex items-center'>
            <p className='font-medium'>Is Admin</p>
          </div>
          <div className='col-span-1 flex items-center'>
            <p className='font-medium'></p>
          </div>
        </div>
        {isLoading && (
          <div className='-mt-40'>
            <LoadingSpinner />
          </div>
        )}
        {!!data?.users &&
          data?.users?.length > 0 &&
          data.users.map((user) => (
            <div
              key={user.id}
              className='grid grid-cols-12 gap-4 border-t border-bodydark py-4.5 px-4 border-boxdark  md:px-6 '
            >
              <div className='col-span-3 flex items-center'>
                <div className='flex flex-col gap-1 '>
                  <p className='text-sm text-black text-white'>{user.email}</p>
                  <p className='text-sm text-black text-white'>{user.username}</p>
                </div>
              </div>

              <div className='col-span-3 hidden items-center sm:flex'>
                <p className='text-sm text-black text-white'>
                  {user.lastActiveTimestamp.toLocaleDateString() +
                    ' ' +
                    user.lastActiveTimestamp.toLocaleTimeString()}
                </p>
              </div>
              <div className='col-span-2 flex items-center'>
                <p className='text-sm text-black text-white'>{user.subscriptionStatus}</p>
              </div>
              <div className='col-span-2 flex items-center'>
                <p className='text-sm text-success'>{user.paymentProcessorUserId}</p>
              </div>
              <div className='col-span-1 flex items-center'>
                <div className='text-sm text-black text-white'>
                  <SwitcherOne 
                    user={user} 
                    updateUserById={async (id, data) => {
                      await updateUserById({ id, data });
                    }} 
                  />
                </div>
              </div>
              <div className='col-span-1 flex items-center'>
                <DropdownEditDelete />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default UsersTable;
