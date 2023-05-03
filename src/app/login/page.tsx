"use client";
import { Auth } from "@/domain/Auth";
interface IFormEventProps{
    preventDefault: Function,
    target: {
        username: {
            value: string
        },
        password: {
            value: string
        }
    }
}

const handleSubmit = (event: IFormEventProps) => {
    event.preventDefault();
    let username: string = event.target.username.value;
    let password: string = event.target.password.value;
    Auth.login({username , password}).then(response => {
        console.log("LOGGED IN",response);
    }).catch(e => {
        console.error(e);
    })
}

export default function LoginPage() {
    
    
    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-4xl font-semibold text-center text-gray-800 underline">
                    Task M
                </h1>
                <form onSubmit={handleSubmit}  className="mt-6" method="post" action="localhost:3000/auth/login" encType="multipart/formdata">
                    <div className="mb-2">
                        <label
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Identifiant
                        </label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Mot de passe
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <a
                        href="#"
                        className="text-xs text-purple-600 hover:underline"
                    >
                        Mot de passe oublié?
                    </a>
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                            Se connecter
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Pas encore de compte?{" "}
                    <a
                        href="#"
                        className="font-medium text-purple-600 hover:underline"
                    >
                        S'enregistrer
                    </a>
                </p>
            </div>
        </div>
    )
}