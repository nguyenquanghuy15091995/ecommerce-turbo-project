import {
  FC,
  createContext,
  ReactNode,
  useContext,
  HTMLAttributes,
} from "react";

export const DEFAULT_ICON_SIZE = 16;

export interface IconProps extends HTMLAttributes<SVGElement> {
  size?: number;
  color?: string;
}

export interface IconProviderProps extends IconProps {
  children?: ReactNode;
}

export const IconContext = createContext<IconProps>({
  size: DEFAULT_ICON_SIZE,
});

export const IconProvider: FC<IconProviderProps> = ({ children, ...props }) => {
  return (
    <>
      <IconContext.Provider value={{ ...props }}>
        {children}
      </IconContext.Provider>
    </>
  );
};

export function useIconContext(newProps: IconProps): IconProps {
  const contextData = useContext<IconProps>(IconContext);
  const iconData: IconProps = {
    ...contextData,
    ...newProps,
  };
  return iconData;
}

export default IconContext;
