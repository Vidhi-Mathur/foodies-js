//use it as lower in your component tree to convert only req. server components to client components
'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./nav-link.module.css"

export default function NavLink({href, children}){
    //To get current active path, so can mark it in header based on which path we are in
    const path = usePathname()
    return (
    <>
   <Link href={href} className={path.startsWith(href)? `${classes.link} ${classes.active}`: classes.link}>{children}</Link>
    </>
    )
}