import { FC, ReactNode } from "react";

export type CardHeaderProps = {
  title?: string;
  extra?: ReactNode;
};

const CardHeader: FC<CardHeaderProps> = ({ title, extra }) => {
  return (
    <div className="relative flex justify-between py-2 space-x-2 pl-12 w-full before:content-[''] before:h-full before:w-1 before:left-8 before:top-0 before:border-r before:border-l before:border-red-400 before:absolute border-b border-blue-400">
      <h2 className="font-medium text-lg">{title}</h2>
      <div>{extra}</div>
    </div>
  );
};

CardHeader.defaultProps = {
  title: "Card Title",
  extra: <></>,
};

export default CardHeader;
