import {  createTRPCRouter } from '../init';
import { messsagesRouter } from '@/modules/messages/server/procedures';
export const appRouter = createTRPCRouter({
  messages: messsagesRouter

});
// export type definition of API
export type AppRouter = typeof appRouter;