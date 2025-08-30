import { cn } from "@/lib/utils"
import { MouseEventHandler } from "react"

interface IconButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined
  icon: React.ReactElement
  className?: string
}

function IconButton({ icon, onClick, className }: IconButtonProps) {
  return (
    <button
      className={cn(
        "flex justify-center items-center p-2 rounded-full border bg-white shadow-md hover:scale-110 transition duration-200",
        className
      )}
      onClick={onClick}
    >
      {icon}
    </button>
  )
}
export default IconButton