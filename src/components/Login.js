import Header from './Header'
const Login = () => {
  return (
    <div class='w-screen flex items-center justify-center h-screen '>
      <Header />

      <img
        className='max-w-screen-xlg'
        src='https://assets.nflxext.com/ffe/siteui/vlv3/e3e9c31f-aa15-4a8f-8059-04f01e6b8629/web/IN-en-20250113-TRIFECTA-perspective_febfa442-23d9-45f3-937e-72f8b971f7a9_small.jpg'
        alt=''
      />
      <div className='absolute top-20 bg-black   flex flex-col p-15   w-auto  '>
        <div className='text-white font-bold py-8  px-0  top-0 '>Sign In </div>
        <form action='' className='flex flex-col gap-2  '>
          <input
            type='text'
            placeholder='Email or mobile number   '
            className='bg-slate-300 mx-8 px-8 h-8 rounded-sm border-black'
          />

          <input
            type='text'
            placeholder='password '
            className='bg-slate-300 mx-8 px-8 h-8 rounded-sm'
          />
        </form>

        <button className='text-white bg-red-500  mx-8 my-4 rounded-sm px-8'>
          {' '}
          Sign in
        </button>

        <p className='text-gray-500 px-6'>OR</p>
        <button className=' text-white mx-8 bg-slate-400 mt-4 rounded-sm '>
          {' '}
          use a Sign-in code
        </button>
        <span className='text-white p-2 my-4 mx-8 '>Fogotten password?</span>
        <div className='pb-10'>
          <input
            type='checkbox'
            id='demoCheckbox'
            className='bg-white'
            value='1'
          />
          <span className='text-white'>Remember me</span>
        </div>
      </div>
    </div>
  )  
}
export default Login
