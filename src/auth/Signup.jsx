import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    return (
        <>
            <section className="bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee]">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        <img
                            alt="logo"
                            className="w-8 h-8 mr-2"
                            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
                        />
                        NAILA ARTS
                    </div>
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Create and account
                            </h1>
                            <form
                                action="#"
                                className="space-y-4 md:space-y-6"
                            >
                                <div>
                                    <label
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        htmlFor="email"
                                    >
                                        Your email
                                    </label>
                                    <input
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        id="email"
                                        name="email"
                                        placeholder="name@gmail.com"
                                        required
                                        type="email"
                                    />
                                </div>
                                <div>
                                    <label
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        htmlFor="password"
                                    >
                                        Password
                                    </label>
                                    <input
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        id="password"
                                        name="password"
                                        placeholder="••••••••"
                                        required
                                        type={showPassword ? 'text' : 'password'}
                                    />
                                </div>
                                <div>
                                    <label
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        htmlFor="confirm-password"
                                    >
                                        Confirm password
                                    </label>
                                    <input
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        id="confirm-password"
                                        name="confirm-password"
                                        placeholder="••••••••"
                                        required
                                        type={showPassword ? 'text' : 'password'}
                                    />
                                </div>
                                <div className="flex items-start">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input
                                                aria-describedby="remember"
                                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-0 dark:bg-gray-700 dark:border-gray-600"
                                                id="remember"
                                                required
                                                type="checkbox"
                                                onChange={togglePasswordVisibility}
                                            />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label
                                                className="text-gray-500 dark:text-gray-300 select-none cursor-pointer"
                                                htmlFor="remember"
                                            >
                                                show password
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <button onClick={() => { navigate('/dashboard') }}
                                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                    type="submit"
                                >
                                    Create an account
                                </button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Already have an account?{' '}
                                    <Link to="/"
                                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                    >
                                        Login here
                                    </Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Signup