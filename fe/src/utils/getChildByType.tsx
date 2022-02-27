import { ReactNode, isValidElement } from 'react';

/**
 * Find the first matching component from the children ReactNodeArray
 * @param children
 * @param Component
 */
function getChildByType(children: ReactNode[], Component: ReactNode): ReactNode {
  return children.find((child) => isValidElement(child) && child.type === Component);
}

export default getChildByType;
