import React from "react"

type BaseButtonProps = {
    children : React.ReactNode,
    onClick ?: () => void
}
function BaseButton({children,onClick} : BaseButtonProps) {
    return(
      <button className="base-button" onClick={onClick}>
        {children}
      </button>
    )
}

export default BaseButton;
