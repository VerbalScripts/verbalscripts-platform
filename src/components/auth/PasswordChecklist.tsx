import { classNames } from '@/utils/classNames';
import {
  LENGTH_REGEX,
  NUMBER_REGEX,
  SPECIAL_CHARS_REGEX,
  UPPERCASE_REGEX,
} from '@/utils/validationRule';
import React from 'react';

interface props {
  value: string;
}
export default function PasswordChecklist({ value }: props) {
  const rules = [
    {
      label: 'One uppercase',
      pattern: UPPERCASE_REGEX,
    },
    {
      label: 'One number',
      pattern: NUMBER_REGEX,
    },
    {
      label: 'Min 8 characters',
      pattern: LENGTH_REGEX,
    },
    {
      label: 'One special char',
      pattern: SPECIAL_CHARS_REGEX,
    },
  ];
  return (
    <div className='py-2 px-2 border border-gray-200 rounded-lg bg-gray-50 my-2'>
      {rules.map((rule) => {
        const cn =
          value && value.match(rule.pattern)
            ? 'text-green-600'
            : 'text-red-600';
        const pass = value && value.match(rule.pattern) ? true : false;
        return (
          <p
            key={rule.label}
            className={classNames('flex items-center gap-x-5 ', cn)}
          >
            <span>{rule.label}</span>
            <span>{pass ? '✔' : '✖'}</span>
          </p>
        );
      })}
    </div>
  );
}
