const CircleProgress = ({ dashOffset, strokeColor, text, trigger }) => {
  // console.log(trigger ? (100 - dashOffset) : 0);
  return (
    <div className='relative h-full w-full rounded-full bg-gray-300 dark:bg-gray-700'>
      <svg
        className={strokeColor + ' -rotate-90 absolute inset-0 m-auto'}
        viewBox='0 0 128 128'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle
          className='transition-all ease-in-out duration-[1500ms]'
          cx='64'
          cy='64'
          r='60'
          strokeDasharray={100}
          strokeDashoffset={trigger ? 100 - dashOffset : 100}
          strokeWidth={8}
          pathLength={100}
          strokeLinecap='round'
        />
      </svg>
    </div>
  );
};

export default CircleProgress;
