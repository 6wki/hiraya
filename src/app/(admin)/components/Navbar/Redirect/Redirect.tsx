"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Redirect = ({ cn }: { cn: any }) => {
  const pathname = usePathname();
  const condition = pathname.startsWith("/admin");

  return (
    <Link className={cn} href={condition ? "/" : "/admin/dashboard"}>
      {condition ? "H" : "A"}
    </Link>
  );
};

export default Redirect;
