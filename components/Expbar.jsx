const ExpBar = ({ width, barColor, isTrigger }) => {
    return (
        <div className="w-full bg-gray-300 dark:bg-gray-700 shadow-inner rounded-full h-1.5">
            <div
                className={`${barColor} shadow-2xl rounded-full h-1.5 transition-all ease-in-out duration-[1500ms]`}
                style={{ width: `${isTrigger ? width : 0}%` }}
            ></div>
        </div>
    )
}

export default ExpBar