import { FC, PropsWithChildren } from "react";

export type CardFooterProps = PropsWithChildren;

const CardFooter: FC<CardFooterProps> = ({ children }) => {
  return <div className="w-full py-2">{children}</div>;
};

export default CardFooter;
