

import { useSession } from "next-auth/client";
import prisma from "../../../lib/prisma";


const addToFavourite = async (id:number) => {
    const [session,loading] = useSession();
    await prisma.user.update({
        where: {
           
        },
        data: {

        }
    }) 
}