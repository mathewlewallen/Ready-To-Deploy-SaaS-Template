import React, { useState } from 'react';
import { createMessage } from 'wasp/client/operations';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type FormStatus = 'idle' | 'submitting';

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    department: '',
    urgency: '',
    newsletterOptIn: false,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      await createMessage(formData);
      toast.success('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        department: '',
        urgency: '',
        newsletterOptIn: false,
      });
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setStatus('idle');
    }
  };

  return (
    <div className='rounded-lg border-2 shadow-lg border-primary bg-boxdark p-6'>
      <ToastContainer />
      <h3 className='text-2xl font-semibold text-white mb-4'>Contact Form</h3>
      <form onSubmit={handleSubmit} className='space-y-6'>
        <div className='flex flex-col sm:flex-row gap-4'>
          <div className='w-full'>
            <label className='block text-white mb-2' htmlFor='name'>Name <span className='text-danger'>*</span></label>
            <input
              id='name'
              type='text'
              placeholder='Enter your name'
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className='w-full rounded border bg-boxdark py-2 px-4 text-white focus:border-primary focus:ring-1 focus:ring-primary'
            />
          </div>
          <div className='w-full'>
            <label className='block text-white mb-2' htmlFor='email'>Email <span className='text-danger'>*</span></label>
            <input
              id='email'
              type='email'
              placeholder='Enter your email'
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className='w-full rounded border bg-boxdark py-2 px-4 text-white focus:border-primary focus:ring-1 focus:ring-primary'
            />
          </div>
        </div>
        <div className='flex flex-col sm:flex-row gap-4'>
          <div className='w-full'>
            <label className='block text-white mb-2' htmlFor='phone'>Phone</label>
            <input
              id='phone'
              type='tel'
              placeholder='Enter your phone number'
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className='w-full rounded border bg-boxdark py-2 px-4 text-white focus:border-primary focus:ring-1 focus:ring-primary'
            />
          </div>
          <div className='w-full'>
            <label className='block text-white mb-2' htmlFor='subject'>Subject</label>
            <input
              id='subject'
              type='text'
              placeholder='Enter subject'
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className='w-full rounded border bg-boxdark py-2 px-4 text-white focus:border-primary focus:ring-1 focus:ring-primary'
            />
          </div>
        </div>
        <div>
          <label className='block text-white mb-2' htmlFor='department'>Department</label>
          <select
            id='department'
            value={formData.department}
            onChange={(e) => setFormData({ ...formData, department: e.target.value })}
            className='w-full rounded border bg-boxdark py-2 px-4 text-white focus:border-primary focus:ring-1 focus:ring-primary'
          >
            <option value=''>Select Department</option>
            <option value='support'>Support</option>
            <option value='sales'>Sales</option>
            <option value='general'>General Inquiry</option>
            <option value='feedback'>Feedback</option>
            <option value='other'>Other</option>
          </select>
        </div>
        <div>
          <label className='block text-white mb-2' htmlFor='message'>Message <span className='text-danger'>*</span></label>
          <textarea
            id='message'
            rows={6}
            placeholder='Type your message'
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
            className='w-full rounded border bg-boxdark py-2 px-4 text-white focus:border-primary focus:ring-1 focus:ring-primary'
          />
        </div>
        <div className='flex items-center'>
          <input
            id='newsletterOptIn'
            type='checkbox'
            checked={formData.newsletterOptIn}
            onChange={(e) => setFormData({ ...formData, newsletterOptIn: e.target.checked })}
            className='rounded border bg-boxdark focus:ring-primary focus:border-primary'
          />
          <label htmlFor='newsletterOptIn' className='ml-2 text-white'>Subscribe to our newsletter</label>
        </div>
        <button
          type='submit'
          disabled={status === 'submitting'}
          className='w-full hover:bg-primary border border-primary hover:text-boxdark bg-boxdark text-white py-3 rounded hover:bg-opacity-90 transition duration-300 disabled:opacity-50'
        >
          {status === 'submitting' ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;