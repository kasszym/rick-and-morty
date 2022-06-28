export const convertParams = (index, name, gender) => {
  let params = "?";
  params += `page=${index}`;
  if (name) params += `&name=${name}`;
  if (gender) params += `&gender=${gender}`;
  return params;
};
