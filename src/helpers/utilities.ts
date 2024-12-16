
export const formatNumberWithCommas = (number: number) => {
    return number
      ? number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      : number
  }

export const formatDate = (date: Date): string => {
    return `${date.getDate()}/${date.getMonth()+1}/${date. getFullYear()}`
}

export const formatDateTime = (date: Date): string => {
    return `${date.getHours()}:${date.getMinutes()}`
}