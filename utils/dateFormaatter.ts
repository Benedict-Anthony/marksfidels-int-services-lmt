import moment from "moment";

export const formatDate = (dateString: string, format: string) => {
  const formattedDate = moment(dateString).format(format);
  return formattedDate;
};
