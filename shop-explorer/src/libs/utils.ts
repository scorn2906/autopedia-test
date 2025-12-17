// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const convertOptions = <T extends Record<string, any>>(
  data: T[],
  key: keyof T,
  value: keyof T
) => {
  return data.map((item) => ({
    label: item[key] ?? "",
    value: item[value] ?? "",
  }));
};
