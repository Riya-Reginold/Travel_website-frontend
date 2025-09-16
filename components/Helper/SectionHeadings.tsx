import React from 'react'

type Props ={
    heading:string;
    subheading:string;
};
const SectionHeadings = ({heading,subheading}: Props) => {
  return (
    <div className={'w-[80%] mx-auto text-center'}>
      <h1 className="text-2xl sm:text-4xl font-extrabold text-gray-900">{heading}</h1>
      <p className="mt-2 text-gray-600 sm:text-lg font-medium italic">{subheading}</p>
    </div>
  )
}

export default SectionHeadings
