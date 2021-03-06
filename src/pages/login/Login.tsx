import React, { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "firebase-setup/firebaseConfig";
import RoutesTypes from "constants/routes-types";
import { useAppDispatch } from "redux-setup/hooks";
import fetchSignedUser from "redux-setup/features/signed-user/thunks/fetchSignedUser";

const Login: React.FC = React.memo(() => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const isInvalid = password.length < 6 || !email;

    const handleLogin = useCallback(async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        
        try {
            const user = await signInWithEmailAndPassword(auth, email, password);
            await dispatch(fetchSignedUser(user.user.uid))
            navigate(RoutesTypes.DASHBOARD);
        } 
        catch (error: any) {
            setEmail('');
            setPassword('');
            setError(error.message);
            console.log(error);
        }
    }, [auth, email, password])

    const handleEmail = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }, [])

    const handlePassword = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }, [])

    const toggleShowPassword = useCallback(() => {
        setShowPassword(prevVal => !prevVal)
    }, [])

    return (
        <div className="h-screen w-screen back">
            <div className="container flex mx-auto max-w-screen-md items-center h-screen">
                <div className="flex w-0 lg:w-3/5">
                    <img
                        src={process.env.PUBLIC_URL + "/images/iphone-with-profile.jpg"}
                        className="lg:max-w-sm"
                    />
                </div>
                <div className="w-4/5 sm:w-3/5 lg:w-1/2 mx-auto">
                    <div className="flex flex-col items-center w-full border bg-white">
                        <div className="flex justify-center w-full pb-4">
                            <img
                                src={process.env.PUBLIC_URL + "/images/instagram-logo.webp"}
                                className="w-6/12 mt-6"
                            />
                        </div>
                        {
                            error ? 
                            <p className="mb-4 w-4/5 text-xs text-red-500">{error}</p>:
                            null
                        }
                        <form
                            method="POST"
                            className="flex flex-col items-center w-full"
                        >
                            <input
                                aria-label="Enter your email address"
                                className="text-sm w-4/5 py-5 px-4 h-2 border rounded mb-2 bg-[#fcfafa]"
                                type="text"
                                placeholder="Email address"
                                value={email}
                                onChange={handleEmail}
                            />
                            <div className="w-4/5 border rounded mb-6 flex items-center bg-[#fcfafa]">
                                <input
                                    aria-label="Enter your password"
                                    autoComplete="on"
                                    className="text-sm w-full py-5 px-4 h-2 bg-[#fcfafa]"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                    value={password}
                                    onChange={handlePassword}
                                />
                                {
                                    password.length !== 0 &&
                                    <button
                                        type="button"
                                        onClick={toggleShowPassword}
                                        className="w-1/5 h-1/2 text-sm bg-red font-medium rounded"
                                    >
                                        {showPassword ? "Hide" : "Show"}
                                    </button>
                                }
                            </div>
                            <button
                                disabled={isInvalid}
                                type="submit"
                                className={`bg-blue-500 w-4/5 text-white rounded h-8 mb-8 font-bold ${isInvalid && "opacity-50"}`}
                                onClick={handleLogin}
                            >
                                Log In
                            </button>
                        </form>
                    </div>
                    <div className="flex w-full border bg-white mt-8 py-2 justify-center">
                        <p className="text-sm">
                            Don't have an account?{' '}
                            <Link to={RoutesTypes.SIGN_UP} className="font-bold text-blue-400">
                                Sign up
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default Login;