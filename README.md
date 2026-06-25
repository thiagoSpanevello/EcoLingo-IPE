# 🌱 EcoLingo — Educação Ambiental é para Todos

Aplicativo mobile educativo inspirado na dinâmica do Duolingo, com foco em educação ambiental. Desenvolvido como projeto de extensão universitária na **Universidade Federal da Fronteira Sul — Campus Chapecó**, pelo curso de **Ciência da Computação**.

---

## 👥 Equipe

| Nome | Responsabilidade                                                              |
|---|-------------------------------------------------------------------------------|
| Arthur Antonio Bertoglio | Pesquisa, elaboração de conteúdo, programação                                 |
| Davi Augusto Marangoni Mocva | Pesquisa, elaboração de conteúdo, programação                                 |
| Thiago Augusto Busanello Spanevello | Design, programação, testes e documentação                                    |
| Luigi Eduardo Pisoni | Design, programação, testes e documentação                                    |
| Vitor de Souza Bach | Design, programação, testes e documentação                                    |

**Orientador:** Prof. Carlos Roberto França

---

## 📱 Sobre o Projeto

O EcoLingo é um aplicativo Android que ensina crianças e jovens sobre preservação ambiental, cultivo de plantas, cuidados com flores, frutas e vegetais por meio de atividades interativas e gamificadas. O app é projetado para ser acessível até para usuários com dificuldades de leitura, priorizando o uso de imagens, emojis e mecânicas simples.

### Funcionalidades

- Trilhas de aprendizado divididas por módulos temáticos
- Sistema de XP e níveis — sobe de nível a cada 100 XP
- Streak diário — recompensa o uso consecutivo do app
- Persistência local do progresso com AsyncStorage
- Tela de perfil com estatísticas do usuário

### Módulos de Conteúdo

| Módulo | Ícone |
|---|---|
| Plantas | 🌿 |
| Árvores | 🌳 |
| Frutas e Vegetais | 🍎 |
| Preservação | 🌍 |
| Sustentabilidade | ♻️ |

### Tipos de Exercício

| Tipo | Descrição |
|---|---|
| Múltipla Escolha | 4 opções com emojis/imagens grandes |
| Verdadeiro ou Falso | Resposta binária com feedback visual |
| Completar Frase | Preencher lacuna escolhendo a palavra certa |

---

## 🛠️ Tecnologias Utilizadas

- **React Native 0.73.4**
- **React Navigation 6** — navegação entre telas (Stack + Tab)
- **Redux Toolkit + React Redux** — gerenciamento de estado global
- **AsyncStorage** — persistência local do progresso
- **Android Studio** — emulação e build Android
- **Java 21 (JBR do Android Studio)** — runtime para o Gradle

---

## 📁 Estrutura do Projeto

```
EcoLingoApp/
├── App.jsx                          # Ponto de entrada da aplicação
├── index.js                         # Registro do componente raiz
├── package.json
└── src/
    ├── assets/                      # Imagens, ícones e sons
    ├── components/
    │   ├── common/                  # Button, ProgressBar, HeartBar, XPBadge
    │   └── game/                    # MultipleChoiceCard, TrueFalseCard, CompleteSentenceCard
    ├── constants/                   # Cores, fontes, espaçamentos, tipos de exercício
    ├── hooks/
    │   ├── useLesson.js             # Lógica do fluxo de exercícios
    │   └── useProgress.js           # Atualização de XP e progresso
    ├── navigation/                  # Configuração do Stack e Tab navigator
    ├── screens/
    │   ├── Onboarding/              # Tela inicial / cadastro de nome
    │   ├── Home/                    # Lista de módulos
    │   ├── Lesson/                  # Fluxo de exercícios
    │   └── Profile/                 # XP, nível e estatísticas
    ├── services/
    │   ├── lessonService.js         # Dados das lições e módulos
    │   └── storage.js               # Wrapper do AsyncStorage
    ├── store/
    │   ├── index.js                 # Configuração da Redux store
    │   └── slices/
    │       └── userSlice.js         # Estado do usuário (XP, vidas, streak)
    ├── theme/                       # Objeto de tema centralizado
    └── utils/                       # Funções auxiliares (shuffleArray, calcXP, etc.)
```

---

## 🚀 Como Rodar o Projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) >= 18
- [Android Studio](https://developer.android.com/studio) com um AVD (emulador) configurado
- Java 21 (use o JBR que vem com o Android Studio)

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/EcoLingoApp.git
cd EcoLingoApp

# Instale as dependências
npm install
```

### Configuração do Java (Windows)

Se o build falhar com erro de versão do Java, configure o JAVA_HOME para usar o JDK do Android Studio:

```powershell
$env:JAVA_HOME = "C:\Program Files\Android\Android Studio\jbr"
$env:Path = "$env:JAVA_HOME\bin;$env:Path"
```

### Rodando no Android

1. Abra o Android Studio e inicie um emulador pelo Device Manager
2. Com o emulador aberto, execute:

```bash
npx react-native run-android
```

---

## ➕ Como Adicionar uma Nova Lição

Abra `src/services/lessonService.js` e adicione uma entrada no array `lessons` do módulo desejado:

```js
{
  id: 'plants_2',
  title: 'Partes da planta',
  xpReward: 10,
  exercises: [
    {
      id: 'ex1',
      type: EXERCISE_TYPES.MULTIPLE_CHOICE,
      question: 'Qual é a parte da planta que fica sob a terra?',
      options: ['🌿', '🌸', '🌱', '🍂'],
      correct: 2,
    },
    {
      id: 'ex2',
      type: EXERCISE_TYPES.TRUE_FALSE,
      question: 'As folhas são responsáveis pela fotossíntese.',
      correct: true,
    },
  ],
}
```

---

