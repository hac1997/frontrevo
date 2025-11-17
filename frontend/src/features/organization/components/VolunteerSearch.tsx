'use client';

import React, { useState } from 'react';
import { Search, MapPin, Award, TrendingUp, ArrowLeft, UserPlus, Filter, Star } from 'lucide-react';
import { MOCK_SEARCH_VOLUNTEERS } from '@/lib/services/getDataseService';
import type { SearchVolunteer, VolunteerSearchProps } from '@/lib/types';



const VolunteerSearch: React.FC<VolunteerSearchProps> = ({ event, onBack }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterLocation, setFilterLocation] = useState('all');

  const [volunteers] = useState<SearchVolunteer[]>(MOCK_SEARCH_VOLUNTEERS);

  const filteredVolunteers = volunteers.filter(volunteer => {
    const matchesSearch = volunteer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         volunteer.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || volunteer.categories.includes(filterCategory);
    const matchesLocation = filterLocation === 'all' || volunteer.location.includes(filterLocation);
    return matchesSearch && matchesCategory && matchesLocation;
  });

  const handleInvite = (volunteerId: number) => {
    alert(`Convite enviado para o voluntário #${volunteerId}!`);
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map(star => (
          <Star
            key={star}
            className={`h-4 w-4 ${star <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
          />
        ))}
      </div>
    );
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'available':
        return <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">Disponível</span>;
      case 'invited':
        return <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">Convidado</span>;
      case 'confirmed':
        return <span className="px-3 py-1 bg-secondary text-gray-800 rounded-full text-xs font-medium">Confirmado</span>;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="p-6 border-b border-gray-200">
        <button
          onClick={onBack}
          className="flex items-center text-gray-600 hover:text-gray-800 mb-4"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Voltar para Eventos Abertos
        </button>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Buscar Voluntários</h2>
        <p className="text-gray-600">Evento: <span className="font-semibold">{event.title}</span></p>
      </div>

      <div className="p-6">
        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Buscar por nome ou email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Filter className="inline h-4 w-4 mr-1" />
              Categoria
            </label>
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="all">Todas as categorias</option>
              <option value="Meio Ambiente">Meio Ambiente</option>
              <option value="Educação">Educação</option>
              <option value="Saúde">Saúde</option>
              <option value="Cultura">Cultura</option>
              <option value="Social">Social</option>
              <option value="Esportes">Esportes</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <MapPin className="inline h-4 w-4 mr-1" />
              Localização
            </label>
            <select
              value={filterLocation}
              onChange={(e) => setFilterLocation(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="all">Todas as localizações</option>
              <option value="São Paulo">São Paulo</option>
              <option value="Rio de Janeiro">Rio de Janeiro</option>
              <option value="Belo Horizonte">Belo Horizonte</option>
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-4">
          <p className="text-sm text-gray-600">
            {filteredVolunteers.length} {filteredVolunteers.length === 1 ? 'voluntário encontrado' : 'voluntários encontrados'}
          </p>
        </div>

        {/* Volunteers List */}
        <div className="space-y-4">
          {filteredVolunteers.map(volunteer => (
            <div key={volunteer.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {volunteer.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{volunteer.name}</h3>
                      <p className="text-sm text-gray-600">{volunteer.email}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 mb-4">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Localização</p>
                      <p className="text-sm font-medium text-gray-800 flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        {volunteer.location}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Eventos</p>
                      <p className="text-sm font-medium text-gray-800">{volunteer.totalEvents} completados</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Horas</p>
                      <p className="text-sm font-medium text-gray-800">{volunteer.hoursVolunteered}h</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Avaliação</p>
                      {renderStars(volunteer.rating)}
                    </div>
                  </div>

                  <div className="mb-3">
                    <p className="text-xs text-gray-500 mb-2">Áreas de interesse:</p>
                    <div className="flex flex-wrap gap-2">
                      {volunteer.categories.map(cat => (
                        <span key={cat} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Disponibilidade:</span> {volunteer.availability}
                  </p>
                </div>

                <div className="ml-4 flex flex-col items-end space-y-3">
                  {getStatusBadge(volunteer.status)}
                  {volunteer.status === 'available' && (
                    <button
                      onClick={() => handleInvite(volunteer.id)}
                      className="px-4 py-2 bg-primary text-white rounded-lg hover:shadow-lg transition-all duration-200 flex items-center font-medium"
                    >
                      <UserPlus className="h-4 w-4 mr-2" />
                      Convidar
                    </button>
                  )}
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                    Ver Perfil
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredVolunteers.length === 0 && (
          <div className="text-center py-12">
            <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-600">Nenhum voluntário encontrado com os filtros selecionados</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VolunteerSearch;
