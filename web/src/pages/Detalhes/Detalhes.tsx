import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import style from "./detalhes.module.css";

interface Aluno {
  nome: string;
  turma: string;
  curso: string;
  matricula: string;
}

export const Home2 = () => {
  const { id } = useParams<{ id: string }>();
  const [info, setInfo] = useState<Aluno | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  async function ById() {
    try {
      setLoading(true);
      const response = await axios.get<Aluno>(
        `https://proweb.leoproti.com.br/alunos/${id}`
      );
      setInfo(response.data);
      setError(false);
    } catch (error) {
      console.error("ERRO ao buscar aluno:", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    ById();
  }, [id]);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Erro ao carregar informações do aluno.</div>;
  }

  if (!info) {
    return <div>Nenhuma informação encontrada.</div>;
  }

  return (
    <div className={style.container}>
      <div className={style.card}>
        <h1 className={style.title}>Informações do Aluno</h1>
        <table className={style.table}>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Turma</th>
              <th>Curso</th>
              <th>Matrícula</th>
            </tr>
          </thead>
          <tbody>
            <tr className={style.rowValue}>
              <td>{info.nome}</td>
              <td>{info.turma}</td>
              <td>{info.curso}</td>
              <td>{info.matricula}</td>
            </tr>
          </tbody>
        </table>
        
        <Link to="/home" className={style.backLink}>
          Voltar para Home
        </Link>
      </div>
    </div>
  );
};