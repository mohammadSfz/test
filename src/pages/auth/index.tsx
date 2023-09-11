import { useState } from "react";
import { useAuth } from "../../contexts/auth";
import { Navigate } from 'react-router-dom';
import { Api } from "../../../utils/Api";


function Index() {

    const { auth, login } = useAuth();
    const [data, setData] = useState<{
        username?: any,
        email?: any,
        password?: any
    }>();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const onFinish = (event: any) => {

        event.preventDefault();
        setLoading(true);
        setError(false);
        Api.post('login', data )
            .then((res: any) => {
                if(res?.response?.data?.error){
                    setError(res?.response?.data?.error)
                }else{
                    login({token:res.token, username:data?.username});
                }
                   
                
              
            })
            .catch((err: any) => {
                console.log(err.response, "error")
            })
    }
    if (auth) {
        return <Navigate to="/" replace />;
    }
    return (
        <section className="bg-gray-50 dark:bg-gray-900">

            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    Test React
                </a>

                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={onFinish}>
                            <div>
                                <label htmlFor="username" className=" mb-2 text-sm font-medium text-gray-900 dark:text-white flex	" >Username</label>
                                <input
                                    required
                                    onChange={(e: any) => setData({
                                        ...data,
                                        username: e.target.value
                                    })}
                                    type="text" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />
                            </div>
                            <div>
                                <label htmlFor="email" className=" mb-2 text-sm font-medium text-gray-900 dark:text-white flex	" >Your email</label>
                                <input
                                    required
                                    onChange={(e: any) => setData({
                                        ...data,
                                        email: e.target.value
                                    })}
                                    type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />
                            </div>
                            <div>
                                <label htmlFor="password" className="flex mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input
                                    required
                                    onChange={(e: any) => setData({
                                        ...data,
                                        password: e.target.value
                                    })}
                                    type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>

                            <button type="submit" className="w-full text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                            {error &&<div className="text-[#880808]">
                                {error}
                            </div>}
                        </form>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Index;