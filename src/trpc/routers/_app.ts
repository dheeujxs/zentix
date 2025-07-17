import { projectsRouter } from '@/modules/projects/server/procedures';
import {  createTRPCRouter } from '../init';
import { messsagesRouter } from '@/modules/messages/server/procedures';
export const appRouter = createTRPCRouter({
  messages: messsagesRouter,
  projects:projectsRouter

});
// export type definition of API
export type AppRouter = typeof appRouter;