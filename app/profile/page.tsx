"use client"
/**
 * The default page we just need to skip when we need it.
 * @returns 
 */

import { useRouter } from "next/router";
import { useEffect } from "react";



export default function Page() {
   
    const router = useRouter();

    useEffect(()=>{
        router.push("/profile/wishlist")
    },[])

}