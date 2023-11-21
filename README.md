# Global Solution - Microservices 2° Semestre - Testes

## Integrantes
- Pedro Argentati - RM: 88246
- Felipe Otto - RM: 89108
- Rafael Tannous - RM: 87486

# Tecnologias Utilizadas

## Linguagens
- **JavasScript**

## Bibliotecas
- **express**
- **k6**
- **supertest**
- **jest**

# Para rodar o projeto:

- 1° Clone o repositório:
```bash
git clone https://github.com/peargenfiap/gs-micr-2sem-front.git
```
- 2° Instale todas as dependências do projeto:
```bash
npm install
```
- 3° Para rodar os `testes de carga`, entre na pasta `carga` e rode o comando:
```bash
k6 run script.ts
```
- 4° Para rodar o teste de `integração` rode o comando:
```bash
npm run test
```

# Prints dos testes:
## Teste de carga - Simulando a interação de 100 usuários por 5 minutos.
![image](https://github.com/peargenfiap/gs-micro-tests/assets/115407377/c5367356-1552-4b00-812b-cda63c4427f6)

## Teste de Integração:
![image](https://github.com/peargenfiap/gs-micro-tests/assets/115407377/2623efe6-ce5c-40e8-a8d8-922504060ad0)

