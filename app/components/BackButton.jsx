'use client'
import { useRouter } from 'next/navigation'

export default function BackButton({ text = 'Back'}) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="font-suse text-text-darkBody font-bold text-body leading-normal flex gap-1 justify-center py-4" 
    >
      <img src='/images/icons/arrow-left-dark.png' className='w-6' />
      {text}
    </button>
  );
}