import { createServer, Model, Factory } from "miragejs";
import faker from "faker";

type User = {
  name: string;
  email: string;
  created_at: string;
};

export function makeServer() {
  const server = createServer({
    // quais dados eu quero armazenar no bd fictício que o mirage cria
    models: {
      user: Model.extend<Partial<User>>({}), // pode não conter todos os dados do type User
    },

    // cria dados em massa
    factories: {
      // nome do model que eu quero criar a factory
      user: Factory.extend({
        name(i: number) {
          return `User ${i + 1}`;
        },
        email() {
          return faker.internet.email().toLowerCase();
        },
        createdAt() {
          return faker.date.recent(10);
        },
      }),
    },

    // gera dados quando inicializamos o servidor do mirage
    seeds(server) {
      // nome da factory, quantidade
      server.createList("user", 10);
    },

    routes() {
      this.namespace = "api";
      this.timing = 750; // toda chamada pra API vai demorar 750ms

      // shorthand
      this.get("/users");
      this.post("/users");

      this.namespace = ""; // volto o namespace pra não prejudicar as rotas api (API routes) do Next
      this.passthrough(); // faz com que todas as chamadas pra api passem pelo mirage
      // e se não forem detectadas pelas rotas do mirage, elas passam adiante
      // e a chamada pode ir por exemplo pras api routes
    },
  });

  return server;
}

// iniciar o servidor do mirage quando o app for inicializado também
