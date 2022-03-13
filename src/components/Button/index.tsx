import React from 'react';

import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, Title, Loading, TypeProps } from './styles';

type Props = RectButtonProps & {
   title: string;
   type?: TypeProps;
   isLoading?: boolean;
}

const Button: React.FC<Props> = ({title, type= "primary", isLoading = false, ...rest}) => {
  return (
   <Container type={type}  enabled={!isLoading} {...rest}>
      {
         isLoading ? <Loading /> : <Title>{title}</Title>
      }
   </Container>
  );
}

export default Button;