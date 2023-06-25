import { FC, HTMLProps } from 'react';
import { NavLink } from 'react-router-dom';

type LinkProps = HTMLProps<HTMLAnchorElement> & {
  to: string;
  isActive?: boolean;
};

const Link: FC<LinkProps> = ({ to, isActive, children, ...rest }) => {
  const htmlProps = rest as any;
  return (
    <NavLink
      to={to}
      onClick={(event) => {
        if (htmlProps.onClick) {
          htmlProps.onClick(event);
        }
        (event.target as HTMLAnchorElement).blur();
      }}
      {...htmlProps}
    >
      {children}
    </NavLink>
  );
};

export default Link;
