import * as React from 'react';

type TitleProps = {
  text: string;
};

const SectionTitle = ({ text }: TitleProps) => {
  return (
    <div>
      <h1 className="ui header title">{text}</h1>
    </div>
  );
};

export default SectionTitle;
