const MONTHS: Record<number, string> = {
  1: "Jan",
  2: "Feb",
  3: "Mar",
  4: "Apr",
  5: "May",
  6: "Jun",
  7: "Jul",
  8: "Aug",
  9: "Sep",
  10: "Oct",
  11: "Nov",
  12: "Dec",
};

export function convertMonthYearDateToString(
  year?: number,
  month?: number
): string {
  if (!year) return "Current";
  if (!month) return `${year}`;
  return `${MONTHS[month] ?? ""} ${year}`;
}
