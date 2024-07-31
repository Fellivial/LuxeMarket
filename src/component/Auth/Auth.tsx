const Auth = () => {
  return (
    <>
      <div className="flex justify-around items-center mt-6">
        <div className="text-center text-black text-2xl font-bold leading-9 tracking-tight">
          Sign in to your account
        </div>
      </div>
      <form action="#" method="POST" className="space-y-4 mt-5">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="bg-white input block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>
            <div className="text-sm">
              <a
                href="#"
                className="font-semibold text-black hover:text-indigo-500"
              >
                Forgot password?
              </a>
            </div>
          </div>
          <div className="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              className="bg-white input block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <p className="mt-10 text-center text-sm text-gray-500">
          Don't have account?{" "}
          <a
            href="#"
            className="font-semibold leading-6 text-zinc-950 hover:text-indigo-500"
          >
            Sign up here
          </a>
        </p>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-zinc-950 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign in
          </button>
        </div>
      </form>
      <div className="flex justify-center items-center mt-7">
        <div className="w-[424px] inline-flex justify-start items-center gap-6">
          <div className="grow shrink basis-0 h-[0px] border border-slate-100"></div>
          <div className="text-center text-slate-500 text-xs font-normal font-['Poppins'] leading-tight">
            or do it via other accounts
          </div>
          <div className="grow shrink basis-0 h-[0px] border border-slate-100"></div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-7">
        <div className="w-[223px] justify-center items-center gap-10 inline-flex">
          <div className="flex justify-start items-start gap-8">
            <div className="w-14 h-14">
              <div className="w-14 h-14 bg-white rounded-full shadow flex justify-center items-center">
                <div className="w-6 h-6 top-4">
                  <img src="" alt="" />
                </div>
              </div>
            </div>
            <div className="w-14 h-14">
              <div className="w-14 h-14 bg-white rounded-full shadow flex justify-center items-center">
                <div className="w-16 h-6 -mt-8">
                  <img src="" />
                </div>
              </div>
            </div>
            <div className="w-14 h-14">
              <div className="w-14 h-14 bg-white rounded-full shadow flex justify-center items-center">
                <div className="w-16 h-6 -mt-8">
                  <img src="" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
