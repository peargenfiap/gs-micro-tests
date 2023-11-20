# Global Solution - Microservices 2° Semestre - Testes

## Integrantes
- Pedro Argentati - RM: 88246
- Felipe Otto - RM: 89108
- Rafael Tannous - RM: 87486

# Tecnologias Utilizadas

## Linguagens
- **JavasScript**

## Bibliotecas
- **@express**
- **@k6**
- **supertest**
- **jest**

# Para rodar o projeto:

- 1° Clone o repositório:
```bash
git clone [https://github.com/peargenfiap/gs-micr-2sem-front.git](https://github.com/peargenfiap/gs-micro-tests.git)
```
- 2° Instale todas as dependências do projeto:
```bash
npm install
```
- 3° Para rodar os testes de carga, entre na pasta `carga` e rode o comando:

```bash
k6 run script.ts
```

# Prints dos testes:
## Teste de carga - Simulando 100 usuários por 5 minutos.
![image](https://github.com/peargenfiap/gs-micro-tests/assets/115407377/c5367356-1552-4b00-812b-cda63c4427f6)

## Métricas de Integração:
![image](https://github.com/peargenfiap/gs-micro-tests/assets/115407377/2623efe6-ce5c-40e8-a8d8-922504060ad0)

