import React from 'react'

const ColorPalette = () => {
  const colors = [
    { name: 'Primary (San Martín Red)', class: 'bg-primary', hex: '#C41E3A' },
    { name: 'Secondary (San Martín Blue)', class: 'bg-secondary', hex: '#1e3a8a' },
    { name: 'San Martín Gold', class: 'bg-sanmartin-gold', hex: '#FDB813' },
    { name: 'San Martín Red Light', class: 'bg-sanmartin-red-light', hex: '#E6485F' },
    { name: 'San Martín Blue Light', class: 'bg-sanmartin-blue-light', hex: '#3b82f6' },
    { name: 'San Martín Cream', class: 'bg-sanmartin-cream', hex: '#F8F6F3' },
    { name: 'San Martín Gray', class: 'bg-sanmartin-gray', hex: '#6B7280' },
  ]

  const primaryVariants = [
    { name: 'Primary 100', class: 'bg-primary-100' },
    { name: 'Primary 200', class: 'bg-primary-200' },
    { name: 'Primary 300', class: 'bg-primary-300' },
    { name: 'Primary 400', class: 'bg-primary-400' },
    { name: 'Primary 500', class: 'bg-primary-500' },
    { name: 'Primary 600', class: 'bg-primary-600' },
    { name: 'Primary 700', class: 'bg-primary-700' },
    { name: 'Primary 800', class: 'bg-primary-800' },
    { name: 'Primary 900', class: 'bg-primary-900' },
  ]

  return (
    <div className="p-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-primary mb-8">Paleta de Colores San Martín</h2>
        
        {/* Colores principales */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-6 text-secondary">Colores Principales</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {colors.map((color, index) => (
              <div key={index} className="text-center">
                <div className={`${color.class} h-24 w-full rounded-lg shadow-sm mb-3`}></div>
                <p className="font-medium text-gray-800">{color.name}</p>
                <p className="text-sm text-gray-600">{color.hex}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Variantes del color primario */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-6 text-secondary">Variantes del Color Primario</h3>
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-2">
            {primaryVariants.map((variant, index) => (
              <div key={index} className="text-center">
                <div className={`${variant.class} h-16 w-full rounded-lg shadow-sm mb-2`}></div>
                <p className="text-xs text-gray-600">{variant.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Ejemplos de uso */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-secondary">Ejemplos de Uso</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-primary text-white p-6 rounded-lg">
              <h4 className="font-bold mb-2">Botón Primario</h4>
              <p>Usando el rojo institucional de San Martín</p>
            </div>
            <div className="bg-secondary text-white p-6 rounded-lg">
              <h4 className="font-bold mb-2">Botón Secundario</h4>
              <p>Usando el azul institucional de San Martín</p>
            </div>
            <div className="bg-sanmartin-gold text-gray-900 p-6 rounded-lg">
              <h4 className="font-bold mb-2">Acento Dorado</h4>
              <p>Color de apoyo para destacar elementos</p>
            </div>
            <div className="bg-sanmartin-red-light text-white p-6 rounded-lg">
              <h4 className="font-bold mb-2">Rojo Claro</h4>
              <p>Variante más clara del rojo principal</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ColorPalette
