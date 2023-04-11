import { styled } from '@mui/system';
import ButtonUnstyled from '@mui/core/ButtonUnstyled';
import { Theme } from '@mui/material/styles';
import { To } from 'react-router-dom';
import React from 'react';
import { Link } from 'react-router-dom';
import { LinkProps } from 'react-router-dom';

interface LinkWrapperProps extends LinkProps {
  ownerState?: any;
}

const LinkWrapper = React.forwardRef(function LinkWrapper(
  props: LinkWrapperProps,
  ref: React.Ref<HTMLAnchorElement>
) {
  const { ownerState, ...other } = props;
  return <Link {...other} ref={ref} />;
});

interface QxButtonProps {
  theme?: Theme;
  variant?: 'contained' | 'outlined' | 'text';
  color?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  children?: React.ReactNode;
  to?: To;
  component?: React.ElementType;
}

const QxButtonRoot = styled(ButtonUnstyled, {
  shouldForwardProp: (prop) => prop !== 'color',
})<QxButtonProps>(({ theme, variant, size, color, component }) => ({
  // Styles communs
  color: variant === 'contained' ? theme.palette.common.white : theme.palette[color!].main,
  borderRadius: theme.shape.borderRadius,
  fontWeight: theme.typography.fontWeightBold,
  transition: theme.transitions.create(['background-color', 'box-shadow'], {
    duration: theme.transitions.duration.short,
  }),

  // Variants
  ...(variant === 'outlined' && {
    borderColor: theme.palette[color!].main,
    borderWidth: 2,
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: theme.palette[color!].main,
      color: theme.palette.common.white,
    },
  }),
  ...(variant === 'contained' && {
    backgroundColor: theme.palette[color!].main,
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: theme.palette[color!].dark,
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: theme.palette[color!].main,
      },
    },
  }),
  ...(variant === 'text' && {
    padding: 0,
    color: theme.palette[color!].main,
    backgroundColor: theme.palette.background.paper,
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: theme.palette
      },
    },
  }),

  // Size
  ...(size === 'small' && {
    padding: '6px 16px',
    fontSize: theme.typography.pxToRem(14),
  }),
  ...(size === 'medium' && {
    padding: '8px 22px',
    fontSize: theme.typography.pxToRem(16),
  }),
  ...(size === 'large' && {
    padding: '12px 28px',
    fontSize: theme.typography.pxToRem(18),
  }),

  // Disabled
  '&.Mui-disabled': {
    opacity: 0.5,
    pointerEvents: 'none',
  },
}));

const QxButton = (props: QxButtonProps) => {
  const { variant = 'text', size = 'medium', color = 'primary', ...other } = props;
  return (
    <QxButtonRoot
      variant={variant}
      size={size}
      color={color}
      to="/" // Ajout de la prop to
      component={LinkWrapper} // Passer la prop "component" à QxButtonRoot
      {...other} // Passer toutes les autres propriétés à QxButtonRoot
    />
  );
};

export default QxButton;