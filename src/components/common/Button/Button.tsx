import * as React from 'react';
import { StyledButton } from './Button.styles';

interface IButtonProps {
    id: string,
    text: string,
    onClick: () => void
}

const Button: React.FunctionComponent<IButtonProps> = (props) => {

  const onSubmit = (e:any, callback?: () => void) => {
    e.preventDefault();
    if (callback) {
     callback(); 
    }
  } 

  return ( 
    <StyledButton data-testid={props.id} id={props.id} onClick={(e: any) => onSubmit(e, props.onClick)}>
      {props.text}
    </StyledButton>
  )
};

export default Button;
