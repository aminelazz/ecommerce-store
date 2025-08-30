import React from "react"

interface ContainerProps {
  children: React.ReactNode
}

function Container({ children }: ContainerProps) {
  return (
    <div className="max-w-7xl mx-auto lg:px-8">
      {children}
    </div>
  )
}

export default Container