import { useState } from 'react'

export default function Navbar({ onGridClick, onCalculatorClick, onContactClick }) {
  const [activeTab, setActiveTab] = useState('grid')

  const handleTabClick = (tab, handler) => {
    setActiveTab(tab)
    handler()
  }

  return (
    <nav className="sticky top-0 z-50 bg-white/10 backdrop-blur-lg border-b border-estate-beige-100/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-estate-beige-400">LuxeHomes</div>
        <div className="flex space-x-6">
          {[
            { name: 'Properties', key: 'grid', handler: onGridClick },
            { name: 'Mortgage', key: 'calculator', handler: onCalculatorClick },
            { name: 'Contact', key: 'contact', handler: onContactClick }
          ].map(({ name, key, handler }) => (
            <button
              key={key}
              onClick={() => handleTabClick(key, handler)}
              className={`
                px-3 py-2 rounded-lg transition-all duration-300
                ${activeTab === key 
                  ? 'bg-estate-beige-100/20 text-estate-beige-400 font-semibold' 
                  : 'text-estate-beige-300 hover:text-estate-beige-400'
                }
              `}
            >
              {name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}