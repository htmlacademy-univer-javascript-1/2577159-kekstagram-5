// Функция для проверки, попадает ли встреча в рамки рабочего дня
function isMeetingInWorkingHours(workStart, workEnd, meetingStart, meetingDuration) {
  // Преобразует строку времени в минуты от начала дня
  function timeToMinutes(time) {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  }

  // Преобразуем все времена в минуты
  const workStartMinutes = timeToMinutes(workStart);
  const workEndMinutes = timeToMinutes(workEnd);
  const meetingStartMinutes = timeToMinutes(meetingStart);
  const meetingEndMinutes = meetingStartMinutes + meetingDuration;

  // Проверяем, укладывается ли встреча в рамки рабочего дня
  return meetingStartMinutes >= workStartMinutes && meetingEndMinutes <= workEndMinutes;
}
