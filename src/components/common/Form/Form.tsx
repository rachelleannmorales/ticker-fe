import * as React from 'react';
import { StyledFormContainer, StyledForm } from './Form.styles';

interface IFormProps {
  children: any
}

const Form: React.FC<IFormProps> = ({children}) => {
  return ( 
    <StyledFormContainer>
            <StyledForm>
                {children}
            </StyledForm>
     </StyledFormContainer>
  )
};

export default Form;
