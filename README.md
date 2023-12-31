# MyWallet

## Descrição

MyWallet é uma aplicação móvel desenvolvida em React Native para implementação teste prático para a posição de Frontend Mobile.

## Pré-requisitos

- Node.js >= 16
- Yarn ou npm
- React Native CLI
- Android Studio ou Xcode (dependendo do sistema operacional alvo)

## Build

1. Clone o repositório para sua máquina local:

   ```bash
   git clone https://github.com/LucioHenrique512/MyWallet.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd MyWallet
   ```

3. Instale as dependências:

   ```bash
   yarn install
   ```

   ou

   ```bash
   npm install
   ```

## Execução

### Android

1. Certifique-se de que um emulador Android esteja rodando ou que um dispositivo Android esteja conectado.

2. Execute o seguinte comando:

   ```bash
   yarn android
   ```

### iOS

1. Abra o Xcode e selecione um emulador ou conecte um dispositivo iOS.

2. Execute o seguinte comando:

   ```bash
   yarn ios
   ```

## Para executar em modo desenvolvimento
1 - Inicie o servidor JSON (mock):

  ```bash
  yarn server
  ```

2 - Inicie o servidor de desenvolvimento:

  ```bash
  yarn start
  ```
> `No Android` caso o app esteja enfrentando problemas para acessar o json-server que está rodando localmente execute o comando a baixo 

```bash 
adb reverse tcp:3000 tcp:3000
```

### Para executar os testes:

  ```bash
  yarn test
  ```

## Tecnologias Utilizadas

- React Native
- React Navigation
- React Native Reanimated
- Axios
- Formik
- Yup
- Styled-components
- Jest
- ESLint
- Prettier

