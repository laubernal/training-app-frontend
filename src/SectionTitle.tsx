import React from 'react';

type TitleProps = {
  text: string;
};

const SectionTitle = ({ text }: TitleProps) => {
  return (
    <div>
      <h1 className="ui header">{text}</h1>
    </div>
  );
};

export default SectionTitle;
