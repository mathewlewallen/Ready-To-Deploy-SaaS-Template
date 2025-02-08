import React, { useState, useEffect } from 'react';
import { type AuthUser } from 'wasp/auth';
import Breadcrumb from '../../layout/Breadcrumb';
import DefaultLayout from '../../layout/DefaultLayout';
import { useRedirectHomeUnlessUserIsAdmin } from '../../useRedirectHomeUnlessUserIsAdmin';
import useWindowSize from '../../../client/hooks/useWindowSize';
import EventModal, { type Event } from './EventModal';
import usePersistedState from '../../../client/hooks/usePersistedState';

const Calendar = ({ user }: { readonly user: AuthUser }) => {
  useRedirectHomeUnlessUserIsAdmin({ user });
  const { width } = useWindowSize();
  const isMobile = width < 640;
  const calendarClass = isMobile ? 'grid-cols-3' : 'grid-cols-7';

  const [events, setEvents] = usePersistedState<Event[]>('calendar-events', []);
  const [newEvent, setNewEvent] = useState<Event>({
    id: '',
    startDate: '',
    title: '',
    details: '',
  });
  const [showEndDate, setShowEndDate] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  useEffect(() => {
    // Sync with the actual current month
    const today = new Date();
    setCurrentMonth(new Date(today.getFullYear(), today.getMonth(), 1));
  }, []);

  // Generate days for the current month
  const getDaysInMonth = (month: number, year: number) => {
    const firstDayOfMonth = new Date(year, month, 1).getDay(); // Day of the week for the 1st (0 = Sunday)
    const daysInMonth = new Date(year, month + 1, 0).getDate(); // Total days in the month
    const daysArray = new Array(firstDayOfMonth).fill(''); // Empty slots for days before the 1st

    for (let day = 1; day <= daysInMonth; day++) {
      daysArray.push(new Date(year, month, day).toISOString().split('T')[0]);
    }

    return daysArray;
  };

  const days = getDaysInMonth(currentMonth.getMonth(), currentMonth.getFullYear());

  const changeMonth = (direction: 'prev' | 'next') => {
    const newMonth = new Date(currentMonth.setMonth(currentMonth.getMonth() + (direction === 'next' ? 1 : -1)));
    setCurrentMonth(newMonth);
  };

  const handleAddEvent = () => {
    if (!newEvent.startDate || !newEvent.title || !newEvent.details) {
      alert('Please fill out all required fields.');
      return;
    }
    setEvents([...events, { ...newEvent, id: Date.now().toString() }]);
    setNewEvent({ id: '', startDate: '', title: '', details: '' });
    setShowEndDate(false);
  };

  const getEventsForDate = (date: string) =>
    events.filter((event) =>
      event.endDate
        ? date >= event.startDate && date <= event.endDate
        : event.startDate === date
    );

  const handleEventClick = (event: Event) => setSelectedEvent(event);
  const handleDeleteEvent = (id: string) => setEvents(events.filter((event) => event.id !== id));
  const handleEditEvent = (event: Event) => {
    setNewEvent(event);
    setShowEndDate(!!event.endDate);
    setSelectedEvent(null);
  };

  const isToday = (date: string) => date === new Date().toISOString().split('T')[0];

  return (
    <DefaultLayout user={user}>
      <Breadcrumb pageName="Calendar" />
      <div className="w-full overflow-y-auto px-4 pb-8">
        {/* Add Event Form */}
        <div className="w-full max-w-full p-6 mb-3 rounded-lg border border-bodydark bg-boxdark shadow-xl">
          <h2 className="text-xl font-semibold text-white mb-4">Add New Event</h2>
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <label htmlFor='start-date' className="block text-sm font-medium text-white mb-1">Start Date</label>
              <input
                id='start-date'
                type="date"
                value={newEvent.startDate}
                onChange={(e) => setNewEvent({ ...newEvent, startDate: e.target.value })}
                className="w-full p-3 rounded border border-bodydark bg-boxdark2 text-white focus:outline-primary"
              />
            </div>
            {showEndDate && (
              <div className="flex-1">
                <label htmlFor='end-date' className="block text-sm font-medium text-white mb-1">End Date</label>
                <input
                  id='end-date'
                  type="date"
                  value={newEvent.endDate}
                  onChange={(e) => setNewEvent({ ...newEvent, endDate: e.target.value })}
                  className="w-full p-3 rounded border border-bodydark bg-boxdark2 text-white focus:outline-primary"
                />
              </div>
            )}
            <button
              onClick={() => setShowEndDate(!showEndDate)}
              className="px-6 py-3 mt-6 lg:mt-0 rounded bg-boxdark2 border border-bodydark text-primary hover:text-boxdark2 font-semibold hover:bg-primary"
            >
              {showEndDate ? 'Single Date' : 'Date Range'}
            </button>
          </div>
          <div className="mt-4">
            <label htmlFor='event-title' className="block text-sm font-medium text-white mb-1">Event Title</label>
            <input
              id='event-title'
              type="text"
              placeholder="Enter Event Title"
              value={newEvent.title}
              onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
              className="w-full p-3 rounded border border-bodydark bg-boxdark2 text-white focus:outline-primary"
            />
          </div>
          <div className="mt-4">
            <label htmlFor='event-details' className="block text-sm font-medium text-white mb-1">Event Details</label>
            <textarea
              id='event-details'
              placeholder="Enter Event Details"
              value={newEvent.details}
              onChange={(e) => setNewEvent({ ...newEvent, details: e.target.value })}
              className="w-full p-3 rounded border border-bodydark bg-boxdark2 text-white focus:outline-primary"
              rows={4}
            ></textarea>
          </div>
          <button
            onClick={handleAddEvent}
            className="w-full px-4 py-3 mt-6 rounded bg-primary text-black font-semibold hover:bg-secondary"
          >
            Add Event
          </button>
        </div>

        {/* Calendar Section */}
        <div className="w-full max-w-full rounded-lg border border-bodydark bg-boxdark shadow-xl pb-8">
          <div className="flex justify-between items-center p-6 bg-boxdark2 text-white">
            <button
              onClick={() => changeMonth('prev')}
              className="px-6 py-2 rounded bg-primary text-black font-semibold hover:bg-secondary"
            >
              Previous
            </button>
            <h3 className="text-xl font-semibold">
              {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
            </h3>
            <button
              onClick={() => changeMonth('next')}
              className="px-6 py-2 rounded bg-primary text-black font-semibold hover:bg-secondary"
            >
              Next
            </button>
          </div>
          <table className={`w-full table-fixed ${calendarClass}`}>
            <thead>
              <tr className="grid grid-cols-7 bg-boxdark2 text-white">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                  <th key={day} className="py-4 text-sm font-semibold sm:text-base text-center">
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: Math.ceil(days.length / 7) }).map((_, week) => (
                <tr key={week} className="grid grid-cols-7 gap-1">
                  {days.slice(week * 7, week * 7 + 7).map((date, index) => (
                    <td
                      key={index}
                      className={`relative flex flex-col items-center p-3 sm:p-4 h-20 sm:h-24 border ${
                        date && isToday(date) ? 'bg-primary text-black' : 'border-bodydark hover:bg-graydark'
                      } transition-all duration-200`}
                    >
                      {date && <span className="font-medium">{new Date(date).getDate()}</span>}
                      {date &&
                        getEventsForDate(date).map((event) => (
                          <div
                            key={event.id}
                            onClick={() => handleEventClick(event)}
                            className="mt-2 w-full rounded border-l-4 border-primary bg-boxdark2 p-2 text-left cursor-pointer hover:bg-opacity-80"
                          >
                            <p className="text-sm font-semibold text-white truncate">{event.title}</p>
                            <p className="text-xs text-bodydark truncate">{event.details}</p>
                          </div>
                        ))}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Event Modal */}
      {selectedEvent && (
        <EventModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
          onDelete={handleDeleteEvent}
          onEdit={handleEditEvent}
        />
      )}
    </DefaultLayout>
  );
};

export default Calendar;
