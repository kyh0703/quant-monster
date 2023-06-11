import AuthTemplate from '@/app/auth/components/auth-template/auth-template.component';
import SignUpForm from '@/app/auth/components/sign-up-form/sign-up-form.component';

const SignUpPage = () => {
  return (
    <AuthTemplate>
      <SignUpForm />
    </AuthTemplate>
  );
};

export default SignUpPage;
