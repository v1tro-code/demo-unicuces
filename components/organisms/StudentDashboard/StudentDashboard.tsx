"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useAuth } from "@/hooks/use-auth"
import {
  BookOpen,
  Calendar,
  Clock,
  GraduationCap,
  CreditCard,
  ExternalLink,
  Bell,
  User,
  CheckCircle,
} from "lucide-react"
import Button from "@/components/atoms/Button/Button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { getCourses } from "@/lib/actions/course-actions"
import type { User as UserType } from "@/types/user"
import type { Course } from "@/types/course"

interface StudentDashboardProps {
  userData?: UserType
}

const StudentDashboard = ({ userData }: StudentDashboardProps) => {
  const { user } = useAuth()
  const [enrolledCourses, setEnrolledCourses] = useState<Course[]>([])
  const [isLoading, setIsLoading] = useState(true)

  // Usar userData si se proporciona, de lo contrario usar user del contexto de autenticación
  const studentData = userData ||
    user || {
      id: "demo-user-id",
      email: "estudiante@sanmartin.edu",
      firstName: "Carlos",
      lastName: "Rodríguez",
      role: "student",
      avatar: "/professional-man.png",
      enrolledCourses: ["1", "2", "3"],
    }

  useEffect(() => {
    const fetchEnrolledCourses = async () => {
      try {
        // Obtener todos los cursos y filtrar los inscritos
        const { courses } = await getCourses({ pageSize: 20 })

        // Si el estudiante tiene cursos inscritos, filtrarlos
        if (studentData.enrolledCourses && studentData.enrolledCourses.length > 0) {
          const filtered = courses.filter((course) => studentData.enrolledCourses?.includes(course.id))
          setEnrolledCourses(filtered)
        } else {
          // Para demo, mostrar algunos cursos
          setEnrolledCourses(courses.slice(0, 3))
        }
      } catch (error) {
        console.error("Error al cargar los cursos:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchEnrolledCourses()
  }, [studentData])

  // Datos académicos de ejemplo
  const academicData = {
    program: "Desarrollo Profesional",
    studentId: "EST-" + (studentData.id?.substring(0, 6) || "123456"),
    semester: "2025-1",
    averageGrade: 4.2,
    creditsCompleted: 86,
    creditsTotal: 120,
    status: "Activo",
    startDate: "2023-01-15",
    financialStatus: "Al día",
    lastPayment: {
      date: "2024-12-10",
      receipt: "10935447",
      amount: "350.00€",
    },
  }

  // Calcular progreso académico
  const academicProgress = Math.round((academicData.creditsCompleted / academicData.creditsTotal) * 100)

  // Notificaciones de ejemplo
  const notifications = [
    { id: 1, title: "Nuevo material disponible", course: "Liderazgo Efectivo", date: "Hoy" },
    { id: 2, title: "Recordatorio: Entrega de proyecto", course: "Gestión de Proyectos", date: "Mañana" },
    { id: 3, title: "Calificación publicada", course: "Comunicación Estratégica", date: "Ayer" },
  ]

  // Próximos eventos
  const upcomingEvents = [
    { id: 1, title: "Entrega de proyecto final", course: "Gestión de Proyectos", date: "15/01/2025", time: "23:59" },
    { id: 2, title: "Examen parcial", course: "Liderazgo Efectivo", date: "20/01/2025", time: "10:00" },
    { id: 3, title: "Webinar: Tendencias en Marketing", course: "General", date: "25/01/2025", time: "18:00" },
  ]

  return (
    <div className="min-h-screen bg-muted py-8">
      <div className="container-custom">
        {/* Encabezado con información del estudiante */}
        <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-xl p-6 mb-8 shadow-md">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white/20">
              <Image
                src={studentData.avatar || "/professional-man.png"}
                alt={`${studentData.firstName} ${studentData.lastName}`}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex-1 text-center md:text-left">
              <h1 className="text-2xl md:text-3xl font-bold mb-2">
                {studentData.firstName} {studentData.lastName}
              </h1>
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-white/80 mb-4">
                <div className="flex items-center justify-center md:justify-start">
                  <GraduationCap className="w-4 h-4 mr-2" />
                  <span>{academicData.program}</span>
                </div>
                <div className="hidden md:block">•</div>
                <div className="flex items-center justify-center md:justify-start">
                  <User className="w-4 h-4 mr-2" />
                  <span>ID: {academicData.studentId}</span>
                </div>
                <div className="hidden md:block">•</div>
                <div className="flex items-center justify-center md:justify-start">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Semestre: {academicData.semester}</span>
                </div>
              </div>

              <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-4">
                <Link href="/perfil">
                  <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
                    Ver Perfil
                  </Button>
                </Link>
                <Link href="#moodle-access">
                  <Button variant="accent" size="sm">
                    Acceder a Moodle
                  </Button>
                </Link>
              </div>
            </div>

            <div className="hidden lg:block bg-white/10 rounded-lg p-4 text-center min-w-[200px]">
              <h3 className="font-medium mb-2">Progreso Académico</h3>
              <div className="mb-2">
                <Progress value={academicProgress} className="h-2 bg-white/20" />
              </div>
              <p className="text-sm">
                {academicData.creditsCompleted} de {academicData.creditsTotal} créditos
                <span className="block font-bold text-lg">{academicProgress}%</span>
              </p>
            </div>
          </div>
        </div>

        {/* Contenido principal */}
        <Tabs defaultValue="courses" className="space-y-6">
          <div className="bg-white rounded-lg p-2 shadow-sm">
            <TabsList className="grid grid-cols-1 md:grid-cols-3 gap-2">
              <TabsTrigger value="courses" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                <BookOpen className="w-4 h-4 mr-2" /> Mis Cursos
              </TabsTrigger>
              <TabsTrigger value="financial" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                <CreditCard className="w-4 h-4 mr-2" /> Estado Financiero
              </TabsTrigger>
              <TabsTrigger value="moodle" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                <ExternalLink className="w-4 h-4 mr-2" /> Acceso Moodle
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Pestaña de Mis Cursos */}
          <TabsContent value="courses" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BookOpen className="w-5 h-5 mr-2 text-primary" />
                      Mis Cursos Inscritos
                    </CardTitle>
                    <CardDescription>Cursos en los que estás matriculado actualmente</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {isLoading ? (
                      <div className="text-center py-8">
                        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent"></div>
                        <p className="mt-4 text-gray-500">Cargando tus cursos...</p>
                      </div>
                    ) : enrolledCourses.length > 0 ? (
                      <div className="space-y-4">
                        {enrolledCourses.map((course) => (
                          <div
                            key={course.id}
                            className="flex flex-col md:flex-row gap-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                          >
                            <div className="relative w-full md:w-24 h-24 rounded-md overflow-hidden flex-shrink-0">
                              <Image
                                src={course.image || `/placeholder.svg?height=200&width=200&query=${course.category}`}
                                alt={course.title}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-bold text-lg text-secondary">{course.title}</h3>
                              <div className="flex items-center text-sm text-gray-500 mb-2">
                                <Clock className="w-4 h-4 mr-1" />
                                <span>{course.duration}</span>
                                <span className="mx-2">•</span>
                                <span>Instructor: {course.instructor.name}</span>
                              </div>
                              <div className="flex items-center justify-end">
                                <Link href={`/cursos/${course.id}`}>
                                  <Button variant="secondary" size="sm">
                                    Continuar curso
                                  </Button>
                                </Link>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">No estás inscrito en ningún curso</h3>
                        <p className="text-gray-600 mb-6">
                          Explora nuestro catálogo y encuentra cursos que te interesen
                        </p>
                        <Link href="/cursos">
                          <Button>Ver cursos disponibles</Button>
                        </Link>
                      </div>
                    )}
                  </CardContent>
                  <CardFooter className="border-t pt-4 flex justify-between">
                    <p className="text-sm text-gray-500">Mostrando {enrolledCourses.length} cursos</p>
                    <Link href="/perfil?tab=courses">
                      <Button variant="outline" size="sm">
                        Ver todos mis cursos
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>

              <div className="space-y-6">
                {/* Notificaciones */}
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center">
                      <Bell className="w-5 h-5 mr-2 text-primary" />
                      Notificaciones
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {notifications.map((notification) => (
                        <div
                          key={notification.id}
                          className="flex items-start gap-3 pb-3 border-b last:border-0 last:pb-0"
                        >
                          <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                          <div>
                            <p className="font-medium">{notification.title}</p>
                            <p className="text-sm text-gray-500">{notification.course}</p>
                            <p className="text-xs text-gray-400">{notification.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="border-t pt-3">
                    <Button variant="ghost" size="sm" className="w-full">
                      Ver todas las notificaciones
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Pestaña de Estado Financiero */}
          <TabsContent value="financial" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CreditCard className="w-5 h-5 mr-2 text-primary" />
                  Estado Financiero
                </CardTitle>
                <CardDescription>Información sobre tu estado de cuenta y pagos</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-green-50 border border-green-100 rounded-lg p-4">
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Estado de Cuenta</h3>
                    <p className="font-semibold text-green-600 flex items-center">
                      <CheckCircle className="w-4 h-4 mr-1" /> Al día
                    </p>
                  </div>
                  <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Último Pago</h3>
                    <p className="font-semibold">{academicData.lastPayment.date}</p>
                    <p className="text-sm text-gray-500">Recibo: {academicData.lastPayment.receipt}</p>
                  </div>
                  <div className="bg-purple-50 border border-purple-100 rounded-lg p-4">
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Monto</h3>
                    <p className="font-semibold">{academicData.lastPayment.amount}</p>
                    <p className="text-sm text-gray-500">Semestre: {academicData.semester}</p>
                  </div>
                </div>

                <h3 className="font-medium text-lg mb-4">Historial de Pagos</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border px-4 py-2 text-left">Fecha</th>
                        <th className="border px-4 py-2 text-left">Concepto</th>
                        <th className="border px-4 py-2 text-left">Recibo</th>
                        <th className="border px-4 py-2 text-left">Monto</th>
                        <th className="border px-4 py-2 text-left">Estado</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border px-4 py-2">10/12/2024</td>
                        <td className="border px-4 py-2">Matrícula 2025-1</td>
                        <td className="border px-4 py-2">10935447</td>
                        <td className="border px-4 py-2">350.00€</td>
                        <td className="border px-4 py-2">
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Pagado
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">15/06/2024</td>
                        <td className="border px-4 py-2">Matrícula 2024-2</td>
                        <td className="border px-4 py-2">10903298</td>
                        <td className="border px-4 py-2">350.00€</td>
                        <td className="border px-4 py-2">
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Pagado
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">12/01/2024</td>
                        <td className="border px-4 py-2">Matrícula 2024-1</td>
                        <td className="border px-4 py-2">10868345</td>
                        <td className="border px-4 py-2">350.00€</td>
                        <td className="border px-4 py-2">
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Pagado
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
              <CardFooter className="border-t pt-4 flex justify-between">
                <p className="text-sm text-gray-500">Última actualización: 10/01/2025</p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    Descargar comprobantes
                  </Button>
                  <Button variant="primary" size="sm">
                    Realizar pago
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* Pestaña de Acceso Moodle */}
          <TabsContent value="moodle" id="moodle-access" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ExternalLink className="w-5 h-5 mr-2 text-primary" />
                  Acceso a Moodle
                </CardTitle>
                <CardDescription>Plataforma de aprendizaje virtual para tus cursos</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="bg-primary/5 rounded-lg p-6 mb-6">
                      <h3 className="font-medium text-lg mb-4">Información de acceso</h3>
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Usuario</p>
                          <p className="font-medium">{studentData.email}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">URL de Moodle</p>
                          <p className="font-medium text-primary">
                            <a
                              href="https://moodle.sanmarting.edu"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center"
                            >
                              moodle.sanmarting.edu
                              <ExternalLink className="w-3 h-3 ml-1" />
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <p>Accede a la plataforma Moodle para encontrar:</p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                          <span>Material de estudio y recursos de tus cursos</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                          <span>Actividades, tareas y evaluaciones</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                          <span>Foros de usión y comunicación con profesores</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                          <span>Calificaciones y retroalimentación</span>
                        </li>
                      </ul>

                      <div className="pt-4">
                        <a href="https://moodle.sanmarting.edu" target="_blank" rel="noopener noreferrer">
                          <Button className="w-full">
                            Acceder a Moodle
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                    <Image src="/placeholder.svg?key=rop2r" alt="Plataforma Moodle" fill className="object-cover" />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t pt-4">
                <div className="w-full">
                  <p className="text-sm text-gray-500 mb-4">
                    ¿Problemas para acceder? Contacta con soporte técnico en{" "}
                    <a href="mailto:soporte@sanmarting.edu" className="text-primary hover:underline">
                      soporte@sanmarting.edu
                    </a>
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm">
                      Guía de uso de Moodle
                    </Button>
                    <Button variant="outline" size="sm">
                      Restablecer contraseña
                    </Button>
                    <Button variant="outline" size="sm">
                      Reportar problema
                    </Button>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default StudentDashboard
