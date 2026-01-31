/**
 * Calculate years and months since a given date
 */
export function getTimeSince(startDate: string): { years: number; months: number; formatted: string } {
  const start = new Date(startDate);
  const now = new Date();
  
  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();
  
  // Adjust if the current month is before the start month
  if (months < 0) {
    years--;
    months += 12;
  }
  
  // Adjust if the current day is before the start day
  if (now.getDate() < start.getDate()) {
    months--;
    if (months < 0) {
      years--;
      months += 12;
    }
  }
  
  // Format the string
  let formatted = '';
  if (years > 0) {
    formatted = `${years} year${years !== 1 ? 's' : ''}`;
    if (months > 0) {
      formatted += ` and ${months} month${months !== 1 ? 's' : ''}`;
    }
  } else if (months > 0) {
    formatted = `${months} month${months !== 1 ? 's' : ''}`;
  } else {
    formatted = 'less than a month';
  }
  
  return { years, months, formatted };
}
