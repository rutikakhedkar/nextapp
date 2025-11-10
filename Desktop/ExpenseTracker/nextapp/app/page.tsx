import Image from "next/image";

export default function Home() {
  return (
   <div className="flex flex-col items-center justify-items-center min-h-screen">
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Contact Manager</h1>
      <p className="text-lg text-gray-600 mb-8">
        Manage your contacts efficiently and effortlessly.
      </p>
      <Image
        src="/contactimg.jpg"
        alt="Contact_Manager_Illustration"
        width={600}
        height={400}
        className="mx-auto"
      />
      </div>
    </div>
  );
}
