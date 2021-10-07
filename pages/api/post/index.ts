
import { NextApiHandler } from 'next';
import { Session } from 'next-auth';
import { getSession } from 'next-auth/client';
import prisma from '../../../lib/prisma';


// POST /api/post
// Required fields in body: title
// Optional fields in body: content
 const handle: NextApiHandler = async(req, res) => {
  const { id, name, url } = req.body;
  const session = await getSession({req});
  const result = await createFavourite(id, name, url,session)
  res.json(result);
}

export const createFavourite = async (id:number, name:string, url:string, session:Session | null) => {
  if (!session) {
    return {status:403, text: "unauthenticated"}
  }
  const userId = Number(session['userId'])
  const result = await prisma.favourite.create({
      data: {
          pokemonId:id,
          pokemonName:name,
          pokemonUrl:url,
          idUser: userId
      }
  })
  return result
}

export default handle