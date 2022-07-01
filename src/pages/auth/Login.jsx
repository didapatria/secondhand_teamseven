import FormLogin from "../../components/auth/FormLogin";

export default function LoginPage() {
  return (
    <div>
      <div className="absolute w-full md:flex">
        <div
          className="md:w-1/2"
          style={{
            background: "url(./assets/images/bg_auth.png) no-repeat",
            backgroundSize: "cover",
          }}
        />
        <div className="flex-1">
          <div className="flex h-screen items-center justify-center">
            <FormLogin />
          </div>
        </div>
      </div>
      <div className="relative hidden h-screen bg-gradient-to-b from-purple-400/0 to-purple-400 md:block md:w-1/2">
        <div className="flex h-screen items-center justify-center">
          <div className="w-10/12 text-4xl font-bold text-white">
            <div className="w-0" title="secondhand">
              Second Hand.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
