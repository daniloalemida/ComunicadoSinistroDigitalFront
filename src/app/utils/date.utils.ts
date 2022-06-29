export function dateToString(date: string) {
   return new Date(date).toLocaleDateString("pt-br");
}

export function hourToString(date: string) {
   return new Date(date).toLocaleTimeString("pt-br", { hour: '2-digit', minute: '2-digit' });
}

export function stringToDate(date: string) {
   const [day, month, year] = date.split("/").map((x) => parseInt(x));

   return new Date(year, month - 1, day);
}

export function getFormattedDate(dateString: string, time: string) {
   var splitTime = time.split(":");
   var date = stringToDate(dateString);
   date.setHours(parseInt(splitTime[0]), parseInt(splitTime[1]));
   return date.toISOString();
}