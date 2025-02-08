import { AuthUser } from 'wasp/auth';
import { getMessages, updateMessageStatus, useQuery } from 'wasp/client/operations';
import { useRedirectHomeUnlessUserIsAdmin } from '../admin/useRedirectHomeUnlessUserIsAdmin';
import React, { useState } from 'react';
import { ContactFormMessage } from 'wasp/entities';

type Props = {
  readonly user: AuthUser;
};

function AdminMessages({ user }: Props) {
  useRedirectHomeUnlessUserIsAdmin({ user });
  const [filter, setFilter] = useState<'all' | 'unread' | 'archived'>('all');
  const [page, setPage] = useState(1);
  const limit = 10;

  const { data: messages, isLoading, error } = useQuery(getMessages, { page, limit });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const filteredMessages = messages?.filter((msg: ContactFormMessage) => {
    if (filter === 'unread') return !msg.isRead;
    if (filter === 'archived') return msg.isArchived;
    return true;
  });

  const handleMarkAsRead = async (messageId: string) => {
    try {
      await updateMessageStatus({ messageId, status: { isRead: true } });
    } catch (error) {
      console.error('Error marking message as read:', error);
    }
  };

  const handleArchive = async (messageId: string) => {
    try {
      await updateMessageStatus({ messageId, status: { isArchived: true } });
    } catch (error) {
      console.error('Error archiving message:', error);
    }
  };

  const handleMarkAsResolved = async (messageId: string) => {
    try {
      await updateMessageStatus({ messageId, status: { isResolved: true } });
    } catch (error) {
      console.error('Error marking message as resolved:', error);
    }
  };

  return (
    <div className='p-4'>
      <div className='mb-6'>
        <h1 className='text-2xl font-bold text-white mb-4'>Messages</h1>
        <div className='flex gap-4 mb-4'>
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded ${
              filter === 'all' ? 'bg-primary text-white' : 'bg-boxdark text-white'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('unread')}
            className={`px-4 py-2 rounded ${
              filter === 'unread' ? 'bg-primary text-white' : 'bg-boxdark text-white'
            }`}
          >
            Unread
          </button>
          <button
            onClick={() => setFilter('archived')}
            className={`px-4 py-2 rounded ${
              filter === 'archived' ? 'bg-primary text-white' : 'bg-boxdark text-white'
            }`}
          >
            Archived
          </button>
        </div>
      </div>

      <div className='grid gap-4'>
        {filteredMessages?.map((message: ContactFormMessage) => (
          <div
            key={message.id}
            className={`p-4 rounded-lg ${
              message.isRead ? 'bg-boxdark' : 'bg-boxdark2'
            } border border-boxdark`}
          >
            <div className='flex justify-between items-start mb-2'>
              <div>
                <h3 className='font-semibold text-white'>{message.name}</h3>
                <p className='text-sm text-bodydark'>Email: {message.email}</p>
                {message.phone && <p className='text-sm text-bodydark'>Phone: {message.phone}</p>}
                {message.subject && (
                  <p className='text-sm text-bodydark'>Subject: {message.subject}</p>
                )}
                {message.department && (
                  <p className='text-sm text-bodydark'>Department: {message.department}</p>
                )}
                {message.urgency && (
                  <p className='text-sm text-bodydark'>Urgency: {message.urgency}</p>
                )}
                {message.newsletterOptIn !== undefined && (
                  <p className='text-sm text-bodydark'>
                    Newsletter Opt-In: {message.newsletterOptIn ? 'Yes' : 'No'}
                  </p>
                )}
              </div>
              <div className='flex gap-2'>
                {!message.isRead && (
                  <button
                    onClick={() => handleMarkAsRead(message.id)}
                    className='px-3 py-1 text-sm rounded bg-success text-white'
                  >
                    Mark as Read
                  </button>
                )}
                {!message.isArchived && (
                  <button
                    onClick={() => handleArchive(message.id)}
                    className='px-3 py-1 text-sm rounded bg-danger text-white'
                  >
                    Archive
                  </button>
                )}
                {!message.isResolved && (
                  <button
                    onClick={() => handleMarkAsResolved(message.id)}
                    className='px-3 py-1 text-sm rounded bg-warning text-white'
                  >
                    Mark as Resolved
                  </button>
                )}
              </div>
            </div>
            <p className='text-white whitespace-pre-wrap'>{message.message}</p>
            <p className='text-sm text-bodydark mt-2'>
              {new Date(message.createdAt).toLocaleString()}
            </p>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className='mt-6 flex justify-between'>
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className='px-4 py-2 rounded bg-boxdark text-white disabled:opacity-50'
        >
          Previous
        </button>
        <span className='text-white'>Page {page}</span>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          className='px-4 py-2 rounded bg-boxdark text-white'
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default AdminMessages;
