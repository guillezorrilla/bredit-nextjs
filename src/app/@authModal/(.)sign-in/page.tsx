import CloseModal from '@/components/CloseModa';
import SignIn from '@/components/SignIn';
import { FC } from 'react';

const page: FC = () => {
  return (
    <div className="fixed inset-0 z-10 bg-zinc-900/20">
      <div className="container flex items-center h-full max-w-lg mx-auto">
        <div className="relative bg-white w-full h-fit py-20 rounded-lg">
          <div className="absolute top-4 right-4">
            <CloseModal />
          </div>
          <SignIn />
        </div>
      </div>
    </div>
  );
};

export default page;
