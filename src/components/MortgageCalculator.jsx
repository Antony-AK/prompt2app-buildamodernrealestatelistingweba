import { useState } from 'react'

export default function MortgageCalculator() {
  const [values, setValues] = useState({
    homePrice: '',
    downPayment: '',
    interestRate: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 space-y-6 border border-estate-beige-100/20">
      <h2 className="text-2xl font-bold text-estate-beige-400 mb-6">Mortgage Calculator</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { label: 'Home Price', name: 'homePrice', placeholder: '$500,000' },
          { label: 'Down Payment', name: 'downPayment', placeholder: '$100,000' },
          { label: 'Interest Rate', name: 'interestRate', placeholder: '5.5%' }
        ].map(({ label, name, placeholder }) => (
          <div key={name}>
            <label className="block text-estate-beige-300 mb-2">{label}</label>
            <input
              type="text"
              name={name}
              value={values[name]}
              onChange={handleChange}
              placeholder={placeholder}
              className="
                w-full px-4 py-3 rounded-lg bg-white/5 
                border border-estate-beige-100/20 
                text-estate-beige-400 placeholder-estate-beige-300/50
                focus:outline-none focus:ring-2 focus:ring-estate-beige-200/50
              "
            />
          </div>
        ))}
      </div>
      <div className="bg-estate-beige-100/10 p-6 rounded-xl border border-estate-beige-100/20">
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: 'Monthly Payment', value: '$2,500' },
            { label: 'Total Interest', value: '$150,000' }
          ].map(({ label, value }) => (
            <div key={label} className="text-center">
              <div className="text-2xl font-bold text-estate-beige-400">{value}</div>
              <div className="text-sm text-estate-beige-300">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}