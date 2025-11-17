// src/actions/loginUser.ts
"use server";

import { z } from "zod";
import {
  login,
  setAuthCookies,
  LoginResponse,
} from "@/lib/services/auth.service";
import { redirect } from "next/navigation";

// ==================== SCHEMA DO ZOD ====================
const loginSchema = z.object({
  email: z.string().email({ message: "E-mail inválido" }),
  password: z.string().min(6, { message: "A senha deve ter pelo menos 6 caracteres" }),
  role: z.enum(["volunteer", "organization"], {
    message: "Selecione um tipo de conta válido",
  }),
});

// ==================== TIPOS ====================
type LoginState =
  | {
      errors?: {
        email?: string[];
        password?: string[];
        role?: string[];
        general?: string[];
      };
      success?: never;
    }
  | {
      errors?: never;
      success: true;
    };

// ==================== SERVER ACTION ====================
export async function loginUser(formData: FormData): Promise<LoginState> {
  const parsed = loginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
    role: formData.get("role"),
  });

  if (!parsed.success) {
    return {
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  const { email, password, role } = parsed.data;

  let loginResponse: LoginResponse;

  try {
    loginResponse = await login({ email, password });

    const expectedType = role === "volunteer" ? "VOLUNTEER" : "ORGANIZATION";

    if (loginResponse.userType !== expectedType) {
      return {
        errors: {
          role: [
            `Esta conta é do tipo ${
              loginResponse.userType === "VOLUNTEER" ? "voluntário" : "organização"
            }. Selecione a opção correta.`,
          ],
        },
      };
    }

    await setAuthCookies(loginResponse);
  } catch (error) {
    return {
      errors: {
        general: [
          error instanceof Error
            ? error.message
            : "Erro desconhecido ao fazer login",
        ],
      },
    };
  }

  const redirectTo =
    loginResponse.userType === "VOLUNTEER" ? "/feed" : "/dashboard";

  console.log("REDIRECT DISPARADO PARA:", redirectTo);
  redirect(redirectTo);
}