exports.handler = async (event) => {
  console.log("Lambda function triggered");
  return {
    statusCode: 200,
    body: JSON.stringify('Hello from Lambda!'),
  };
};
