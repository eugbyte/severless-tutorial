import RequestSchema from './RequestSchema';

const currentPath: string = `${__dirname.split(process.cwd())[1].substring(1)}`;

export const handlerSchema =  {
  handler: `${currentPath}/handler.main`,
  events: [
    {
      http: {
        method: 'post',
        path: 'create',
        cors: true,
        request: {
          schema: {
            'application/json': RequestSchema
          }
        }
      }
    }
  ]
}
