import type { ReactNode } from "react";
import { useAuth } from "./AuthContext";

interface Props {
  children: ReactNode;
}

export function ProtectedRoute({ children }: Props) {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return null;
  }

  return children;
}
