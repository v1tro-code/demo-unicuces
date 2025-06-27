"use client"

import { useState } from "react"
import Button from "@/components/atoms/Button/Button"
import { ExternalLink } from "lucide-react"
import type { User } from "@/types/user"

interface MoodleAccessProps {
  userData: User
}

const MoodleAccess = ({ userData }: MoodleAccessProps) => {
  const [isGeneratingLink, setIsGeneratingLink] = useState(false)
  const [moodleLink, setMoodleLink] = useState("")

  const handleGenerateLink = async () => {
    setIsGeneratingLink(true)

    try {
      // Aquí iría la lógica para generar un enlace de acceso a Moodle
      // Simulamos una llamada a la API
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // URL de Moodle desde variables de entorno
      const moodleUrl = process.env.NEXT_PUBLIC_MOODLE_URL || "https://moodle.sanmartin.com"

      // Generamos un token de acceso simulado
      const token = `${Math.random().toString(36).substring(2, 15)}${Math.random().toString(36).substring(2, 15)}`

      // Construimos la URL de acceso
      const accessUrl = `${moodleUrl}/login/token.php?username=${userData.email}&token=${token}`

      setMoodleLink(accessUrl)
    } catch (error) {
      console.error("Error generating Moodle access link:", error)
    } finally {
      setIsGeneratingLink(false)
    }
  }

  return (
    <div>
      <h2 className="text-xl font-bold text-secondary mb-6">Acceso a Moodle</h2>

      <div className="bg-gray-50 rounded-lg p-6">
        <p className="text-gray-700 mb-6">
          Desde aquí puedes acceder a la plataforma Moodle donde encontrarás el contenido completo de tus cursos,
          incluyendo materiales descargables, evaluaciones y foros de usión.
        </p>

        {moodleLink ? (
          <div className="bg-white p-4 rounded-md border border-gray-200 mb-6">
            <h3 className="font-medium mb-2">Enlace de acceso generado</h3>
            <p className="text-sm text-gray-600 mb-4">
              Haz clic en el botón para acceder directamente a tu cuenta de Moodle. Este enlace es válido por 24 horas.
            </p>
            <div className="flex justify-center">
              <a
                href={moodleLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-secondary text-white px-4 py-2 rounded-md hover:bg-secondary/90 transition-colors"
              >
                Acceder a Moodle <ExternalLink size={16} className="ml-2" />
              </a>
            </div>
          </div>
        ) : (
          <div className="text-center mb-6">
            <Button onClick={handleGenerateLink} disabled={isGeneratingLink}>
              {isGeneratingLink ? "Generando enlace..." : "Generar enlace de acceso"}
            </Button>
          </div>
        )}

        <div className="bg-blue-50 p-4 rounded-md border border-blue-200">
          <h3 className="font-medium text-blue-800 mb-2">Información importante</h3>
          <ul className="list- list-inside text-blue-700 space-y-1 text-sm">
            <li>Tu nombre de usuario en Moodle es tu dirección de email</li>
            <li>Si es tu primera vez, deberás establecer una contraseña al acceder</li>
            <li>
              Si tienes problemas de acceso, contacta con soporte en{" "}
              <a href="mailto:soporte@Unicuces.com" className="underline">
                soporte@Unicuces.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MoodleAccess
