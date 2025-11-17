// src/features/auth/components/LoginForm.tsx
"use client"; // <--- ADICIONE ESTA LINHA

import { useState } from "react";
import { loginUser } from "@/actions/loginUser";
import { InputField } from "@/components/ui/InputField";
import { SocialButton } from "@/components/ui/SocialButton";
import Link from "next/link";

export function LoginForm() {
  const [selectedRole, setSelectedRole] =
    useState<"volunteer" | "organization">("volunteer");

  // ... (o resto do seu código permanece igual)
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-2xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Entrar na REVO
        </h2>

        <div className="flex justify-center space-x-4 mb-6">
          <button
            type="button"
            onClick={() => setSelectedRole("volunteer")}
            className={`px-4 py-2 rounded-full transition-all ${selectedRole === "volunteer"
                ? "bg-primary text-white"
                : "bg-gray-100 text-gray-600"
              }`}
          >
            Voluntário
          </button>
          <button
            type="button"
            onClick={() => setSelectedRole("organization")}
            className={`px-4 py-2 rounded-full transition-all ${selectedRole === "organization"
                ? "bg-primary text-white"
                : "bg-gray-100 text-gray-600"
              }`}
          >
            Organização
          </button>
        </div>

        {/* FORMULÁRIO CHAMANDO A SERVER ACTION DIRETAMENTE */}
        <form action={loginUser as unknown as string} method="POST" className="space-y-4">
          <input type="hidden" name="role" value={selectedRole} />

          <InputField type="email" name="email" placeholder="Seu e-mail" required />
          <InputField
            type="password"
            name="password"
            placeholder="Sua senha"
            required
          />

          <button
            type="submit"
            className="w-full py-3 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors font-semibold"
          >
            Entrar
          </button>
        </form>

        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="px-3 text-sm text-gray-500">ou</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <SocialButton
          provider="Google"
          logoUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
        />
        <div className="mt-3">
          <SocialButton
            provider="Facebook"
            logoUrl="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg"
          />
        </div>

        <p className="text-center text-sm text-gray-600 mt-6">
          Não tem uma conta?{" "}
          <Link
            href="/register"
            className="text-primary hover:brightness-90 font-semibold"
          >
            Cadastre-se
          </Link>
        </p>
      </div>
    </div>
  );
}