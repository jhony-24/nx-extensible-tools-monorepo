import React from "react"

type LinkNavigatorProps = {
    onClick ?: (to : string) => void,
    children : React.ReactNode,
    to ?: string,
    variant ?: "flat" | "primary" | "secondary"
}
function LinkNavigator({children,onClick,to,variant} : LinkNavigatorProps) {
    const handlerOnClick = () => {
      onClick && onClick(to);
    }
    return(
      <button className="base-button" onClick={handlerOnClick}>
        {children}
      </button>
    )
}

export default LinkNavigator;
