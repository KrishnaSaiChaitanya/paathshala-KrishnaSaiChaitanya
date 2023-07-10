// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Testing, Jobs } = initSchema(schema);

export {
  Testing,
  Jobs
};