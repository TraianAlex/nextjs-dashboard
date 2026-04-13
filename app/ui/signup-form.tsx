'use client';

import { lusitana } from '@/app/ui/fonts';
import {
  AtSymbolIcon,
  KeyIcon,
  UserIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from './button';
import { useActionState } from 'react';
import { signup } from '@/app/lib/actions';
import { initialSignupFormState } from '@/app/lib/signup-form-state';
import Link from 'next/link';

export default function SignupForm() {
  const [state, formAction, isPending] = useActionState(
    signup,
    initialSignupFormState,
  );

  return (
    <form
      action={formAction}
      className='space-y-3'
      key={JSON.stringify(state)}
    >
      <div className='flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8'>
        <h1 className={`${lusitana.className} mb-3 text-2xl`}>
          Create an account
        </h1>
        <div className='w-full'>
          <div>
            <label
              className='mb-3 mt-5 block text-xs font-medium text-gray-900'
              htmlFor='name'
            >
              Name
            </label>
            <div className='relative'>
              <input
                className='peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500'
                id='name'
                type='text'
                name='name'
                defaultValue={state.name}
                placeholder='Enter your name'
                required
                minLength={1}
              />
              <UserIcon className='pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900' />
            </div>
          </div>
          <div className='mt-4'>
            <label
              className='mb-3 mt-5 block text-xs font-medium text-gray-900'
              htmlFor='email'
            >
              Email
            </label>
            <div className='relative'>
              <input
                className='peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500'
                id='email'
                type='email'
                name='email'
                defaultValue={state.email}
                placeholder='Enter your email address'
                required
              />
              <AtSymbolIcon className='pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900' />
            </div>
          </div>
          <div className='mt-4'>
            <label
              className='mb-3 mt-5 block text-xs font-medium text-gray-900'
              htmlFor='password'
            >
              Password
            </label>
            <div className='relative'>
              <input
                className='peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500'
                id='password'
                type='password'
                name='password'
                defaultValue={state.password}
                placeholder='Enter password (min. 6 characters)'
                required
                minLength={6}
                autoComplete='new-password'
              />
              <KeyIcon className='pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900' />
            </div>
          </div>
          <div className='mt-4'>
            <label
              className='mb-3 mt-5 block text-xs font-medium text-gray-900'
              htmlFor='passwordConfirm'
            >
              Confirm password
            </label>
            <div className='relative'>
              <input
                className='peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500'
                id='passwordConfirm'
                type='password'
                name='passwordConfirm'
                defaultValue={state.passwordConfirm}
                placeholder='Re-enter your password'
                required
                minLength={6}
                autoComplete='new-password'
              />
              <KeyIcon className='pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900' />
            </div>
          </div>
        </div>
        <Button className='mt-4 w-full' aria-disabled={isPending}>
          Sign up <ArrowRightIcon className='ml-auto h-5 w-5 text-gray-50' />
        </Button>
        <div
          className='flex h-8 items-end space-x-1'
          aria-live='polite'
          aria-atomic='true'
        >
          {state.error && (
            <>
              <ExclamationCircleIcon className='h-5 w-5 text-red-500' />
              <p className='text-sm text-red-500'>{state.error}</p>
            </>
          )}
        </div>
        <p className='text-center text-sm text-gray-500'>
          Already have an account?{' '}
          <Link href='/login' className='font-medium text-blue-600'>
            Log in
          </Link>
        </p>
      </div>
    </form>
  );
}
