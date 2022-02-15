export const setDateFormat = (date) => {
  date = date.split("-")
  date[2] = String(date[2])
  const lastNumber = date[2][date[2].length - 1]
  let month, postfix;
  switch(date[1]){
    case '01':
      month = "Jan"
    break;
    case '02':
      month = "Feb"
    break;
    case '03':
      month = "Mar"
    break;
    case '04':
      month = "Apr"
    break;
    case '05':
      month = "May"
    break;
    case '06':
      month = "June"
    break;
    case '07':
      month = "July"
    break;
    case '08':
      month = "Aug"
    break;
    case '09':
      month = "Sep"
    break;
    case '10':
      month = "Oct"
    break;
    case '11':
      month = "Nov"
    break;
    default:
      month = "Dec"
  } 

  switch(lastNumber){
    case "1":
      postfix = "st"
    break;
    case "2":
      postfix = "nd"
    break;
    case "3":
      postfix = "rd"
    break;
    default:
      postfix = "th"
  }

  return month + " " + date[2] + postfix + ", " + date[0]
}