import { Link } from "react-router-dom";
import style from "./listagem.module.css";
import axios from "axios";
import { useEffect, useState } from "react";

interface Aluno {
  id: number;
  nome: string;
  turma: string;
  curso: string;
  matricula: string;
}

export const Home = () => {
  const [info, setInfo] = useState<Aluno[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  async function Get() {
    try {
      setLoading(true);
      const response = await axios.get<Aluno[]>(
        "https://proweb.leoproti.com.br/alunos",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      setInfo(response.data);
      setError(false);
    } catch (error) {
      console.error("Erro ao buscar alunos:", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    Get();
  }, []);

  if (loading) {
    return <div className={style.loading}>Carregando...</div>;
  }

  if (error) {
    return <div className={style.error}>Erro ao carregar lista de alunos.</div>;
  }

  return (
    <div className={style.conteiner}>
      <div className={style.header}>
        <h1>Lista de Alunos</h1>
        <p>Selecione um aluno para ver mais detalhes</p>
      </div>
      
      <div className={style.listWrapper}>
        {info.map((item) => (
          <div key={item.id} className={style.item}>
            <span className={style.nomeAluno}>{item.nome}</span>
            <Link className={style.link} to={`/home2/${item.id}`}>
              Ver Detalhes
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};