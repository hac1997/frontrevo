// src/lib/services/user.service.ts

import { UserStatsDTO } from '@/lib/types'; // Importar a interface principal

const API_BASE_URL = 'http://localhost:8080/api/v1';

/**
 * Busca as estatísticas completas e o histórico de eventos de um voluntário.
 * @param userId O ID do usuário (ex: 1).
 * @param token O token de autenticação JWT/Bearer.
 * @returns Os dados completos do DTO.
 */
export async function getVolunteerStats(userId: number, token: string): Promise<UserStatsDTO> {
    const url = `${API_BASE_URL}/users/${userId}/stats`;

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            // Token de autenticação obrigatório
            'Authorization': `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Erro ${response.status} ao buscar estatísticas: ${errorText}`);
    }

    const data: UserStatsDTO = await response.json();
    return data;
}

// Você pode remover os mocks antigos do arquivo getDataseService.ts
// ou movê-los para outro lugar se ainda forem usados por outros componentes.