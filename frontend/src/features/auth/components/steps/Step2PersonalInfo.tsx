import React from 'react';
import { InputField } from '@/components/ui/InputField';
import { SelectField } from '@/components/ui/SelectField';
import { ErrorMessage } from '@/components/ui/ErrorMessage';
import { RegisterStepProps } from '@/lib/types';
import { GENDER_OPTIONS } from '@/lib/services/getDataseService';

export const Step2PersonalInfo: React.FC<RegisterStepProps> = ({
  formData,
  isStepValid,
  onInputChange,
}) => (
  <>
    <h3 className="text-xl font-semibold text-gray-700 mb-4">Passo 2: Sobre Você</h3>
    <div className="space-y-4">
      <InputField
        type="text"
        name="name"
        value={formData.name}
        onChange={onInputChange}
        placeholder="Nome Completo"
        required
      />
      <div className="flex space-x-4">
        <InputField
          type="text"
          name="city"
          value={formData.city}
          onChange={onInputChange}
          placeholder="Cidade"
          required
          className="w-3/4"
        />
        <InputField
          type="text"
          name="state"
          value={formData.state}
          onChange={onInputChange}
          placeholder="UF"
          required
          maxLength={2}
          className="w-1/4 uppercase text-center"
        />
      </div>
      <div className="flex space-x-4">
        <InputField
          type="number"
          name="age"
          value={formData.age}
          onChange={onInputChange}
          placeholder="Idade"
          required
          min="1"
          className="w-1/3"
        />
        <div className="w-2/3">
          <SelectField
            name="gender"
            value={formData.gender}
            onChange={onInputChange}
            options={GENDER_OPTIONS}
            placeholder="Selecione o Sexo"
            required
          />
        </div>
      </div>
      <ErrorMessage
        show={!isStepValid}
        message="Por favor, preencha todos os campos corretamente."
      />
    </div>
  </>
);
