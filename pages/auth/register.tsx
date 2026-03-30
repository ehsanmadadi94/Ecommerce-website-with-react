import RegisterForm from '../../app/forms/auth/registerForm'

export default function SignUp() {


  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-lg p-6 md:p-8">
        <h1 className="text-2xl font-semibold text-slate-800 mb-6 text-center">
          Create Account
        </h1>
        <RegisterForm name="Ehsan Madadi" />
      </div>
    </div>
  );
}
