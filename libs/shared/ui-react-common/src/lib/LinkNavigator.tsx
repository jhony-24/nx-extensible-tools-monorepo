import React from "react"

type LinkNavigatorProps = {
    onClick ?: (to : string) => void,
    children : React.ReactNode,
    to ?: string,
}

export function LinkNavigator({children,onClick,to} : LinkNavigatorProps) {
    const handlerOnClick = () => {
      onClick && onClick(to);
    }
    return(
      <button className="base-button" onClick={handlerOnClick}>
        {children}
      </button>
    )
}
