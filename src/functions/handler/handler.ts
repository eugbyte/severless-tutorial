import 'source-map-support/register';

import type { ValidatedAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import RequestSchema from "./RequestSchema";
import { container } from 'src/di/container';
import { IUtil } from 'src/services/util-service';


export const handler = async (utilService: IUtil, event: ValidatedAPIGatewayProxyEvent<typeof RequestSchema>) => {
  /*
  The event object, which is one of our function arguments, represents the information about the kind of event that would trigger our function and cause it to start executing a piece of our code.
  The context object contains information about the environment our function is to be executed on (note that this is usually handled by cloud providers on our behalf).
  Lastly, the callback function takes care of returning a response or an error object, usually based on the request made by user events. However, given that this function is already async, the callback will not work
  */

  event.path;
  event.pathParameters;
  event.queryStringParameters;

  event.requestContext; // contains information of lambda cloud environment
  event.requestContext.accountId;

  event.body;  // request body
  
  // the variables in the event body are type checked to the RequestSchema you define
  event.body.name;
  event.body.age;
  
  const response = formatJSONResponse({
    message: `Hello ${event.body.name} of age ${event.body.age}, welcome to the exciting Serverless world!`,
    anotherMessage: utilService.greet()
  });

  response.statusCode;  // defaults to 200
  response.statusCode = 201;

  return response;
}

const injectedHandler = handler.bind(null, container.utilService);

// wrap the lambda in middleware
export const main = middyfy(injectedHandler); // best practice to keep the name as main, since the importing file will be using `path/handler.main`,

