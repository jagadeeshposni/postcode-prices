import React from 'react';
import clsx from 'clsx';

interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Switch({ className, checked, ...rest }: SwitchProps) {
  return (
    <label className="relative inline-block w-12 h-6">
      <input
        type="checkbox"
        className={clsx(
          'opacity-0 w-0 h-0',
          className
        )}
        checked={checked}
        {...rest}
      />
      <span
        className={clsx(
          'absolute inset-0 rounded-full cursor-pointer transition-colors duration-200 ease-in-out',
          checked ? 'bg-blue-500' : 'bg-gray-200',
          'before:absolute before:top-0.5 before:left-0.5 before:bg-white before:rounded-full before:h-5 before:w-5 before:transition-transform before:duration-200',
          checked ? 'before:translate-x-6' : 'before:translate-x-0'
        )}
      ></span>
    </label>
  );
}