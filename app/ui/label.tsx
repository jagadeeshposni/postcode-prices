import React from 'react';
import clsx from 'clsx';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
}

export function Label({ children, className, ...rest }: LabelProps) {
  return (
    <label
      {...rest}
      className={clsx(
        'block text-sm font-medium text-gray-700',
        className
      )}
    >
      {children}
    </label>
  );
}