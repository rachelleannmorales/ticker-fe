import * as React from 'react';
import { StyledInput } from './TextField.styles';

interface ITextFieldProps {
  id: string,
  placeholder: string,
  type?: string,
  value: any,
  onChange: (e: any) => void
}

const TextField: React.FunctionComponent<ITextFieldProps> = ({
  id,
  placeholder,
  type = 'text',
  value,
  onChange
}) => {
  return <StyledInput data-testid={id} id={id} placeholder={placeholder} type={type} value={value} onChange={onChange}/>
};

export default TextField;