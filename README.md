# CHECKPOINT 02 - Mobile Application Development

## Descrição
Este projeto consiste no desenvolvimento de um aplicativo mobile utilizando React Native, com navegação entre telas, validação de formulário, uso de máscaras de input e persistência de dados com Async Storage.

## Funcionalidades

### Navegação
- Implementação de rotas entre:
  - Tela de Cadastro
  - Tela de Perfil
- Utilização de Expo Router

### Tela de Cadastro
- Formulário contendo:
  - Nome
  - RM
  - Telefone (com máscara)
  - CPF (com máscara)

### Tela de Perfil
- Exibição dos dados enviados:
  - Nome
  - RM
  - Foto

## Máscaras de Input
Utilização da biblioteca:
```
npx expo install react-native-mask-text
```

Aplicada nos campos:
- Telefone
- CPF

## Validação de Formulário
- Verificação de campos obrigatórios ao clicar em "Salvar/Enviar"
- Exibição de alerta caso algum campo esteja vazio
- Bloqueio da navegação se houver erro

## Persistência de Dados
- Uso do Async Storage para salvar os dados do usuário
- Ao abrir o aplicativo:
  - Recupera os dados salvos
  - Preenche automaticamente o formulário

## Hooks Utilizados
- useState: controle dos estados do formulário
- useEffect: recuperação dos dados salvos ao carregar o app

## Regras de Funcionamento
- O formulário deve iniciar preenchido caso existam dados salvos
- Os dados devem ser salvos antes de navegar para a tela de perfil

## Tecnologias Utilizadas
- React Native
- Expo
- Expo Router
- Async Storage
- react-native-mask-text

## Como Executar o Projeto

1. Instale as dependências:
```
npm install
```

2. Instale a biblioteca de máscara:
```
npx expo install react-native-mask-text
```

3. Inicie o projeto:
```
npx expo start
```

## Entrega
- Link do repositório no GitHub
- Vídeo de até 5 minutos demonstrando:
  - Navegação
  - Validação
  - Máscaras de input
  - Persistência de dados

## Critérios de Avaliação
- Navegação entre telas
- Persistência e autopreenchimento
- Uso correto de máscaras
- Validação de formulário
- Uso de hooks (useState e useEffect)
- Interface e organização
