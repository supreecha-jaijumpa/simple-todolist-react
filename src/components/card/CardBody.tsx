import { FC, PropsWithChildren } from "react";

export type CardBodyProps = PropsWithChildren;

const CardBody: FC<CardBodyProps> = ({ children }) => {
  return (
    <div className="relative pb-4 w-full before:content-[''] before:h-full before:w-1 before:left-8 before:top-0 before:border-r before:border-l before:border-red-400 before:absolute">
      {children}
    </div>
  );
};

export default CardBody;
