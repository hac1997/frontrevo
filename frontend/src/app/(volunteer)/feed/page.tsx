'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import VolunteerHome from '@/features/volunteer/components/VolunteerHome';

export default function VolunteerFeedPage() {
  const router = useRouter();

  const handleLogout = () => {
    router.push('/');
  };

  return <VolunteerHome onLogout={handleLogout} />;
}
