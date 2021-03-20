const formatNumber = new Intl.NumberFormat("es-PE",{style:"currency",currency:"PEN"})

export const formatMoneyInSoles = (value : number = 0) => {
    return formatNumber.format(value)
}
