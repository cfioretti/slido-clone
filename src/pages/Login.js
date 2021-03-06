import React from 'react';
import AuthService from '../services/Auth';
import Input from '../components/commons/Input';
import Button from "../components/commons/Button";
import Form from "../components/commons/Form";

const Login = props => {
    const handleFormSubmit = e => {
        e.preventDefault();

        AuthService.Login({
            identifier: e.target.elements.email?.value,
            password: e.target.elements.password?.value
        }).then(
            res => {
                localStorage.setItem('slido-clone_auth', JSON.stringify(res));
                props.history.push('/');
            },
            error => {
                console.error(error);
            }
        );
    };

    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-md w-full space-y-8'>
                <div>
                    <h2 className='mt-6 text-center text-5xl font-extrabold text-gray-900'>SLIDO CLONE</h2>
                </div>
                <Form onSubmit={handleFormSubmit} className='mt-8 space-y-6'>
                    <input type='hidden' name='remember' value='true'/>
                    <div className='rounded-md shadow-sm -space-y-px'>
                        <div>
                            <Input
                                id='email-address'
                                name='email'
                                type='email'
                                autoComplete='email'
                                required
                                className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                                placeholder='Email address'
                                label="Email Address"
                            />
                        </div>
                        <div>
                            <Input
                                id='password'
                                name='password'
                                type='password'
                                autoComplete='current-password'
                                required
                                className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                                placeholder='Password'
                                label='Password'
                            />
                        </div>
                    </div>
                    <div>
                        <Button
                            type='submit'
                            className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                        >
                          <span className='absolute left-0 inset-y-0 flex items-center pl-3'>
                            <svg
                                className='h-5 w-5 text-indigo-500 group-hover:text-indigo-400'
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 20 20'
                                fill='currentColor'
                                aria-hidden='true'
                            >
                              <path
                                  fill-rule='evenodd'
                                  d='M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z'
                                  clip-rule='evenodd'
                              />
                            </svg>
                          </span>
                            Sign in
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
};
export default Login;
