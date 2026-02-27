export default function PropertyDetail({ property, onBack }) {
  return (
    <div className="grid md:grid-cols-2 gap-12">
      <div className="space-y-6">
        <button 
          onClick={onBack} 
          className="
            bg-estate-beige-100/20 text-estate-beige-400 
            px-4 py-2 rounded-lg hover:bg-estate-beige-100/30
            transition-all duration-300
          "
        >
          ← Back to Properties
        </button>
        <img 
          src={property.image} 
          alt={property.title} 
          className="w-full rounded-2xl shadow-xl"
        />
        <div className="grid grid-cols-3 gap-4">
          {[1,2,3].map(i => (
            <img 
              key={i} 
              src={property.image} 
              alt={`Gallery ${i}`} 
              className="rounded-lg object-cover h-32 w-full"
            />
          ))}
        </div>
      </div>
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 space-y-6 border border-estate-beige-100/20">
        <h1 className="text-3xl font-bold text-estate-beige-400">{property.title}</h1>
        <div className="text-2xl font-semibold text-estate-beige-300">{property.price}</div>
        <div className="grid grid-cols-3 gap-4 text-center">
          {[
            { label: 'Bedrooms', value: property.bedrooms },
            { label: 'Bathrooms', value: property.bathrooms },
            { label: 'Sq Ft', value: property.sqft }
          ].map(({ label, value }) => (
            <div 
              key={label} 
              className="
                bg-estate-beige-100/10 p-4 rounded-xl 
                border border-estate-beige-100/20
              "
            >
              <div className="text-2xl font-bold text-estate-beige-400">{value}</div>
              <div className="text-sm text-estate-beige-300">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}