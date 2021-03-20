import React from "react"

type BaseButtonProps = {
    children : React.ReactNode,
    onClick ?: () => void
}
export function BaseButton({children,onClick} : BaseButtonProps) {
    return(
      <button className="base-button" onClick={onClick}>
        {children}
      </button>
    )
}

