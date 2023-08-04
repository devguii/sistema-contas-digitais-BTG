import Card from "./components/card/Card";
import Header from "./components/header/Header";
import GetHandler from "./components/request-handler/GetHandler";
import GetHandlerExtrato from "./components/request-handler/GetHandlerExtrato";
import PatchContaSaldoHandler from "./components/request-handler/PatchContaSaldoHandler";
import PostClienteHandler from "./components/request-handler/PostClienteHandler";
import UpdateClienteHandler from "./components/request-handler/UpdateClienteHandler";
import Section from "./components/section/Section";
import Title from "./components/title/Title";

export default function Home() {
  const createClienteContaUrl = "http://localhost:3001/cliente/create";
  const updateClienteUrl = "http://localhost:3001/cliente/update";
  const getClienteContaUrl = "http://localhost:3001/cliente";
  const patchContaSaldoUrl = "http://localhost:3001/conta";
  const getMovimentacoesUrl = "http://localhost:3001/movimentacoes";

  return (
    <div>
      <Header></Header>
      <Section>
        <Card>
          <Title text="Criar Conta"></Title>
          <PostClienteHandler url={createClienteContaUrl} />
        </Card>
        <Card>
          <Title text="Atualizar Dados de um Cliente (Conta)"></Title>
          <UpdateClienteHandler url={updateClienteUrl}></UpdateClienteHandler>
        </Card>
        <Card>
          <Title text="Consultar Cliente (Conta)"></Title>
          <GetHandler url={getClienteContaUrl} />
        </Card>
        <Card>
          <Title text="Cadastrar Movimentação"></Title>
          <PatchContaSaldoHandler url={patchContaSaldoUrl} />
        </Card>
        <Card>
          <Title text="Consulta por movimentações de uma conta"></Title>
          <GetHandlerExtrato url={getMovimentacoesUrl} />
        </Card>
      </Section>
    </div>
  );
}
