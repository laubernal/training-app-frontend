import * as React from 'react';

type TitleProps = {
  text: string;
};

export const SectionTitle = ({ text }: TitleProps) => {
  return (
    <div>
      <h1 className="ui header title">{text}</h1>
    </div>
  );
};
