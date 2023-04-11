import * as React from 'react';
import { styled } from '@mui/system';
import Button, { ButtonProps } from '@mui/material/Button';

const UnstyledButton = styled(Button)({
  color: 'inherit',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
  '&:disabled': {
    opacity: 0.5,
  },
});

type ButtonUnstyledProps = Omit<ButtonProps, 'variant' | 'color'>;

const ButtonUnstyled = React.forwardRef<HTMLButtonElement, ButtonUnstyledProps>((props, ref) => {
  const { children, ...rest } = props;
  return <UnstyledButton ref={ref} {...rest}>{children}</UnstyledButton>;
});

export default ButtonUnstyled;
