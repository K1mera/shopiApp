import React from 'react'

export const CardOrderPreview = ({images, title}) => {
  return (
    <div className="flex flex-col items-center text-sm w-28 h-38 pt-2 overflow-y-hidden">
      <img className="rounded-lg object-cover w-full h-28" src={images[0]} alt={title} />
      <h4 className="px-1 font-regular text-[12px] h-14">{title}</h4>
    </div>
  );
}
