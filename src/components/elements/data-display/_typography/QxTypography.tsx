import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';
import Typography, { TypographyProps } from '@mui/material/Typography';
import clsx from 'clsx';

const useStyles = makeStyles<Theme>((theme) => ({
  srOnly: {
    border: '0',
    clip: 'rect(0 0 0 0)',
    height: '1px',
    margin: '-1px',
    overflow: 'hidden',
    padding: '0',
    position: 'absolute',
    width: '1px',
    whiteSpace: 'nowrap',
  },
}));

interface Props extends TypographyProps {
  srOnly?: boolean;
}

const QxTypography = ({ className, srOnly, ...other }: Props) => {
  const classes = useStyles();

  const rootClassName = clsx(className, {
    [classes.srOnly]: srOnly,
  });

  return <Typography className={rootClassName} {...other} />;
};

export default QxTypography;
