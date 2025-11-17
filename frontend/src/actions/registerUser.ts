'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';

const registerSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'Senha deve ter no mínimo 6 caracteres'),
  confirmPassword: z.string(),
  fullName: z.string().min(3, 'Nome completo é obrigatório'),
  city: z.string().min(2, 'Cidade é obrigatória'),
  state: z.string().min(2, 'Estado é obrigatório'),
  interests: z
    .string()
    .transform((val) => JSON.parse(val))
    .pipe(z.array(z.string()).min(1, 'Selecione pelo menos uma causa')),
  acceptTerms: z.coerce.boolean().refine((val) => val === true, 'Você deve aceitar os termos'),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'As senhas não coincidem',
  path: ['confirmPassword'],
});

const registerOrgSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'Senha deve ter no mínimo 6 caracteres'),
  confirmPassword: z.string(),
  orgName: z.string().min(3, 'Nome da organização é obrigatório'),
  orgCnpj: z.string().min(1, 'CNPJ é obrigatório'),
  city: z.string().min(2, 'Cidade é obrigatória'),
  state: z.string().min(2, 'Estado é obrigatório'),
  orgCauses: z
    .string()
    .transform((val) => JSON.parse(val))
    .pipe(z.array(z.string()).min(1, 'Selecione pelo menos uma causa')),
  acceptTerms: z.coerce.boolean().refine((val) => val === true, 'Você deve aceitar os termos'),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'As senhas não coincidem',
  path: ['confirmPassword'],
});


export async function registerUser(prevState: unknown, formData: FormData) {
  console.log('\n--- SERVER ACTION: registerUser INICIADA ---');
  
  try {
    const data = Object.fromEntries(formData);
    const registerType = data.registerType as 'volunteer' | 'organization';

    console.log('SERVER: Tipo de Registro:', registerType);
    console.log('SERVER: Dados Recebidos (Raw):', data);

    if (registerType === 'organization') {
      console.log('SERVER: Validando como ORGANIZAÇÃO...');
      const parsed = registerOrgSchema.safeParse(data);
      
      if (!parsed.success) {
        console.error('SERVER ERROR: Falha na validação (Org). Erros:', parsed.error.flatten().fieldErrors);
        return {
          success: false,
          message: 'Erro de validação da Organização',
          errors: parsed.error.flatten().fieldErrors,
        };
      }
    } else {
      console.log('SERVER: Validando como VOLUNTÁRIO...');
      const parsed = registerSchema.safeParse(data);

      if (!parsed.success) {
        console.error('SERVER ERROR: Falha na validação (Vol). Erros:', parsed.error.flatten().fieldErrors);
        return {
          success: false,
          message: 'Erro de validação do Voluntário',
          errors: parsed.error.flatten().fieldErrors,
        };
      }
    }

    console.log('SERVER: Validação BEM SUCEDIDA.');
    
    
    
    
    
    revalidatePath('/dashboard');
    revalidatePath('/feed');

    console.log('SERVER: Retornando { success: true } para o cliente.');
    return {
      success: true,
      message: 'Cadastro realizado com sucesso!',
    };

  } catch (error) {
    console.error('SERVER ERROR: Bloco CATCH principal atingido:', error);
    return {
      success: false,
      message: 'Erro ao realizar cadastro',
    };
  }
}