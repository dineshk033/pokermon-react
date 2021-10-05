export const getQueryParams = (url: string) => {
  let queryString = new URLSearchParams(url);

  var count: any[] = [];
  queryString.forEach((el) => {
    count.push(el);
  });

  return count;
};
