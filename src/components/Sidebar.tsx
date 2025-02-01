import { Linkedin, TwitterIcon, YoutubeIcon } from "lucide-react"
import SIdebarItem from "./SIdebarItem"

const Sidebar = () => {
  return (
    <div className="h-screen bg-white w-72 fixed left-0 top-0 border-r border-gray-200 shadow-sm">
      <div className="pt-10 px-4">
        <h1 className="text-2xl font-bold mb-6 px-2">Second Brain</h1>
        <div className="space-y-2">
          <SIdebarItem text="Twitter" icon={<TwitterIcon/>}/>
          <SIdebarItem text="Youtube" icon={<YoutubeIcon/>}/>
          <SIdebarItem text="Linkedin" icon={<Linkedin/>}/>
        </div>
      </div>
    </div>
  )
}

export default Sidebar