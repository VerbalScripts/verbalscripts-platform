import ComponentSpinner from '@/components/ComponentSpinner';
import React from 'react';

export default function loading() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <ComponentSpinner size={'xl'} />
    </div>
  );
}
