import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 space-y-6 border border-estate-beige-100/20">
      <h2 className="text-2xl font-bold text-estate-beige-400 mb-6">Contact an Agent</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {[
          { label: 'Full Name', name: 'name', type: 'text' },
          { label: 'Email Address', name: 'email', type: 'email' },
          { label: 'Phone Number', name: 'phone', type: 'tel' }
        ].map(({ label, name, type }) => (
          <div key={name}>
            <label className="block text-estate-beige-300 mb-2">{label}</label>
            <input
              type={type}
              name={name}
              value={formData[name]}
              onChange={handleChange}
              className="
                w-full px-4 py-3 rounded-lg bg-white/5 
                border border-estate-beige-100/20 
                text-estate-beige-400 placeholder-estate-beige-300/50
                focus:outline-none focus:ring-2 focus:ring-estate-beige-200/50
              "
            />
          </div>
        ))}
        <div className="md:col-span-2">
          <label className="block text-estate-beige-300 mb-2">Your Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="
              w-full px-4 py-3 rounded-lg bg-white/5 
              border border-estate-beige-100/20 
              text-estate-beige-400 placeholder-estate-beige-300/50
              focus:outline-none focus:ring-2 focus:ring-estate-beige-200/50
            "
            placeholder="Tell us about your property interests..."
          />
        </div>
      </div>
      <button
        className="
          w-full py-4 rounded-lg bg-estate-beige-300 
          text-white font-semibold hover:bg-estate-beige-400
          transition-all duration-300
        "
      >
        Send Inquiry
      </button>
    </div>
  )
}