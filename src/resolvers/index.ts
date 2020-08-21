import { prismaObjectType } from 'nexus-prisma';

export const Task = prismaObjectType({
  name: 'Task',
  definition(t) {
    t.prismaFields(['*'])
  },
})

export * from './Query'
export * from './Mutation'
