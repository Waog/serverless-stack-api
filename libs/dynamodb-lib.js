import AWS from "aws-sdk";

export function call(action, params) {
  AWS.config.update({ region: "us-east-1" }); // region of dynamoDB
  const dynamoDb = new AWS.DynamoDB.DocumentClient();

  return dynamoDb[action](params).promise();
}
