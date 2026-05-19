# 📝 Lista de Tarefas - React com TypeScript

Uma aplicação SPA de lista de tarefas construída com React, TypeScript e Vite, servida via container Nginx com Docker.

## 🎯 Características do TypeScript

- ✅ Interfaces para Tipagem (`Task`, `Status`, `Stats`)
- ✅ Props tipadas em todos os componentes
- ✅ useState com tipo genérico `Task[]`
- ✅ Eventos tipados (`FormEvent`, `ChangeEvent`)
- ✅ Funções com retorno explícito (`: void`)

## 🐳 Características do Docker

- ✅ Dockerfile multi-stage: build com Node 20, serve com Nginx
- ✅ Nginx configurado para servir SPA corretamente (`try_files`)
- ✅ Cache de assets estáticos
- ✅ Imagem publicada no DockerHub com versionamento semântico

## 📦 Como executar

### Pré-requisitos
- Node.js 20+
- Yarn
- Docker

### Instalação local

```bash
# Clone o repositório
git clone https://github.com/edurw/todo-app-ts.git

# Instale as dependências
yarn install

# Execute o projeto
yarn dev
```

### Executar com Docker

```bash
# Build da imagem
docker build -t todo-app-ts-docker:v1.0.0 .

# Rodar o container
docker run -p 8080:80 todo-app-ts-docker:v1.0.0
```

Acesse **http://localhost:8080**

### Ou via DockerHub

```bash
docker pull edurw/todo-app-ts-docker:v1.0.0
docker run -p 8080:80 edurw/todo-app-ts-docker:v1.0.0
```

## 🏷️ Versões

| Versão | Tag GitHub | Tag DockerHub |
|--------|-----------|---------------|
| 1.0.0  | `v1.0.0`  | `edurw/todo-app-ts-docker:v1.0.0` |