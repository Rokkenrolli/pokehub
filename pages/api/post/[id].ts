// pages/api/post/[id].ts

import { NextApiHandler } from 'next';
import prisma from '../../../lib/prisma';

// DELETE /api/post/:id
const  handle:NextApiHandler = async(req, res) => {
  const id = req.query.id;
  if (req.method === 'DELETE') {
    const post = await prisma.favourite.deleteMany({
      where: { pokemonId: Number(id) },
    });
    res.json(post);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`,
    );
  }
}

export default handle