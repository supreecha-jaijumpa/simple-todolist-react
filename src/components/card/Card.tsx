import { FC, PropsWithChildren } from "react";
import CardBody, { type CardBodyProps } from "./CardBody";
import CardHeader, { type CardHeaderProps } from "./CardHeader";
import CardFooter, { type CardFooterProps } from "./CardFooter";

type CardComposition = {
  Body: FC<CardBodyProps>;
  Header: FC<CardHeaderProps>;
  Footer: FC<CardFooterProps>;
};

type CardProps = PropsWithChildren;

const Card: FC<CardProps> & CardComposition = ({ children }) => {
  return (
    <div className="border border-solid p-2 border-gray-400 shadow rounded w-full max-w-sm">
      {children}
    </div>
  );
};

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;
