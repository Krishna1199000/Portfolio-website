import { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

export function BugReportForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: '',
    screenshot: ''
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          to_email: 'krishnag17503@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          message: formData.description,
          screenshot: formData.screenshot
        },
        'YOUR_PUBLIC_KEY'
      );
      alert('Bug report submitted successfully!');
      setFormData({ name: '', email: '', description: '', screenshot: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send bug report. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-gray-200 mb-2">Name</label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-2 bg-gray-800 rounded-lg text-white"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-gray-200 mb-2">Email</label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-2 bg-gray-800 rounded-lg text-white"
          required
        />
      </div>
      <div>
        <label htmlFor="description" className="block text-gray-200 mb-2">Description</label>
        <textarea
          id="description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="w-full px-4 py-2 bg-gray-800 rounded-lg text-white h-32"
          required
        />
      </div>
      <div>
        <label htmlFor="screenshot" className="block text-gray-200 mb-2">Screenshot URL</label>
        <input
          type="url"
          id="screenshot"
          value={formData.screenshot}
          onChange={(e) => setFormData({ ...formData, screenshot: e.target.value })}
          className="w-full px-4 py-2 bg-gray-800 rounded-lg text-white"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Submit Bug Report
      </button>
    </form>
  );
}