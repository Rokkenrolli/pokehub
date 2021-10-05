import { NextApiHandler } from 'next';
import NextAuth, { User,Session } from 'next-auth';
import Providers from 'next-auth/providers';
import Adapters from 'next-auth/adapters';
import prisma from '../../../lib/prisma';


const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options);
export default authHandler;

const options = {
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    session: async (session:Session, user:User) => {
      session.userId = user.id;    
      return Promise.resolve(session);
    }
  },
  
  adapter: Adapters.Prisma.Adapter({ prisma }),
  secret: process.env.SECRET,
};