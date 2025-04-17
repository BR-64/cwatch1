import { useState } from 'react';

function LoginForm({ onSubmit }) {
  const [term, setTerm] = useState('');

  const handleFormSubmit = (event) => {
    onsubmit(term);
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <div>
      <div>
        <h2>Login Page</h2>
        <div class='sm:col-span-4'>
          <div class='mt-2'>
            <div class='flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600'>
              <input
                type='text'
                name='username'
                id='username'
                class='block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6'
                placeholder='username'
                // value={name}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div class='sm:col-span-4'>
          <div class='mt-2'>
            <div class='flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600'>
              <input
                type='text'
                name='password'
                id='password'
                class='block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6'
                placeholder='password'
              />
            </div>
          </div>
        </div>

        <div class='mt-6 flex items-center space-y-6'>
          <button
            onclick={handleFormSubmit}
            class='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
            Login
          </button>
        </div>
      </div>
      {/* <h1>{LoginInfo}</h1> */}
    </div>
  );
}

export default LoginForm;
