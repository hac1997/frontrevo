'use client';

import React, { useState, useEffect } from 'react';
import {
  Search, Calendar, Award, TrendingUp, Settings, Clock, Heart
} from 'lucide-react';
import EventFeed from './EventFeed';
import ProfileSettings from './ProfileSettings';
import Statistics from './Statistics';
import Certificates from './Certificates';
import PastEvents from './PastEvents';
import EventSearch from './EventSearch';
import { Sidebar } from '@/components/layout/Sidebar';
import { StatCard } from '@/components/charts/StatCard';
import { useAuth } from '@/lib/hooks/useAuth';
import { VolunteerData } from '@/lib/types';
import {  getVolunteerStats } from '@/lib/services/user.service';

type ViewType = 'feed' | 'search' | 'profile' | 'statistics' | 'certificates' | 'past-events';

const VolunteerHome: React.FC = () => {
  const { user, logout, loading: authLoading } = useAuth();
  const [currentView, setCurrentView] = useState<ViewType>('feed');
  const [volunteerData, setVolunteerData] = useState<VolunteerData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user && !authLoading) {
      loadVolunteerData();
    }
  }, [user, authLoading]);

  const loadVolunteerData = async () => {
    if (!user) return;

    try {
      setLoading(true);
      const data = await getVolunteerStats(user.id);
      setVolunteerData(data);
    } catch (error) {
      console.error('Erro ao carregar dados do voluntário:', error);
    } finally {
      setLoading(false);
    }
  };

  const menuItems = [
    { id: 'feed' as ViewType, label: 'Início', icon: Heart },
    { id: 'search' as ViewType, label: 'Buscar Eventos', icon: Search },
    { id: 'past-events' as ViewType, label: 'Eventos Passados', icon: Clock },
    { id: 'statistics' as ViewType, label: 'Estatísticas', icon: TrendingUp },
    { id: 'certificates' as ViewType, label: 'Certificados', icon: Award },
    { id: 'profile' as ViewType, label: 'Meus Dados', icon: Settings },
  ];

  const renderContent = () => {
    if (!volunteerData) {
      return (
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-gray-600">Carregando dados...</p>
          </div>
        </div>
      );
    }

    switch (currentView) {
      case 'feed':
        return <EventFeed />;
      case 'search':
        return <EventSearch />;
      case 'profile':
        return <ProfileSettings volunteerData={volunteerData} />;
      case 'statistics':
        return <Statistics volunteerData={volunteerData} />;
      case 'certificates':
        return <Certificates />;
      case 'past-events':
        return <PastEvents />;
      default:
        return <EventFeed />;
    }
  };

  if (authLoading || loading) {
    return (
      <div className="min-h-screen bg-orange-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Carregando...</p>
        </div>
      </div>
    );
  }

  if (!volunteerData) {
    return (
      <div className="min-h-screen bg-orange-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 text-lg mb-4">Erro ao carregar dados</p>
          <button
            onClick={loadVolunteerData}
            className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-hover"
          >
            Tentar novamente
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-orange-50">
      <div className="flex">
        <Sidebar
          userName={volunteerData.name}
          userRole="Voluntário"
          userInitial={volunteerData.name.charAt(0)}
          badgeLabel="Pontos"
          badgeValue={volunteerData.points}
          menuItems={menuItems}
          currentView={currentView}
          onViewChange={(view) => setCurrentView(view as ViewType)}
          onLogout={logout}
          gradientFrom="from-blue-500"
          gradientTo="to-green-500"
        />

        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="max-w-6xl mx-auto">
            {/* Quick Stats Bar */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <StatCard
                icon={Calendar}
                value={volunteerData.totalEvents}
                label="Eventos Participados"
                colorFrom="from-blue-50"
                colorTo="to-blue-100"
                iconColor="text-blue-500"
              />
              <StatCard
                icon={Clock}
                value={`${volunteerData.hoursVolunteered}h`}
                label="Horas Voluntariadas"
                colorFrom="from-green-50"
                colorTo="to-green-100"
                iconColor="text-secondary"
              />
              <StatCard
                icon={TrendingUp}
                value="#12"
                label="Ranking"
                colorFrom="from-yellow-50"
                colorTo="to-yellow-100"
                iconColor="text-yellow-500"
              />
            </div>

            {/* Dynamic Content Area */}
            <div className="bg-stone-100 rounded-xl shadow-sm border border-gray-100">
              {renderContent()}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default VolunteerHome;