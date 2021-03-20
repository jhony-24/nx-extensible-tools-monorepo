export const fetchMoneyList = () => {
  return [...Array(20)].map((e,i) => {
    return {
      id : i + 1,
      money : Math.floor(Math.random() * 1000)
    }
  })
}
