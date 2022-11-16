export const convertDate = (dataNum: number): string => {
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  } as const;
  return new Date(dataNum).toLocaleDateString("en-GB", options);
};

export const getLastName = (fullname: string): string => {
  const arrName = fullname.split(" ");
  return arrName[arrName.length - 1];
};
