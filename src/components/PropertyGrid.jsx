import { useState } from 'react'

const PROPERTIES = [
  {
    id: 1,
    title: 'Modern Hillside Villa',
    price: '$4,750,000',
    bedrooms: 4,
    bathrooms: 3,
    sqft: 4200,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 2,
    title: 'Coastal Luxury Residence',
    price: '$6,250,000',
    bedrooms: 5,
    bathrooms: 4,
    sqft: 5500,
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 3,
    title: 'Urban Penthouse',
    price: '$3,200,000',
    bedrooms: 3,
    bathrooms: 2,
    sqft: 3100,
    image: 'https://images.unsplash.com/photo-1600047509358-9dc75507daeb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
]

export default function PropertyGrid({ onPropertySelect }) {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {PROPERTIES.map(property => (
        <div 
          key={property.id} 
          onClick={() => onPropertySelect(property)}
          className="
            bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden 
            shadow-xl transition-all duration-300 
            hover:scale-[1.02] hover:shadow-2xl cursor-pointer
            border border-estate-beige-100/20
          "
        >
          <img 
            src={property.image} 
            alt={property.title} 
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-estate-beige-400 mb-2">{property.title}</h3>
            <div className="flex justify-between text-estate-beige-300">
              <span>{property.price}</span>
              <span>{property.bedrooms} BD | {property.bathrooms} BA</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}