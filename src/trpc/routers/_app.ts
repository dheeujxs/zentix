import { projectsRouter } from '@/modules/projects/server/procedures';
import {  createTRPCRouter } from '../init';
import { messsagesRouter } from '@/modules/messages/server/procedures';
import { usageRotuer } from '@/modules/usage/server/procedure';
export const appRouter = createTRPCRouter({
  usage:usageRotuer,
  messages: messsagesRouter,
  projects:projectsRouter

});
// export type definition of API
export type AppRouter = typeof appRouter;