'use client';

import React, { useState } from 'react';
import { Calendar, MapPin, Users, Award, Search, Eye, Download, TrendingUp } from 'lucide-react';
import { MOCK_CLOSED_EVENTS, EVENT_CATEGORIES } from '@/lib/services/getDataseService';
import type { ClosedEvent } from '@/lib/types';

const ClosedEvents: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  const [events] = useState<ClosedEvent[]>(MOCK_CLOSED_EVENTS);
  const categories = EVENT_CATEGORIES;

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || event.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const totalParticipants = events.reduce((sum, e) => sum + e.attended, 0);
  const totalHours = events.reduce((sum, e) => sum + e.hoursGenerated, 0);
  const totalCertificates = events.reduce((sum, e) => sum + e.certificatesIssued, 0);
  const avgScore = events.length > 0 ? (events.reduce((sum, e) => sum + e.averageScore, 0) / events.length).toFixed(1) : 0;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Eventos Encerrados</h2>
        <p className="text-gray-600">Histórico completo de eventos realizados pela organização</p>
      </div>

      <div className="p-6">
        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4">
            <Calendar className="h-8 w-8 text-blue-600 mb-2" />
            <p className="text-2xl font-bold text-gray-800">{events.length}</p>
            <p className="text-sm text-gray-600">Eventos Realizados</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4">
            <Users className="h-8 w-8 text-green-600 mb-2" />
            <p className="text-2xl font-bold text-gray-800">{totalParticipants}</p>
            <p className="text-sm text-gray-600">Participantes Totais</p>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-green-100 rounded-lg p-4">
            <Award className="h-8 w-8 text-primary mb-2" />
            <p className="text-2xl font-bold text-gray-800">{totalCertificates}</p>
            <p className="text-sm text-gray-600">Certificados Emitidos</p>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-4">
            <TrendingUp className="h-8 w-8 text-orange-600 mb-2" />
            <p className="text-2xl font-bold text-gray-800">{totalHours}h</p>
            <p className="text-sm text-gray-600">Horas Geradas</p>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="mb-6 space-y-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Buscar eventos encerrados..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Categoria</label>
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="all">Todas as categorias</option>
              {categories.slice(1).map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-4">
          <p className="text-sm text-gray-600">
            {filteredEvents.length} {filteredEvents.length === 1 ? 'evento encontrado' : 'eventos encontrados'}
          </p>
        </div>

        {/* Events List */}
        <div className="space-y-4">
          {filteredEvents.map(event => {
            const attendanceRate = ((event.attended / event.participants) * 100).toFixed(0);
            return (
              <div key={event.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-xl font-semibold text-gray-800">{event.title}</h3>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                        {event.category}
                      </span>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                        Concluído
                      </span>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-blue-500" />
                        {event.date}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-green-500" />
                        {event.location}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2 text-primary" />
                        {event.attended}/{event.participants} presentes
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Taxa de Presença</p>
                        <p className="text-lg font-bold text-gray-800">{attendanceRate}%</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Horas Geradas</p>
                        <p className="text-lg font-bold text-gray-800">{event.hoursGenerated}h</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Certificados</p>
                        <p className="text-lg font-bold text-gray-800">{event.certificatesIssued}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Pontuação Média</p>
                        <p className="text-lg font-bold text-gray-800">{event.averageScore}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center">
                    <Eye className="h-4 w-4 mr-2" />
                    Ver Detalhes
                  </button>
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center">
                    <Download className="h-4 w-4 mr-2" />
                    Relatório
                  </button>
                  <button className="px-4 py-2 bg-primary text-white rounded-lg hover:shadow-lg transition-all duration-200 flex items-center font-medium">
                    <Award className="h-4 w-4 mr-2" />
                    Ver Certificados
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <Calendar className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-600">Nenhum evento encontrado com os filtros selecionados</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClosedEvents;
