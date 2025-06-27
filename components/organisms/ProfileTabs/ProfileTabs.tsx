"use client"

import { useState } from "react"
import ProfileInfo from "@/components/organisms/ProfileInfo/ProfileInfo"
import EnrolledCourses from "@/components/organisms/EnrolledCourses/EnrolledCourses"
import DiscProfile from "@/components/organisms/DiscProfile/DiscProfile"
import MoodleAccess from "@/components/organisms/MoodleAccess/MoodleAccess"
import AccountSettings from "@/components/organisms/AccountSettings/AccountSettings"
import type { User } from "@/types/user"

interface ProfileTabsProps {
  userData: User
}

const ProfileTabs = ({ userData }: ProfileTabsProps) => {
  const [activeTab, setActiveTab] = useState("profile")

  const tabs = [
    { id: "profile", label: "Información personal" },
    { id: "courses", label: "Mis cursos" },
    { id: "", label: "Perfil " },
    { id: "moodle", label: "Acceso Moodle" },
    { id: "settings", label: "Configuración" },
  ]

  return (
    <div>
      <div className="bg-white rounded-t-xl shadow-md overflow-hidden">
        <div className="flex overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-4 text-sm font-medium whitespace-nowrap ${
                activeTab === tab.id
                  ? "text-primary border-b-2 border-primary"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-b-xl shadow-md p-6">
        {activeTab === "profile" && <ProfileInfo userData={userData} />}
        {activeTab === "courses" && <EnrolledCourses userId={userData.id} />}
        {activeTab === "" && <DiscProfile userData={userData} />}
        {activeTab === "moodle" && <MoodleAccess userData={userData} />}
        {activeTab === "settings" && <AccountSettings userData={userData} />}
      </div>
    </div>
  )
}

export default ProfileTabs
