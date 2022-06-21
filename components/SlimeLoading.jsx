import { useState, useEffect } from "react";
import SlimeJump from '../public/assets/svg/slime-jump.svg?url'

const SlimeLoading = ({ loading = true }) => {
    const [frame, setFrame] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setFrame((prevState) => prevState === 11 ? 0 : prevState + 1)
        }, 90)

        return () => clearInterval(intervalId)

    }, [loading])

    return (
        <div className={'my-4 h-full flex flex-col items-center justify-center transition-all duration-300 ease-linear'}>
            <svg className="h-36 w-36" width="36" height="36" viewBox="0 0 512 512">
                {Array.from({ length: 12 }, (_, i) => (
                    <use
                        key={i}
                        href={`${SlimeJump}#slime-jump-${i}`}
                        className={i === frame ? 'block' : 'hidden'}
                    />
                ))}
            </svg>
            <h1 className='text-secondary dark:text-primary font-press-start text-lg font-light animate-pulse-fast text-center'>
                LOADING
            </h1>
        </div>
    )
}

export default SlimeLoading