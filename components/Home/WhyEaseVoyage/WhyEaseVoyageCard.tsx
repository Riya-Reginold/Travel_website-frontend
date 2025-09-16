import React from 'react'

type Props={
icon:  React.ReactNode
  title: string
  description: string
}

const WhyEaseVoyageCard = ({ icon, title, description }: Props) => {
 return (
    <div className="flex flex-col items-center text-center space-y-2">
  <div className="w-12 h-12 flex items-center justify-center text-blue-500 text-2xl">
    {icon}
  </div>
  <h3 className="text-lg font-semibold">{title}</h3>
  <p className="text-gray-600 text-sm">{description}</p>
</div>

  )
}

export default WhyEaseVoyageCard
