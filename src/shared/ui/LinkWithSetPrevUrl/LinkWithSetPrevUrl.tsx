import { type FC } from 'react';
import { Link, LinkProps, useLocation } from 'react-router-dom';

export const LinkWithSetPrevUrl: FC<LinkProps> = (props) => {
  const location = useLocation();

  return <Link {...props} state={{ prevUrl: location.pathname }} />;
};
