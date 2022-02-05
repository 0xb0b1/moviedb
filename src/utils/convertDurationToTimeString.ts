export const converDurationToTimeString = (value: number) => {
  if (value == null) {
    return "";
  }
  if (value <= 0) {
    return "";
  }
  let hours = Math.floor(value / 60);
  let minutes = value % 60;
  let hour = hours + "h ";
  let min = minutes > 0 ? minutes + "m" : "";
  return hour + min;

  return hour + min;
};
