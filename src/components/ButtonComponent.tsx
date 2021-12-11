import * as React from 'react';

type ButtonProps = {
  text: string;
};

const ButtonComponent = ({ text }: ButtonProps): JSX.Element => {
  const [count, setCount] = React.useState(0);

  const onButtonClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    setCount(count + 1);
  };

  return (
    <div className="buttonLayout">
      <button className="ui button" onClick={e => onButtonClick(e)}>
        {text}
      </button>
      <h1>{`Button count: ${count}`}</h1>
    </div>
  );
};

export default ButtonComponent;