
const now = new Date();
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const dayIndex = now.getDay()

const dayName = daysOfWeek[dayIndex]
const time = now.getTime()

document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = dayName;
document.querySelector('[data-testid="currentUTCTime"]').textContent = time;