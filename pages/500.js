
const ServerError = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-8xl font-press-start text-secondary dark:text-primary text-center py-4">
                500
            </h1>
            <p className="text-4xl text-gray-800 dark:text-gray-200 text-center py-4">Internal Server Error.</p>
        </div>
    )
}

export default ServerError