import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, TypeProps } from './styles';

type Props = TextInputProps & {
   type?: TypeProps;
}

const Input: React.FC<Props> = ({type = "primary", ...rest}) => {
  return <Container type={type} {...rest} />;
}

export default Input;