import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

const Options = async ({
  authComponent,
  noneAuthComponent,
}: {
  authComponent?: React.ReactNode;
  noneAuthComponent: React.ReactNode;
}) => {
  const session = await getServerSession(authOptions);

  return <>{session ? authComponent : noneAuthComponent}</>;
};

export default Options;
