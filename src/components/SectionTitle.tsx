import * as React from 'react';
import { TitleProps } from '../types';

export const SectionTitle = ({ text }: TitleProps) => {
  return (
    <div>
      <h1 className="ui header title">{text}</h1>
    </div>
  );
};
