export const getDaysInMonth = (month: number, year: number) =>
    new Array(new Date(year, month + 1, 0).getDate())
      .fill(null)
      .map((_, i) => new Date(year, month, i + 1).toISOString().split('T')[0]);
  
  export const isToday = (date: string) => date === new Date().toISOString().split('T')[0];
  