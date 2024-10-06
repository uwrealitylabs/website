'use client'
import { useRouter } from 'next/navigation'
import Image from 'next/image';

export default function BackButton({ text = 'Back'}) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="font-suse text-text-darkBody font-bold text-body leading-normal flex gap-1 justify-center py-4" 
    >
      <Image 
      src="/images/icons/arrow-left-dark.png" 
      width={24}
      height={24}
      className='w-6' alt=""/>
      {text}
    </button>
  );
}