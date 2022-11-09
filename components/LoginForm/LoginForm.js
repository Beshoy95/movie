import { useFormik } from 'formik';
import * as Yup from 'yup';
import { UserIcon } from '@heroicons/react/outline';

function LoginForm() {
  const validationSchema = Yup.object({
    email: Yup.string().required('email required').email('valid Email'),
    password: Yup.string().required('password required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      const userData = {
        email: values.email,
        password: values.password,
      };
      console.log('user Data', userData);
    },
    validationSchema,
  });

  return (
    <div className='bg-ligh px-3  md:py-0'>
      <div className='w-4/5 md:w-2/5  max-w-5xl  mx-auto'>
        <div className='flex justify-center items-center'>
          <div className='bg-white w-full rounded-2xl shadow-lg p-10 text-gray-600'>
            <form
              className='flex flex-col space-y-4'
              onSubmit={formik.handleSubmit}
            >
              <div className='flex'>
                <h1 className='text-center text-2xl md:text-3xl capitalize text-third'>
                  login
                </h1>
              </div>
              <hr className='border-third border-dashed' />
              <div>
                <input
                  type='email'
                  placeholder='email'
                  className='ring-1 ring-gray-300 w-full mt-2 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-slate'
                  {...formik.getFieldProps('email')}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className='text-xs text-red-500 mx-2 mt-1'>
                    {formik.errors.email}
                  </div>
                ) : null}
              </div>
              <div>
                <input
                  type='password'
                  name='password'
                  placeholder='password'
                  className='ring-1 ring-gray-300 w-full mt-2 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-slate'
                  {...formik.getFieldProps('password')}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className='text-xs text-red-500 mx-2 mt-1'>
                    {formik.errors.password}
                  </div>
                ) : null}
              </div>

              <button
                type='submit'
                className='bg-primary hover:bg-primary py-3 px-6 rounded-3xl text-xl md:text-xl outline-none  text-white text-center font-bold  uppercase'
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
