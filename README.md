# Introdução

Esse repositório define a configuração de um ambiente para a implementação de um API Gateway com base no [Kong Gateway](https://konghq.com/products/kong-gateway), tendo o PostgreSQL como base de dados e o Konga como dashboard de administração.

Nessa configuração, o objetivo é apresentar as seguintes funcionalides

* Roteamento de diversas APIs em um endpoint único
* Controle de acesso a partir de mecanismo de API Keys
* Controle de tráfego (*rate-limit*)

Para esse laboratório, foram utilizadas as versões a seguir:

* Kong
* Konga
* PostgreSQL

# Configuração

As orientações a seguir descrevem a configuração do ambiente e os passos para execução.

## kong

...

## konga

...

## database

... .

## docker

...




Após a configuração do ambiente, basta executar

```bash
% docker compose up -d
```

Ao criar o ambiente completo, estarão visíveis os seguintes containers:

```bash
% % docker ps -a
CONTAINER ID   IMAGE                                                  COMMAND                  CREATED        STATUS                      PORTS                                                                NAMES
3d78d91f1a75   pantsel/konga                                          "/app/start.sh"          2 hours ago    Up 2 hours                  0.0.0.0:1337->1337/tcp                                               lab-api-gateway-konga-1
313d9ce362bd   pantsel/konga                                          "/app/start.sh -c pr…"   2 hours ago    Exited (0) 2 hours ago                                                                           konga-prepare
3d3d12bd78d1   kong                                                   "/docker-entrypoint.…"   2 hours ago    Up 2 hours (healthy)        0.0.0.0:8000-8001->8000-8001/tcp, 0.0.0.0:8443-8444->8443-8444/tcp   lab-api-gateway-kong-1
4c9878e3f738   api-sample                                             "docker-entrypoint.s…"   2 hours ago    Up 2 hours                  0.0.0.0:3000->3000/tcp                                               lab-api-gateway-service-api-1
57468fdac5e4   kong                                                   "/docker-entrypoint.…"   2 hours ago    Exited (0) 2 hours ago                                                                           lab-api-gateway-kong-migrations-1
```

OBS: Os containers `kong-migrations` e `konga-prepare` são utilizados apenas para inicialização do banco de dados.

Para finalizar e remover os containers, basta executar

```bash
% docker compose down
```

# Informações complementares

Esse repositório foi criado pelo [WebTech PUC Minas](https://github.com/webtech-pucminas), um grupo voltado para a criação de aplicações, ferramentas e conteúdo para interessados em criar soluções praa a plataforma Web.
