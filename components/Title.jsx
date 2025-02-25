import React from 'react'

const Title = ({firstTxt, secondTxt}) => {
  return (
    <>
      <h2 className="text-2xl font-black leading-tight px-2">
        <span className="text-red-600">{firstTxt}</span>
        <span className="text-gray-800">{secondTxt}</span>
      </h2>
    </>
  )
}

export default Title
