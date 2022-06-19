import RegistAuth from "../../components/auth/RegistAuth";

export default function RegisterPage() {
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
          <div className="flex justify-center items-center h-screen">
            <RegistAuth />
          </div>
        </div>
      </div>
      <div className="relative hidden md:block md:w-1/2 h-screen bg-gradient-to-b from-purple-400/0 to-purple-400">
        <div className="flex justify-center items-center h-screen">
          <div className="w-10/12 font-bold text-4xl text-white">
            <div className="w-0" title="secondhand">
              Second Hand.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
