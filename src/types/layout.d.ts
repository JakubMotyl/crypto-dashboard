import type { Dispatch, SetStateAction } from "react";

export interface NavProps {
  showNav: boolean;
  setShowNav: Dispatch<SetStateAction<boolean>>;
}
