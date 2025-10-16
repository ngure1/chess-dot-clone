export function formatDuration(duration: number): string {
  const minutes = Math.floor(duration / 60);
  const seconds = duration % 60;
  const wholeSeconds = Math.floor(seconds);

  if (duration < 10) {
    const milliseconds = Math.floor((seconds - wholeSeconds) * 100);
    const formattedMilliseconds = milliseconds.toString().padStart(2, '0');
    return `${minutes}:${wholeSeconds}.${formattedMilliseconds}`;
  }

  const formattedSeconds =
    wholeSeconds < 10 ? `0${wholeSeconds}` : `${wholeSeconds}`;

  return `${minutes}:${formattedSeconds}`;
}
