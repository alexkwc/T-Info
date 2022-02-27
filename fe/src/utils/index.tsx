import { ReactNode, isValidElement } from "react";

/**
 * Find the first matching component from the children ReactNodeArray
 * @param children
 * @param Component
 */
export const getChildByType = (children: ReactNode[], Component: ReactNode): ReactNode =>
  children.find((child) => isValidElement(child) && child.type === Component);
