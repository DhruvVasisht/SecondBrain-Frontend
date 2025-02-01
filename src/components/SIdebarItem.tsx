import { ReactElement } from "react"

const SIdebarItem = ({text, icon}: {
    text: string,
    icon: ReactElement
}) => {
  return (
    <div className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-200 rounded-lg cursor-pointer transition-colors duration-200">
      <div className="w-5 h-5">
        {icon}
      </div>
      <span className="font-medium">{text}</span>
    </div>
  )
}

export default SIdebarItem