export const dateToLocalISO = (date) => {
  const off = date.getTimezoneOffset();
  const absoff = Math.abs(off);
  return (
    new Date(date.getTime() - off * 60 * 1000).toISOString().substr(0, 23) +
    (off > 0 ? "-" : "+") +
    Math.floor(absoff / 60)
      .toFixed(0)
      .padStart(2, "0") +
    ":" +
    (absoff % 60).toString().padStart(2, "0")
  );
};

export const addMinutes =  (dt, minutes) => {
  return new Date(dt.getTime() + minutes * 60000);
};
