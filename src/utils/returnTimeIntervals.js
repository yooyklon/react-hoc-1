export default function returnTimeIntervals(dateOld, currentDate) {
  const old = dateOld;
  const current = currentDate;
  let t = current.getTime() - old.getTime();
  const dt = parseInt(t / (1000 * 60 * 60 * 24));
  // t = t % (1000 * 60 * 60 * 24);
  const dh = parseInt(t / (1000 * 60 * 60));
  // t = t % (1000 * 60 * 60);
  const dm = parseInt(t / (1000 * 60));
  // t = t % (1000 * 60);
  const ds = parseInt(t / 1000);
  // t = t % (1000 * 60);
  const dms = parseInt(t % 1000);

  return {
    days: dt,
    hours: dh,
    minutes: dm,
    seconds: ds,
    miliSeconds: dms
  }
}