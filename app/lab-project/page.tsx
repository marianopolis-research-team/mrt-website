'use client';

import { useEffect } from 'react';
import { getCurrentLabProject } from '@/app/_data/labProjectData';
import { useRouter } from 'next/navigation';

export default function CurrentLabProjectPage() {
  const router = useRouter();
  const currentProject = getCurrentLabProject();

  useEffect(() => {
    if (currentProject) {
      router.replace(`/lab-project/${currentProject.slug}/`);
    } else {
      router.replace('/archives/');
    }
  }, [currentProject, router]);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
        <p className="text-gray-600">Loading current lab project...</p>
      </div>
    </div>
  );
}
