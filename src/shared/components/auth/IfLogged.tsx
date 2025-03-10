import { selectAuthIsLogged, useAuth } from "@/services/auth";
import { PropsWithChildren } from "react";

export function IfLogged(props: PropsWithChildren) {
  const isLogged = useAuth(selectAuthIsLogged);

  return <>{isLogged ? props.children : null}</>;
}
