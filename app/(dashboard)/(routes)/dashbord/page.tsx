import { UserButton } from "@clerk/nextjs";

const page = () => {
  return (
    <div>
      <h1>`hey this is testing dashboard (protacted)`</h1>
      <UserButton />
    </div>
  );
};

export default page;
