'use client';

import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { RegisterFormData, RegisterType } from '@/lib/types';
import { validateStep } from '@/lib/validation/validation';
import { registerUser } from '@/actions/registerUser';

const initialData: RegisterFormData = {
  name: '',
  email: '',
  password: '',
  city: '',
  state: '',
  age: '',
  gender: '',
  preferences: [],
  termsAccepted: false,
  cnpj: '',
};

export const useRegisterForm = () => {
  const [registerType, setRegisterType] = useState<RegisterType>('volunteer');
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<RegisterFormData>(initialData);
  const [isStepValid, setIsStepValid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    const newValue = type === 'checkbox' ? checked : value;
    
    setFormData(prev => ({ ...prev, [name]: newValue }));
    setIsStepValid(true);
  }, []);

  const handleTagToggle = useCallback((tagId: string) => {
    setFormData(prev => ({
      ...prev,
      preferences: prev.preferences.includes(tagId)
        ? prev.preferences.filter(id => id !== tagId)
        : [...prev.preferences, tagId],
    }));
    setIsStepValid(true);
  }, []);

  const handleTypeChange = useCallback((type: RegisterType) => {
    setRegisterType(type);
    setCurrentStep(1);
    setIsStepValid(true);
    setFormData(initialData); 
  }, []);

  const handleNext = useCallback(() => {
    if (validateStep(currentStep, formData)) {
      setCurrentStep(prev => Math.min(prev + 1, 4));
      setIsStepValid(true);
    } else {
      setIsStepValid(false);
    }
  }, [currentStep, formData]);

  const handleBack = useCallback(() => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
    setIsStepValid(true);
  }, []);

  const handleSubmit = useCallback(async () => {
    console.log('CLIENT: handleSubmit INICIADO');

    if (!formData.termsAccepted) {
      console.warn('CLIENT: Submit bloqueado - Termos não aceitos.');
      setIsStepValid(false);
      return;
    }

    setIsLoading(true);
    const formDataToSend = new FormData();

    formDataToSend.append('email', formData.email);
    formDataToSend.append('password', formData.password);
    formDataToSend.append('confirmPassword', formData.password);
    formDataToSend.append('city', formData.city);
    formDataToSend.append('state', formData.state);
    formDataToSend.append('acceptTerms', formData.termsAccepted.toString());
    formDataToSend.append('registerType', registerType);

    if (registerType === 'volunteer') {
      formDataToSend.append('fullName', formData.name); 
      formDataToSend.append('interests', JSON.stringify(formData.preferences));
    } else {
      formDataToSend.append('orgName', formData.name); 
      formDataToSend.append('orgCnpj', formData.cnpj);
      formDataToSend.append('orgCauses', JSON.stringify(formData.preferences));
    }

    console.log('CLIENT: Dados a enviar (raw object):', Object.fromEntries(formDataToSend.entries()));

    try {
      const result = await registerUser({}, formDataToSend);
      console.log('CLIENT: Resposta do servidor recebida:', result);

      if (!result.success) {
        console.error('CLIENT ERROR: Servidor retornou success: false.', result.message, result.errors);
        throw new Error(result.message || 'Erro no cadastro (payload)');
      }

      const destination = registerType === 'volunteer' ? '/feed' : '/dashboard';
      console.log(`CLIENT: SUCESSO! Redirecionando para: ${destination}`);
      router.push(destination);

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Erro ao cadastrar';
      console.error('CLIENT ERROR: A chamada "registerUser" FALHOU (bloco catch):', errorMessage);
      alert(errorMessage);
      setIsStepValid(false);
    } finally {
      setIsLoading(false);
    }
  }, [formData, registerType, router]); 

  return {
    formData,
    registerType,
    currentStep,
    isStepValid,
    isLoading,
    handleInputChange,
    handleTagToggle,
    handleTypeChange, 
    handleNext,
    handleBack,
    handleSubmit,
  };
};