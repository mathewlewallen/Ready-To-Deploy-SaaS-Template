import React from 'react';

export interface Event {
    id: string;
    startDate: string;
    endDate?: string;
    title: string;
    details: string;
  }
  
export interface CalendarEvent extends Event {
  onClick: () => void;
}
interface EventModalProps {
  event: Event;
  onClose: () => void;
  onDelete?: (id: string) => void;
  onEdit?: (event: Event) => void;
}

const EventModal = ({ event, onClose, onDelete, onEdit }: EventModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-11/12 max-w-lg p-6 bg-boxdark rounded-lg shadow-xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-white">{event.title}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        {/* Date Info */}
        <div className="mb-4">
          <p className="text-bodydark">Start: {new Date(event.startDate).toLocaleDateString()}</p>
          {event.endDate && <p className="text-bodydark">End: {new Date(event.endDate).toLocaleDateString()}</p>}
        </div>
        {/* Details */}
        <p className="mb-6 text-white">{event.details}</p>
        {/* Action Buttons */}
        <div className="flex justify-end space-x-3">
          {onEdit && (
            <button
              onClick={() => onEdit(event)}
              className="px-4 py-2 bg-primary text-black rounded hover:bg-opacity-90"
            >
              Edit
            </button>
          )}
          {onDelete && (
            <button
              onClick={() => onDelete(event.id)}
              className="px-4 py-2 bg-danger text-white rounded hover:bg-opacity-90"
            >
              Delete
            </button>
          )}
          <button
            onClick={onClose}
            className="px-4 py-2 bg-boxdark2 text-white rounded hover:bg-opacity-90"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventModal;
