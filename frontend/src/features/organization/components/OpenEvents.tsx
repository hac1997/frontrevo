'use client';

import React, { useState } from 'react';
import { Calendar, MapPin, Users, Edit, XCircle, Search as SearchIcon, Award, UserCheck } from 'lucide-react';
import VolunteerSearch from './VolunteerSearch';
import EventScoring from './EventScoring';
import { MOCK_OPEN_EVENTS } from '@/lib/services/getDataseService';
import type { OpenEvent } from '@/lib/types';

const OpenEvents: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEvent, setSelectedEvent] = useState<OpenEvent | null>(null);
  const [showVolunteerSearch, setShowVolunteerSearch] = useState(false);
  const [showEventScoring, setShowEventScoring] = useState(false);
  const [showEventEdit, setShowEventEdit] = useState(false);

  const [events] = useState<OpenEvent[]>(MOCK_OPEN_EVENTS);

  const filteredEvents = events.filter(event =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCloseEvent = (event: OpenEvent) => {
    setSelectedEvent(event);
    setShowEventScoring(true);
  };

  const handleSearchVolunteers = (event: OpenEvent) => {
    setSelectedEvent(event);
    setShowVolunteerSearch(true);
  };

  const handleEditEvent = (event: OpenEvent) => {
    setSelectedEvent(event);
    setShowEventEdit(true);
  };

  if (showVolunteerSearch && selectedEvent) {
    return (
      <VolunteerSearch
        event={selectedEvent}
        onBack={() => {
          setShowVolunteerSearch(false);
          setSelectedEvent(null);
        }}
      />
    );
  }

  if (showEventScoring && selectedEvent) {
    return (
      <EventScoring
        event={selectedEvent}
        onBack={() => {
          setShowEventScoring(false);
          setSelectedEvent(null);
        }}
      />
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Eventos Abertos</h2>
        <p className="text-gray-600">Gerencie seus eventos com inscrições abertas</p>
      </div>

      <div className="p-6">
        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Buscar eventos por título, categoria ou local..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4">
            <Calendar className="h-8 w-8 text-green-600 mb-2" />
            <p className="text-2xl font-bold text-gray-800">{events.length}</p>
            <p className="text-sm text-gray-600">Eventos Ativos</p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4">
            <Users className="h-8 w-8 text-blue-600 mb-2" />
            <p className="text-2xl font-bold text-gray-800">
              {events.reduce((sum, e) => sum + e.volunteers, 0)}
            </p>
            <p className="text-sm text-gray-600">Voluntários Inscritos</p>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-green-100 rounded-lg p-4">
            <UserCheck className="h-8 w-8 text-primary mb-2" />
            <p className="text-2xl font-bold text-gray-800">
              {events.reduce((sum, e) => sum + e.maxVolunteers, 0)}
            </p>
            <p className="text-sm text-gray-600">Vagas Totais</p>
          </div>
        </div>

        {/* Events List */}
        <div className="space-y-4">
          {filteredEvents.map(event => {
            const fillPercentage = (event.volunteers / event.maxVolunteers) * 100;
            return (
              <div key={event.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-xl font-semibold text-gray-800">{event.title}</h3>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                        {event.category}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-green-500" />
                        {event.date}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-blue-500" />
                        {event.location}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2 text-primary" />
                        {event.volunteers}/{event.maxVolunteers} inscritos
                      </div>
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-gray-600">Vagas preenchidas</span>
                    <span className="font-semibold text-gray-800">{fillPercentage.toFixed(0)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all duration-300"
                      style={{ width: `${fillPercentage}%` }}
                    />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => handleSearchVolunteers(event)}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center font-medium"
                  >
                    <SearchIcon className="h-4 w-4 mr-2" />
                    Buscar Voluntários
                  </button>
                  <button
                    onClick={() => handleEditEvent(event)}
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center"
                  >
                    <Edit className="h-4 w-4 mr-2" />
                    Editar
                  </button>
                  <button
                    onClick={() => handleCloseEvent(event)}
                    className="px-4 py-2 bg-primary text-white rounded-lg hover:shadow-lg transition-all duration-200 flex items-center font-medium"
                  >
                    <Award className="h-4 w-4 mr-2" />
                    Encerrar e Pontuar
                  </button>
                  <button className="px-4 py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-50 transition-colors flex items-center">
                    <XCircle className="h-4 w-4 mr-2" />
                    Cancelar Evento
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <Calendar className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-600">Nenhum evento encontrado</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OpenEvents;
