
export function DurationFromSeconds (seconds: number) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
  
    const formattedHours = hours < 10 ? `0${hours.toPrecision(1)}` : hours.toPrecision(2);
    const formattedMinutes = minutes < 10 ? `0${minutes.toPrecision(1)}` : minutes.toPrecision(2);
    const formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds.toPrecision(1)}` : remainingSeconds.toPrecision(2);
  
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;


}