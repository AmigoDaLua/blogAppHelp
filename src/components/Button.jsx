import React from 'react'

function Button({
    children,
    type = "button",
    bgColor = "bg-blue-600",
    textColor = "text-white",
    className = "",
    ...props
}) {
  return (
    <button
    className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}
    > {children} </button>
  )
}

export default Button





// function Button({children}){

//     const type = 'button'
//     const bgColor = 'bg-blue-700'
//     const textColor = 'text-white'
//     const className = ''
//     // ${{...props}} ----- ...props

//   return (
//     <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} type={type}>
//        {children} 
//     </button>
//   )
// }

// export default Button;