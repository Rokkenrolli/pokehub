import { NextApiHandler } from "next";
import { getSession } from "next-auth/client";
import prisma from "../../../lib/prisma";

 const handle: NextApiHandler = async(req, res) => {
    const id = req.query.id
    const session = await getSession({req});
    if (!session) {
        res.json({status:403})
        return
    }
    const result = await prisma.favourite.findMany({
        where: {idUser:Number(session['userId']), pokemonId:Number(id)}
    })
    console.log(result)
    res.json({isFavourite:result.length >0});
  }

  export default handle