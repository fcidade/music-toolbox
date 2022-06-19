import React from 'react'

type ComposableFunciton = (props?: Object) => Object

export const composer = (...functions: ComposableFunciton[]) => (Component: React.FC) => {
  return props => {
    const composeProps = functions.reduce((prevProps, func) => {
      const functionProps = func({ ...prevProps, ...props })
      return {
        ...prevProps,
        ...functionProps
      }
    }, {})
    return <Component {...props} {...composeProps} />
  }
}
