// create a new file called `MuiClassNameSetup.tsx` at the root or src folder.
import { unstable_ClassNameGenerator as ClassNameGenerator } from '@mui/material/className';

ClassNameGenerator.configure((componentName) => componentName.replace('Mui', 'Qx'));

export default function MuiClassNameSetup() {
  return null;
}