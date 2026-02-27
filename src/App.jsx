import { useState } from 'react'
import Navbar from './components/Navbar'
import PropertyGrid from './components/PropertyGrid'
import PropertyDetail from './components/PropertyDetail'
import MortgageCalculator from './components/MortgageCalculator'
import ContactForm from './components/ContactForm'

export default function App() {
  const [selectedProperty, setSelectedProperty] = useState(null)
  const [activeSection, setActiveSection] = useState('grid')

  const handlePropertySelect = (property) => {
    setSelectedProperty(property)
    setActiveSection('detail')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-estate-beige-50 via-white to-estate-beige-100">
      <Navbar 
        onGridClick={() => setActiveSection('grid')}
        onCalculatorClick={() => setActiveSection('calculator')}
        onContactClick={() => setActiveSection('contact')}
      />
      <div className="max-w-7xl mx-auto px-8 py-12">
        {activeSection === 'grid' && (
          <PropertyGrid onPropertySelect={handlePropertySelect} />
        )}
        {activeSection === 'detail' && selectedProperty && (
          <PropertyDetail 
            property={selectedProperty} 
            onBack={() => setActiveSection('grid')} 
          />
        )}
        {activeSection === 'calculator' && (
          <MortgageCalculator />
        )}
        {activeSection === 'contact' && (
          <ContactForm />
        )}
      </div>
    </div>
  )
}