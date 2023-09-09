import Options from "@/app/lib/Options";
import Link from "next/link";

const Links = () => {
  return (
    <div>
      <Options
        authComponent={
          <ul>
            <Link href="/abaya">
              <li>abaya</li>
            </Link>
            <Link href="/khimar">
              <li>khimar</li>
            </Link>
            <Link href="/jilbab">
              <li>jilbab</li>
            </Link>
          </ul>
        }
        noneAuthComponent={
          <ul>
            <Link href="/abaya">
              <li>admin</li>
            </Link>
            <Link href="/khimar">
              <li>admin</li>
            </Link>
            <Link href="/jilbab">
              <li>admin</li>
            </Link>
          </ul>
        }
      />
    </div>
  );
};

export default Links;
