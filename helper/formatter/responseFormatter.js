const meta = (message, code, status) => {
  const metaData = {
    message,
    code,
    status,
  };
  return metaData;
};

const formatRes = (metaData, data) => {
  const apiResponse = {metaData, data};
  return apiResponse;
};

module.exports = {meta, formatRes};
