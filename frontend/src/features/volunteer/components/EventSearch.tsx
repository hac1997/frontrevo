'use client';

import React, { useState } from 'react';
import { Search, MapPin, Calendar, Users, Filter, Heart, Clock } from 'lucide-react';
import { MOCK_SEARCH_EVENTS, EVENT_CATEGORIES, SEARCH_LOCATIONS } from '@/lib/services/getDataseService';
import type { SearchEvent } from '@/lib/types';

const EventSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const categories = EVENT_CATEGORIES;
  const locations = SEARCH_LOCATIONS;
  const events: SearchEvent[] = MOCK_SEARCH_EVENTS;

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.organization.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    const matchesLocation = selectedLocation === 'all' || event.location === selectedLocation;
    return matchesSearch && matchesCategory && matchesLocation;
  });

  return (
    <div className="p-6 bg-stone-100">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Buscar Eventos</h2>
        <p className="text-gray-600">Encontre oportunidades de voluntariado que combinam com você</p>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative bg-white">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Buscar por nome do evento ou organização..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-2">Filtrar por Categoria</label>
          <div className="relative">
            <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
            >
              <option value="all">Todas as Categorias</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-2">Filtrar por Local</label>
          <div className="relative">
            <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
            >
              <option value="all">Todas as Localizações</option>
              {locations.map(location => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>
      </div>

      {/* Event List */}
      <div className="space-y-4">
        {filteredEvents.map(event => (
          <div key={event.id} className="bg-white p-5 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">{event.title}</h3>
                <p className="text-sm text-gray-600 font-medium">{event.organization}</p>
              </div>
              <button className="text-gray-400 hover:text-red-500 transition-colors">
                <Heart className="h-6 w-6" />
              </button>
            </div>

            <p className="text-gray-700 mb-4 line-clamp-2">{event.description}</p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
              <div className="flex items-center text-sm text-gray-600">
                <Clock className="h-4 w-4 mr-2 text-primary" />
                {event.duration} horas
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Calendar className="h-4 w-4 mr-2 text-blue-500" />
                {event.date}
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <MapPin className="h-4 w-4 mr-2 text-green-500" />
                {event.location}
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Users className="h-4 w-4 mr-2 text-primary" />
                {event.volunteers}/{event.maxVolunteers} inscritos
              </div>
              <div className="flex items-center text-sm">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                  {event.category}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="w-full bg-gray-200 rounded-full h-2 mr-4">
                <div
                  className="bg-primary h-2 rounded-full"
                  style={{ width: `${(event.volunteers / event.maxVolunteers) * 100}%` }}
                />
              </div>
              <button className="px-6 py-2 bg-primary text-white rounded-lg hover:shadow-lg transition-all duration-200 whitespace-nowrap font-medium">
                Inscrever-se
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredEvents.length === 0 && (
        <div className="text-center py-12">
          <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <p className="text-xl font-semibold text-gray-600">Nenhum evento encontrado</p>
          <p className="text-gray-500 mt-2">Tente ajustar seus filtros ou termos de busca.</p>
        </div>
      )}
    </div>
  );
};

export default EventSearch;