"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqItems: FAQItem[] = [
    {
      question: "¿Cuáles son los requisitos de admisión?",
      answer:
        "Los requisitos de admisión varían según el programa académico. Generalmente, se requiere completar el formulario de solicitud, presentar documentos de identificación, certificados de estudios previos, y en algunos casos, realizar exámenes de admisión o entrevistas. Te recomendamos visitar la sección de Admisiones para información específica del programa de tu interés.",
    },
    {
      question: "¿Ofrecen becas o ayudas financieras?",
      answer:
        "Sí, nuestra universidad ofrece diversos programas de becas y ayudas financieras basadas en mérito académico, necesidad económica, talentos deportivos y artísticos. También contamos con convenios con entidades financieras para facilitar el acceso a créditos educativos con tasas preferenciales.",
    },
    {
      question: "¿Cuándo inician las clases?",
      answer:
        "El calendario académico se divide en dos semestres principales: el semestre de primavera que inicia en febrero y el semestre de otoño que comienza en agosto. También ofrecemos cursos intensivos de verano durante junio y julio. Las fechas exactas pueden variar cada año, por lo que te recomendamos consultar el calendario académico actualizado en nuestra web.",
    },
    {
      question: "¿Tienen modalidad virtual o a distancia?",
      answer:
        "Sí, ofrecemos programas completamente virtuales, así como opciones híbridas que combinan clases presenciales y virtuales. Nuestra plataforma educativa está diseñada para proporcionar una experiencia de aprendizaje interactiva y de alta calidad, con acceso a todos los recursos necesarios para tu formación.",
    },
    {
      question: "¿Cómo puedo solicitar información adicional?",
      answer:
        "Puedes solicitar información adicional a través de nuestro formulario de contacto en la web, llamando a nuestro centro de atención al estudiante al (123) 456-7890, o visitando nuestro campus durante los horarios de atención. También puedes seguirnos en nuestras redes sociales para estar al tanto de eventos informativos y jornadas de puertas abiertas.",
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Preguntas Frecuentes</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Encuentra respuestas a las preguntas más comunes sobre nuestra universidad y programas académicos.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full text-left p-4 rounded-lg flex justify-between items-center transition-colors ${
                  openIndex === index ? "bg-primary text-white" : "bg-white hover:bg-gray-100"
                }`}
              >
                <span className="font-medium">{item.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 flex-shrink-0" />
                )}
              </button>

              {openIndex === index && (
                <div className="bg-white p-4 rounded-b-lg shadow-sm border-t-0 border border-gray-200">
                  <p className="text-gray-700">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
