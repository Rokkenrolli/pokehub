import { PrismaClient } from '@prisma/client'

declare global {
  var prisma: PrismaClient
}

 const prisma =
  global.prisma ||
  new PrismaClient({
    log: ['query'],
  })

 global.prisma = prisma

export default prisma