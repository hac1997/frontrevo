'use client';

import { TypeSelector } from '@/components/ui/TypeSelector';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { NavigationButtons } from '@/components/ui/NavigationButtons';
import { Step1Credentials } from './steps/Step1Credentials';
import { Step2PersonalInfo } from './steps/Step2PersonalInfo';
import { Step3Preferences } from './steps/Step3Preferences';
import { Step4Terms } from './steps/Step4Terms';
import { OrganizationForm } from './steps/OrganizationForm';
import { RegisterType } from '@/lib/types';
import { useRegisterForm } from '../useRegisterForm';

const STEPS = ['Acesso', 'Pessoal', 'Causas', 'Termos'];

export function RegisterFormClient() {
  const {
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
  } = useRegisterForm();

  const maxStep = registerType === 'volunteer' ? 4 : 1;
  const onNextHandler = (currentStep === maxStep) ? handleSubmit : handleNext;

  const renderStep = () => {
    if (registerType === 'organization') {
      return (
        <OrganizationForm
          formData={formData} 
          isStepValid={isStepValid}
          onInputChange={handleInputChange}
          onTagToggle={handleTagToggle}
        />
      );
    }

    switch (currentStep) {
      case 1:
        return (
          <Step1Credentials
            formData={formData}
            isStepValid={isStepValid}
            onInputChange={handleInputChange}
          />
        );
      case 2:
        return (
          <Step2PersonalInfo
            formData={formData}
            isStepValid={isStepValid}
            onInputChange={handleInputChange}
          />
        );
      case 3:
        return (
          <Step3Preferences
            formData={formData}
            isStepValid={isStepValid}
            onTagToggle={handleTagToggle}
          />
        );
      case 4:
        return (
          <Step4Terms
            formData={formData}
            isStepValid={isStepValid}
            onInputChange={handleInputChange}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="max-w-2xl w-full bg-white p-8 rounded-xl shadow-2xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Cadastro - REVO
        </h2>

        <TypeSelector
          registerType={registerType}
          onTypeChange={(type) => handleTypeChange(type as RegisterType)}
        />

        {registerType === 'volunteer' && (
          <ProgressBar currentStep={currentStep} steps={STEPS} />
        )}

        <form className="mt-8" onSubmit={(e) => e.preventDefault()}>
          {renderStep()}

          <NavigationButtons
            currentStep={currentStep}
            maxStep={maxStep}
            canProceed={
              isStepValid &&
              (
                (registerType === 'volunteer' && currentStep < 4) ||
                formData.termsAccepted
              )
            }
            termsAccepted={formData.termsAccepted}
            onBack={handleBack}
            onNext={onNextHandler}
            isLoading={isLoading}
          />
        </form>
      </div>
    </div>
  );
}