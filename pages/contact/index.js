import { useEffect, useState } from 'react';
import { FaLinkedin, FaCopyright, FaRegEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    email: '',
    message: '',
  });

  const { name, subject, email, message } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='w-full h-auto flex flex-col items-center justify-start pt-20 pb-4 px-2 sm:px-6'>
      <div
        className='relative w-full flex flex-col items-center justifiy-center 
                      my-8 md:px-0 md:w-3/4 md:max-w-xl rounded-2xl shadow-xl bg-surface dark:bg-slate-700'
      >
        <h1 className='text-xl md:text-3xl text-slate-800 dark:text-gray-300 font-press-start my-8'>Contact Me</h1>

        <form className='w-full mb-8 px-8 md:px-16' onSubmit={onSubmit}>
          <input
            type='text'
            name='name'
            id='name'
            value={name}
            placeholder='Name'
            onChange={onChange}
            required
            className='w-full my-2 p-2 rounded-lg ring outline-none ring-gray-200 dark:ring-gray-600 text-background bg-gray-200 dark:text-surface dark:bg-gray-600
            hover:ring-secondary/40 dark:hover:ring-primary/40 focus:ring-secondary dark:focus:ring-primary'
          />
          {/* <input type="email" name='email' id='email' value={email} placeholder='Email Address'/> */}
          <input
            type='text'
            name='subject'
            id='subject'
            value={subject}
            placeholder='Subject'
            onChange={onChange}
            required
            className='w-full my-2 p-2 rounded-lg ring outline-none ring-gray-200 dark:ring-gray-600 text-background bg-gray-200 dark:text-surface dark:bg-gray-600
            hover:ring-secondary/40 dark:hover:ring-primary/40 focus:ring-secondary dark:focus:ring-primary'
          />
          <textarea
            name='message'
            rows='6'
            id='message'
            value={message}
            placeholder='Message'
            onChange={onChange}
            required
            className='w-full block my-2 p-2 rounded-lg ring outline-none ring-gray-200 dark:ring-gray-600 text-background bg-gray-200 dark:text-surface dark:bg-gray-600
             hover:ring-secondary/40 dark:hover:ring-primary/40 focus:ring-secondary dark:focus:ring-primary'
          />
          <div className='relative w-full flex justify-end'>
            <a
              href={`mailto:r07229011@ntu.edu.tw?subject=${subject}&body=${message}`}
              className='relative flex items-center top-0 left-0 text-secondary dark:text-primary text-md px-5 py-2 mt-2 
              rounded-lg border-secondary dark:border-primary border-2 hover:text-surface dark:hover:text-background
             hover:bg-secondary dark:hover:bg-primary transition-all ease-in-out duration-800 hover:top-0.5 hover:left-0.5'
            >
              <FaRegEnvelope className='mr-2' /> Send Email
            </a>
          </div>
        </form>

        <div className='w-full mb-8 px-8 md:px-16'>
          <hr className=' border-gray-600/60 dark:border-gray-200/60' />
          <div className='relative grid grid-cols-2 gap-6 mt-8'>
            <a
              href='https://linkedin.com/in/asgoshawk'
              target='_blank'
              rel='noreferrer noopener'
              className='relative top-0 left-0 py-4 flex flex-nowrap items-center justify-center rounded-lg transition-color ease-in-out duration-200
               text-background bg-gray-200 dark:text-surface dark:bg-gray-400 shadow-md hover:top-0.5 hover:left-0.5 hover:shadow-lg'
            >
              <FaLinkedin className='text-xl md:text-3xl' />
              <div className='ml-2 text-sm sm:text-base'>LinkedIn</div>
            </a>
            <a
              href='https://cakeresume.com/me/asgoshawk'
              target='_blank'
              rel='noreferrer noopener'
              className='relative top-0 left-0 py-4 flex flex-nowrap items-center justify-center rounded-lg transition-color ease-in-out duration-200
               text-background bg-gray-200 dark:text-surface dark:bg-gray-400 shadow-md hover:top-0.5 hover:left-0.5 hover:shadow-lg'
            >
              <FaCopyright className='text-xl md:text-3xl' />
              <div className='ml-2 text-sm sm:text-base'>CakeResume</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
