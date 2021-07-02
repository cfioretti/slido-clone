import React from "react";

const NotFound = (props) => {

    const goBack = ()=> {
        props.history.push('/')
    }

    return <div className="h-screen w-screen bg-blue-900 w-full flex items-center">
        <div className="w-screen flex flex-col md:flex-row items-center justify-center px-5">
            <div className="max-w-md">
                <div className="text-8xl text-white text-center font-bold">404</div>
                <button
                    onClick={goBack}
                    className="m-5 px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700">back
                    to homepage
                </button>
            </div>
        </div>
    </div>
}
export default NotFound