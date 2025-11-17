'use client';

import React, { useState } from 'react';
import { Calendar, MapPin, Users, Clock, Target, Briefcase, Gift, CheckSquare, Save } from 'lucide-react';

interface EventCreationProps {
  onSuccess: () => void;
}

interface WorkSchedule {
  date: string;
  startTime: string;
  endTime: string;
}

const EventCreation: React.FC<EventCreationProps> = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    objectives: '',
    benefits: '',
    maxVolunteers: '',
    location: '',
    address: '',
    city: '',
    state: ''
  });

  const [roles, setRoles] = useState<string[]>(['']);
  const [responsibilities, setResponsibilities] = useState<string[]>(['']);
  const [schedules, setSchedules] = useState<WorkSchedule[]>([{ date: '', startTime: '', endTime: '' }]);

  const categories = [
    'Meio Ambiente',
    'Educação',
    'Saúde',
    'Cultura',
    'Esportes',
    'Social',
    'Animais',
    'Tecnologia'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const addRole = () => {
    setRoles([...roles, '']);
  };

  const updateRole = (index: number, value: string) => {
    const newRoles = [...roles];
    newRoles[index] = value;
    setRoles(newRoles);
  };

  const removeRole = (index: number) => {
    setRoles(roles.filter((_, i) => i !== index));
  };

  const addResponsibility = () => {
    setResponsibilities([...responsibilities, '']);
  };

  const updateResponsibility = (index: number, value: string) => {
    const newResponsibilities = [...responsibilities];
    newResponsibilities[index] = value;
    setResponsibilities(newResponsibilities);
  };

  const removeResponsibility = (index: number) => {
    setResponsibilities(responsibilities.filter((_, i) => i !== index));
  };

  const addSchedule = () => {
    setSchedules([...schedules, { date: '', startTime: '', endTime: '' }]);
  };

  const updateSchedule = (index: number, field: keyof WorkSchedule, value: string) => {
    const newSchedules = [...schedules];
    newSchedules[index][field] = value;
    setSchedules(newSchedules);
  };

  const removeSchedule = (index: number) => {
    setSchedules(schedules.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Event data:', { formData, roles, responsibilities, schedules });
    alert('Evento criado com sucesso!');
    onSuccess();
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Cadastrar Novo Evento</h2>
        <p className="text-gray-600">Preencha as informações do evento de voluntariado</p>
      </div>

      <form onSubmit={handleSubmit} className="p-6 space-y-8">
        {/* Basic Information */}
        <section>
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <Target className="h-5 w-5 mr-2 text-green-500" />
            Informações Básicas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Título do Evento *</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Ex: Mutirão de Limpeza do Parque"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Categoria *</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="">Selecione uma categoria</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Users className="inline h-4 w-4 mr-1" />
                Número Máximo de Voluntários *
              </label>
              <input
                type="number"
                name="maxVolunteers"
                value={formData.maxVolunteers}
                onChange={handleInputChange}
                required
                min="1"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Ex: 50"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Descrição do Evento *</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Descreva o evento, suas atividades e importância..."
              />
            </div>
          </div>
        </section>

        {/* Objectives */}
        <section>
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <Target className="h-5 w-5 mr-2 text-green-500" />
            Objetivos do Evento
          </h3>
          <textarea
            name="objectives"
            value={formData.objectives}
            onChange={handleInputChange}
            required
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="Liste os principais objetivos que o evento busca alcançar..."
          />
        </section>

        {/* Benefits */}
        <section>
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <Gift className="h-5 w-5 mr-2 text-green-500" />
            Benefícios para os Voluntários
          </h3>
          <textarea
            name="benefits"
            value={formData.benefits}
            onChange={handleInputChange}
            required
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="Certificado, experiência, networking, alimentação, transporte, etc..."
          />
        </section>

        {/* Roles/Functions */}
        <section>
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <Briefcase className="h-5 w-5 mr-2 text-green-500" />
            Funções Disponíveis
          </h3>
          <div className="space-y-3">
            {roles.map((role, index) => (
              <div key={index} className="flex items-center space-x-2">
                <input
                  type="text"
                  value={role}
                  onChange={(e) => updateRole(index, e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Ex: Coordenador de equipe, Recepcionista, etc."
                />
                {roles.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeRole(index)}
                    className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    Remover
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={addRole}
              className="text-green-600 hover:text-green-700 font-medium text-sm"
            >
              + Adicionar Função
            </button>
          </div>
        </section>

        {/* Responsibilities */}
        <section>
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <CheckSquare className="h-5 w-5 mr-2 text-green-500" />
            Atribuições e Responsabilidades
          </h3>
          <div className="space-y-3">
            {responsibilities.map((resp, index) => (
              <div key={index} className="flex items-center space-x-2">
                <input
                  type="text"
                  value={resp}
                  onChange={(e) => updateResponsibility(index, e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Ex: Auxiliar na organização do material"
                />
                {responsibilities.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeResponsibility(index)}
                    className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    Remover
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={addResponsibility}
              className="text-green-600 hover:text-green-700 font-medium text-sm"
            >
              + Adicionar Atribuição
            </button>
          </div>
        </section>

        {/* Work Schedules */}
        <section>
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <Clock className="h-5 w-5 mr-2 text-green-500" />
            Horários de Trabalho
          </h3>
          <div className="space-y-4">
            {schedules.map((schedule, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-3 p-4 border border-gray-200 rounded-lg">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Data</label>
                  <input
                    type="date"
                    value={schedule.date}
                    onChange={(e) => updateSchedule(index, 'date', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Início</label>
                  <input
                    type="time"
                    value={schedule.startTime}
                    onChange={(e) => updateSchedule(index, 'startTime', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Término</label>
                  <input
                    type="time"
                    value={schedule.endTime}
                    onChange={(e) => updateSchedule(index, 'endTime', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                  />
                </div>
                <div className="flex items-end">
                  {schedules.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeSchedule(index)}
                      className="w-full px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors text-sm"
                    >
                      Remover
                    </button>
                  )}
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={addSchedule}
              className="text-green-600 hover:text-green-700 font-medium text-sm"
            >
              + Adicionar Horário
            </button>
          </div>
        </section>

        {/* Location */}
        <section>
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <MapPin className="h-5 w-5 mr-2 text-green-500" />
            Local do Evento
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Nome do Local *</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Ex: Parque Ibirapuera"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Endereço Completo *</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Rua, número, bairro"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Cidade *</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Ex: São Paulo"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Estado *</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                required
                maxLength={2}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Ex: SP"
              />
            </div>
          </div>
        </section>

        {/* Submit Button */}
        <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
          <button
            type="button"
            className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="px-8 py-2 bg-primary text-white rounded-lg hover:shadow-lg transition-all duration-200 flex items-center font-medium"
          >
            <Save className="h-4 w-4 mr-2" />
            Criar Evento
          </button>
        </div>
      </form>
    </div>
  );
};

export default EventCreation;
