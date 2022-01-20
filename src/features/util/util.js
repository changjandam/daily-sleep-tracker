export const getDetail = ({ start, end }) => {
  const date = `${new Date(start).getMonth() + 1}/${new Date(start).getDate()}`;
  const formatTime = (time) => {
    const hour = new Date(time).getHours().toString();
    const minute = new Date(time).getMilliseconds().toString();
    return `${hour.length === 1 ? '0' + hour : hour}: ${
      minute.length === 1 ? '0' + minute : minute
    }`;
  };
  const duration = (
    (new Date(end) - new Date(start)) /
    (1000 * 3600)
  ).toPrecision(2);
  return {
    date,
    start: formatTime(start),
    end: formatTime(end),
    duration,
  };
};
