import "@testing-library/jest-dom";
import { describe, it, expect, vi, beforeEach } from "vitest";
import axios, { type AxiosResponse } from "axios";

vi.mock("axios");

const mockedAxios = vi.mocked(axios, true);

interface Aluno {
  id: number;
  nome: string;
  turma: string;
  curso: string;
  matricula: string;
}

describe("Testes da API de Alunos", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("Get - Listar todos os alunos", () => {
    it("deve buscar lista de alunos com sucesso", async () => {
      const mockData: Aluno[] = [
        { 
          id: 1, 
          nome: "João Silva", 
          turma: "A1", 
          curso: "Informática", 
          matricula: "2024001" 
        },
        { 
          id: 2, 
          nome: "Maria Santos", 
          turma: "B2", 
          curso: "Administração", 
          matricula: "2024002" 
        },
      ];

      const mockResponse: AxiosResponse<Aluno[]> = {
        data: mockData,
        status: 200,
        statusText: "OK",
        headers: {},
        config: {} as any,
      };

      mockedAxios.get.mockResolvedValueOnce(mockResponse);

      const response = await axios.get<Aluno[]>(
        "https://proweb.leoproti.com.br/alunos"
      );

      expect(mockedAxios.get).toHaveBeenCalledWith(
        "https://proweb.leoproti.com.br/alunos"
      );
      expect(response.data).toEqual(mockData);
      expect(response.data).toHaveLength(2);
      expect(response.data[0]).toHaveProperty("nome");
    });

    it("deve lidar com erro ao buscar alunos", async () => {
      const errorMessage = "Erro ao buscar alunos";
      
      mockedAxios.get.mockRejectedValueOnce(new Error(errorMessage));

      await expect(
        axios.get("https://proweb.leoproti.com.br/alunos")
      ).rejects.toThrow(errorMessage);

      expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    });
  });

  describe("ById - Buscar aluno por ID", () => {
    it("deve buscar aluno específico por ID com sucesso", async () => {
      const mockAluno: Aluno = {
        id: 1,
        nome: "João Silva",
        turma: "A1",
        curso: "Informática",
        matricula: "2024001",
      };

      const mockResponse: AxiosResponse<Aluno> = {
        data: mockAluno,
        status: 200,
        statusText: "OK",
        headers: {},
        config: {} as any,
      };

      mockedAxios.get.mockResolvedValueOnce(mockResponse);

      const response = await axios.get<Aluno>(
        "https://proweb.leoproti.com.br/alunos/1"
      );

      expect(mockedAxios.get).toHaveBeenCalledWith(
        "https://proweb.leoproti.com.br/alunos/1"
      );
      expect(response.data).toEqual(mockAluno);
      expect(response.data.id).toBe(1);
      expect(response.data.nome).toBe("João Silva");
    });

    it("deve lidar com erro ao buscar aluno por ID inexistente", async () => {
      mockedAxios.get.mockRejectedValueOnce(
        new Error("Aluno não encontrado")
      );

      await expect(
        axios.get("https://proweb.leoproti.com.br/alunos/999")
      ).rejects.toThrow("Aluno não encontrado");
    });
  });

  describe("Validação de estrutura dos dados", () => {
    it("deve retornar alunos com todas as propriedades necessárias", async () => {
      const mockData: Aluno[] = [
        {
          id: 1,
          nome: "João Silva",
          turma: "A1",
          curso: "Informática",
          matricula: "2024001",
        },
      ];

      const mockResponse: AxiosResponse<Aluno[]> = {
        data: mockData,
        status: 200,
        statusText: "OK",
        headers: {},
        config: {} as any,
      };

      mockedAxios.get.mockResolvedValueOnce(mockResponse);

      const response = await axios.get<Aluno[]>(
        "https://proweb.leoproti.com.br/alunos"
      );

      const aluno = response.data[0];
      
      expect(aluno).toHaveProperty("id");
      expect(aluno).toHaveProperty("nome");
      expect(aluno).toHaveProperty("turma");
      expect(aluno).toHaveProperty("curso");
      expect(aluno).toHaveProperty("matricula");
      
      expect(typeof aluno.id).toBe("number");
      expect(typeof aluno.nome).toBe("string");
    });
  });
});