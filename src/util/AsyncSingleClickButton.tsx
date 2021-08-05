import { Button, ButtonProps } from '@material-ui/core';
import { useCallback, useState } from 'react';

type AsyncButtonProps<T> = {
  asyncFunction: () => Promise<T>;
};

export default function AsyncSingleClickButton<T>({
  asyncFunction,
  disabled,
  children,
  ...other
}: ButtonProps & AsyncButtonProps<T>) {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleClick = useCallback(() => {
    setIsClicked(true);

    asyncFunction().finally(() => {
      setIsClicked(false);
    });
  }, [asyncFunction]);

  return (
    <Button onClick={handleClick} disabled={isClicked || disabled} {...other}>
      {children}
    </Button>
  );
}
