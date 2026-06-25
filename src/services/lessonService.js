/**
 * Dados das lições e módulos do EcoLingo
 * Para adicionar conteúdo: basta incluir entradas nos arrays 'lessons'
 */
import { EXERCISE_TYPES } from '../constants';

export const LESSON_DATA = {
  plants: {
    id: 'plants',
    title: 'Plantas',
    icon: '🌿',
    color: '#4CAF50',
    lessons: [
      {
        id: 'plants_1',
        title: 'O que é uma planta?',
        xpReward: 10,
        exercises: [
          {
            id: 'plants_ex1',
            type: EXERCISE_TYPES.MULTIPLE_CHOICE,
            question: 'Qual dessas imagens é uma planta?',
            options: ['🌵', '🪨', '🚗', '📱'],
            correct: 0,
          },
          {
            id: 'plants_ex2',
            type: EXERCISE_TYPES.TRUE_FALSE,
            question: 'As plantas precisam de água para viver.',
            correct: true,
          },
          {
            id: 'plants_ex3',
            type: EXERCISE_TYPES.COMPLETE_SENTENCE,
            question: 'As plantas produzem alimento usando a luz do ___.',
            options: ['sol', 'lua', 'vento', 'chuva'],
            correct: 0,
          },
        ],
      },
      {
        id: 'plants_2',
        title: 'Partes de uma Planta',
        xpReward: 10,
        exercises: [
          {
            id: 'plants_ex4',
            type: EXERCISE_TYPES.COMPLETE_SENTENCE,
            question: 'Qual parte fixa a planta no solo e absorve água?',
            options: ['Folha', 'Raiz', 'Flor', 'Fruto'],
            correct: 1,
          },
          {
            id: 'plants_ex5',
            type: EXERCISE_TYPES.TRUE_FALSE,
            question: 'O caule serve para sustentar as folhas e transportar nutrientes.',
            correct: true,
          },
          {
            id: 'plants_ex6',
            type: EXERCISE_TYPES.COMPLETE_SENTENCE,
            question: 'A respiração da planta acontece principalmente através da ___.',
            options: ['raiz', 'semente', 'folha', 'casca'],
            correct: 2,
          },
        ],
      },
      {
        id: 'plants_3',
        title: 'Fotossíntese Básica',
        xpReward: 10,
        exercises: [
          {
            id: 'plants_ex7',
            type: EXERCISE_TYPES.COMPLETE_SENTENCE,
            question: 'O que as plantas liberam no ar que nós usamos para respirar?',
            options: ['Gás Carbônico', 'Oxigênio', 'Nitrogênio', 'Fumaça'],
            correct: 1,
          },
          {
            id: 'plants_ex8',
            type: EXERCISE_TYPES.TRUE_FALSE,
            question: 'As plantas realizam fotossíntese no escuro total.',
            correct: false,
          },
          {
            id: 'plants_ex9',
            type: EXERCISE_TYPES.COMPLETE_SENTENCE,
            question: 'O pigmento verde que ajuda a captar a luz solar chama-se ___.',
            options: ['clorofila', 'caroteno', 'seiva', 'glicose'],
            correct: 0,
          },
        ],
      },
      {
        id: 'plants_4',
        title: 'Polinização',
        xpReward: 10,
        exercises: [
          {
            id: 'plants_ex10',
            type: EXERCISE_TYPES.MULTIPLE_CHOICE,
            question: 'Qual destes animais é um dos maiores polinizadores do planeta?',
            options: ['🐜', '🐝', '🕷️', '🦗'],
            correct: 1,
          },
          {
            id: 'plants_ex11',
            type: EXERCISE_TYPES.TRUE_FALSE,
            question: 'O vento também pode ajudar a polinizar as flores.',
            correct: true,
          },
          {
            id: 'plants_ex12',
            type: EXERCISE_TYPES.COMPLETE_SENTENCE,
            question: 'O pozinho amarelo que as abelhas carregam de flor em flor é o ___.',
            options: ['mel', 'néctar', 'pólen', 'broto'],
            correct: 2,
          },
        ],
      },
      {
        id: 'plants_5',
        title: 'Plantas do Deserto',
        xpReward: 10,
        exercises: [
          {
            id: 'plants_ex13',
            type: EXERCISE_TYPES.COMPLETE_SENTENCE,
            question: 'Como os cactos armazenam água para sobreviver à seca?',
            options: ['Nas folhas', 'No caule fofinho', 'Nas flores', 'Nas raíces aéreas'],
            correct: 1,
          },
          {
            id: 'plants_ex14',
            type: EXERCISE_TYPES.TRUE_FALSE,
            question: 'Os espinhos dos cactos ajudam a reduzir a perda de água.',
            correct: true,
          },
          {
            id: 'plants_ex15',
            type: EXERCISE_TYPES.COMPLETE_SENTENCE,
            question: 'As plantas que vivem em ambientes muito secos são chamadas de ___.',
            options: ['aquáticas', 'xerófitas', 'parasitas', 'rasteiras'],
            correct: 1,
          },
        ],
      },
      {
        id: 'plants_6',
        title: 'Curiosidades sobre plantas',
        xpReward: 10,
        exercises: [
          {
            id: 'plants_ex16',
            type: EXERCISE_TYPES.MULTIPLE_CHOICE,
            question: 'O bambu é a planta lenhosa que cresce mais rápido no mundo, podendo crescer até quanto em um único dia?',
            options: ['90 cm', '2 cm', '1 m'],
            correct: 0,
          },
          {
            id: 'plants_ex17',
            type: EXERCISE_TYPES.TRUE_FALSE,
            question: 'Algumas plantas, ao serem tocadas, podem se fechar e murchar imediatamente.',
            correct: true,
          },
          {
            id: 'plants_ex18',
            type: EXERCISE_TYPES.MULTIPLE_CHOICE,
            question: 'Plantas ____ “ouvir” vibrações acústicas, como o som de água corrente ou até música.',
            options: ['conseguem', 'não conseguem'],
            correct: 0,
          },
        ],
      },
    ],
  },
  trees: {
    id: 'trees',
    title: 'Árvores',
    icon: '🌳',
    color: '#388E3C',
    lessons: [
      {
        id: 'trees_1',
        title: 'A Importância das Árvores',
        xpReward: 10,
        exercises: [
          {
            id: 'trees_ex1',
            type: EXERCISE_TYPES.COMPLETE_SENTENCE,
            question: 'Por que as árvores são chamadas de pulmões do mundo?',
            options: ['Porque caminham', 'Porque limpam o ar e geram oxigênio', 'Porque fazem barulho', 'Porque bebem chuva'],
            correct: 1,
          },
          {
            id: 'trees_ex2',
            type: EXERCISE_TYPES.TRUE_FALSE,
            question: 'As árvores ajudam a diminuir o calor nas cidades.',
            correct: true,
          },
          {
            id: 'trees_ex3',
            type: EXERCISE_TYPES.COMPLETE_SENTENCE,
            question: 'A sombra das árvores impede que o solo perca a ___ muito rápido.',
            options: ['terra', 'umidade', 'cor', 'raiz'],
            correct: 1,
          },
        ],
      },
      {
        id: 'trees_2',
        title: 'O Tronco e a Casca',
        xpReward: 10,
        exercises: [
          {
            id: 'trees_ex4',
            type: EXERCISE_TYPES.COMPLETE_SENTENCE,
            question: 'Qual a principal função da casca de uma árvore?',
            options: ['Ficar bonita', 'Proteger contra insetos, frio e incêndios', 'Prender folhas', 'Produzir frutos'],
            correct: 1,
          },
          {
            id: 'trees_ex5',
            type: EXERCISE_TYPES.TRUE_FALSE,
            question: 'É possível descobrir a idade aproximada de uma árvore contando os anéis dentro do tronco.',
            correct: true,
          },
          {
            id: 'trees_ex6',
            type: EXERCISE_TYPES.COMPLETE_SENTENCE,
            question: 'O líquido que corre dentro do tronco levando nutrientes é a ___.',
            options: ['água pura', 'seiva', 'resina', 'clorofila'],
            correct: 1,
          },
        ],
      },
      {
        id: 'trees_3',
        title: 'Árvores Nativas do Brasil',
        xpReward: 10,
        exercises: [
          {
            id: 'trees_ex7',
            type: EXERCISE_TYPES.COMPLETE_SENTENCE,
            question: 'Qual árvore histórica deu origem ao nome do nosso país?',
            options: ['Ipê Amarelo', 'Pau-Brasil', 'Araucária', 'Palmeira'],
            correct: 1,
          },
          {
            id: 'trees_ex8',
            type: EXERCISE_TYPES.TRUE_FALSE,
            question: 'O Ipê é famoso por perder todas as folhas antes de florescer.',
            correct: true,
          },
          {
            id: 'trees_ex9',
            type: EXERCISE_TYPES.COMPLETE_SENTENCE,
            question: 'A árvore símbolo da região Sul do Brasil, que dá o pinhão, é a ___.',
            options: ['araucária', 'mangueira', 'samambaia', 'peroba'],
            correct: 0,
          },
        ],
      },
      {
        id: 'trees_4',
        title: 'Raízes Profundas',
        xpReward: 10,
        exercises: [
          {
            id: 'trees_ex10',
            type: EXERCISE_TYPES.COMPLETE_SENTENCE,
            question: 'Como as raízes das grandes árvores ajudam as encostas de morros?',
            options: ['Deixando o morro pesado', 'Segurando a terra para evitar deslizamentos', 'Sugando toda a terra', 'Espantando animais'],
            correct: 1,
          },
          {
            id: 'trees_ex11',
            type: EXERCISE_TYPES.TRUE_FALSE,
            question: 'As raízes das árvores não conseguem quebrar pedras subterrâneas.',
            correct: false,
          },
          {
            id: 'trees_ex12',
            type: EXERCISE_TYPES.COMPLETE_SENTENCE,
            question: 'As raízes ajudam a água da chuva a infiltrar melhor no ___.',
            options: ['rio', 'mar', 'solo', 'ar'],
            correct: 2,
          },
        ],
      },
      {
        id: 'trees_5',
        title: 'Ciclo de Vida de uma Árvore',
        xpReward: 10,
        exercises: [
          {
            id: 'trees_ex13',
            type: EXERCISE_TYPES.COMPLETE_SENTENCE,
            question: 'Como começa a vida de quase toda árvore?',
            options: ['De um pedaço de folha', 'De uma semente', 'Do vento', 'Da água do rio'],
            correct: 1,
          },
          {
            id: 'trees_ex14',
            type: EXERCISE_TYPES.TRUE_FALSE,
            question: 'Uma árvore jovem que acabou de brotar da semente é chamada de muda.',
            correct: true,
          },
          {
            id: 'trees_ex15',
            type: EXERCISE_TYPES.COMPLETE_SENTENCE,
            question: 'Quando as folhas caem no outono, elas viram adubo natural para a própria ___.',
            options: ['cidade', 'floresta', 'estrada', 'nuvem'],
            correct: 1,
          },
        ],
      },
      {
        id: 'trees_6',
        title: 'Arborização Urbana',
        xpReward: 10,
        exercises: [
          {
            id: 'trees_ex16',
            type: EXERCISE_TYPES.MULTIPLE_CHOICE,
            question: 'O que deve ser considerado antes de plantar uma árvore na cidade?',
            options: [
              'Nada',
              'O custo da muda',
              'A espécie indicada, o espaço disponível, o tamanho da cova, a adubação e o desenvolvimento futuro da árvore'
            ],
            correct: 2,
          },
          {
            id: 'trees_ex17',
            type: EXERCISE_TYPES.MULTIPLE_CHOICE,
            question: 'Por que plantar árvores na cidade?',
            options: [
              'Para acabar com o desmatamento',
              'Para ficar bonito',
              'Para melhorar o ambiente, o conforto térmico, a qualidade do ar e a paisagem da cidade'
            ],
            correct: 2,
          },
          {
            id: 'trees_ex18',
            type: EXERCISE_TYPES.TRUE_FALSE,
            question: 'Devemos escolher espécies exóticas para plantar em vez de espécies nativas.',
            correct: false,
          },
        ],
      },
    ],
  },
  fruits_veggies: {
    id: 'fruits_veggies',
    title: 'Frutas e Vegetais',
    icon: '🍎',
    color: '#FF7043',
    lessons: [
      {
        id: 'fruits_1',
        title: 'Origem dos Alimentos',
        xpReward: 10,
        exercises: [
          {
            id: 'fruits_ex1',
            type: EXERCISE_TYPES.COMPLETE_SENTENCE,
            question: 'Onde nascem as maçãs?',
            options: ['Debaixo da terra', 'Em arbustos rasteiros', 'Em árvores chamadas macieiras', 'Em estufas de plástico'],
            correct: 2,
          },
          {
            id: 'fruits_ex2',
            type: EXERCISE_TYPES.TRUE_FALSE,
            question: 'A batata é um tubérculo que cresce debaixo da terra.',
            correct: true,
          },
          {
            id: 'fruits_ex3',
            type: EXERCISE_TYPES.COMPLETE_SENTENCE,
            question: 'Os vegetais e frutas são colhidos de plantações conhecidas como ___.',
            options: ['fábricas', 'hortas', 'laboratórios', 'pastos'],
            correct: 1,
          },
        ],
      },
      {
        id: 'fruits_2',
        title: 'Frutas da Estação',
        xpReward: 10,
        exercises: [
          {
            id: 'fruits_ex4',
            type: EXERCISE_TYPES.COMPLETE_SENTENCE,
            question: 'Por que é melhor consumir frutas da estação atual?',
            options: ['Porque são mais caras', 'Porque são mais saborosas, naturais e baratas', 'Porque duram menos', 'Porque vêm de longe'],
            correct: 1,
          },
          {
            id: 'fruits_ex5',
            type: EXERCISE_TYPES.TRUE_FALSE,
            question: 'O morango cresce melhor em épocas de calor extremo.',
            correct: false,
          },
          {
            id: 'fruits_ex6',
            type: EXERCISE_TYPES.COMPLETE_SENTENCE,
            question: 'Frutas colhidas fora de época geralmente usam mais ___ para crescer.',
            options: ['água pura', 'defensivos químicos', 'açúcar', 'vento'],
            correct: 1,
          },
        ],
      },
      {
        id: 'fruits_3',
        title: 'Alimentos Orgânicos',
        xpReward: 10,
        exercises: [
          {
            id: 'fruits_ex7',
            type: EXERCISE_TYPES.COMPLETE_SENTENCE,
            question: 'O que caracteriza um vegetal orgânico?',
            options: ['Ser feito em impressora 3D', 'Ser cultivado sem agrotóxicos ou venenos', 'Ter formato perfeitamente igual', 'Não precisar de água'],
            correct: 1,
          },
          {
            id: 'fruits_ex8',
            type: EXERCISE_TYPES.TRUE_FALSE,
            question: 'Adubo feito com restos de cascas de ovo e banana é ótimo para orgânicos.',
            correct: true,
          },
          {
            id: 'fruits_ex9',
            type: EXERCISE_TYPES.COMPLETE_SENTENCE,
            question: 'O cultivo orgânico protege os insetos do bem e não polui o ___.',
            options: ['espaço', 'lençol freático', 'ar do deserto', 'plástico'],
            correct: 1,
          },
        ],
      },
      {
        id: 'fruits_4',
        title: 'Importância das Cores',
        xpReward: 10,
        exercises: [
          {
            id: 'fruits_ex10',
            type: EXERCISE_TYPES.COMPLETE_SENTENCE,
            question: 'Vegetais verdes escuros (como brócolis e espinafre) são ricos em qual nutriente?',
            options: ['Gordura', 'Ferro e vitaminas', 'Açúcar refinado', 'Sal'],
            correct: 1,
          },
          {
            id: 'fruits_ex11',
            type: EXERCISE_TYPES.TRUE_FALSE,
            question: 'Alimentos alaranjados (como cenoura e abóbora) fazem bem para a visão.',
            correct: true,
          },
          {
            id: 'fruits_ex12',
            type: EXERCISE_TYPES.COMPLETE_SENTENCE,
            question: 'Quanto mais ___ for o seu prato de salada, mais saudável ele será.',
            options: ['pesado', 'colorido', 'branco', 'quente'],
            correct: 1,
          },
        ],
      },
      {
        id: 'fruits_5',
        title: 'Evitando Desperdício',
        xpReward: 10,
        exercises: [
          {
            id: 'fruits_ex13',
            type: EXERCISE_TYPES.COMPLETE_SENTENCE,
            question: 'O que podemos fazer com frutas muito maduras que estão amassadas?',
            options: ['Jogar direto no lixo comum', 'Fazer sucos, geleias ou bolos', 'Guardar para sempre', 'Deixar fora da geladeira'],
            correct: 1,
          },
          {
            id: 'fruits_ex14',
            type: EXERCISE_TYPES.TRUE_FALSE,
            question: 'As cascas de alguns vegetais (como batata) possuem muitos nutrientes e podem ser comidas.',
            correct: true,
          },
          {
            id: 'fruits_ex15',
            type: EXERCISE_TYPES.COMPLETE_SENTENCE,
            question: 'Restos de vegetais que estragaram podem ir para a ___ virar adubo.',
            options: ['composteira', 'pia', 'lixeira reciclável', 'dispensa'],
            correct: 0,
          },
        ],
      },
      {
        id: 'fruits_6',
        title: 'Frutas em Santa Catarina',
        xpReward: 10,
        exercises: [
          {
            id: 'fruits_ex16',
            type: EXERCISE_TYPES.MULTIPLE_CHOICE,
            question: 'Algumas frutas nativas de Santa Catarina são:',
            options: [
              'Jabuticaba, pitanga, araçá, guabiroba e butiá',
              'Laranja, mamão, maçã e morango',
              'Uva, maracujá, manga e limão'
            ],
            correct: 0,
          },
          {
            id: 'fruits_ex17',
            type: EXERCISE_TYPES.MULTIPLE_CHOICE,
            question: 'Qual fruta nativa é rica em vitamina C?',
            options: ['Araçá', 'Laranja', 'Tangerina', 'Kiwi'],
            correct: 0,
          },
          {
            id: 'fruits_ex18',
            type: EXERCISE_TYPES.TRUE_FALSE,
            question: 'Santa Catarina é responsável pela metade da produção de maçã do Brasil.',
            correct: true,
          },
        ],
      },
    ],
  },
  preservation: {
    id: 'preservation',
    title: 'Preservação',
    icon: '🌍',
    color: '#1565C0',
    lessons: [
      {
        id: 'preservation_1',
        title: 'Cuidando da Água',
        xpReward: 10,
        exercises: [
          {
            id: 'preservation_ex1',
            type: EXERCISE_TYPES.COMPLETE_SENTENCE,
            question: 'Qual atitude ajuda a economizar água em casa?',
            options: ['Lavar a calçada com a mangueira', 'Fechar a torneira enquanto escova os dentes', 'Demorar 30 minutos no banho', 'Deixar vazamentos abertos'],
            correct: 1,
          },
          {
            id: 'preservation_ex2',
            type: EXERCISE_TYPES.TRUE_FALSE,
            question: 'Menos de 3% de toda a água da Terra é doce e própria para consumo.',
            correct: true,
          },
          {
            id: 'preservation_ex3',
            type: EXERCISE_TYPES.COMPLETE_SENTENCE,
            question: 'Jogar óleo de cozinha usado na pia polui milhares de litros de ___.',
            options: ['terra', 'água', 'ar', 'combustível'],
            correct: 1,
          },
        ],
      },
      {
        id: 'preservation_2',
        title: 'Protegendo Animais',
        xpReward: 10,
        exercises: [
          {
            id: 'preservation_ex4',
            type: EXERCISE_TYPES.COMPLETE_SENTENCE,
            question: 'O que acontece se uma espécie de animal for totalmente extinta?',
            options: ['Nada muda', 'Causa um desequilíbrio na cadeia alimentar', 'Outros animais comemoram', 'A floresta cresce mais rápido'],
            correct: 1,
          },
          {
            id: 'preservation_ex5',
            type: EXERCISE_TYPES.TRUE_FALSE,
            question: 'Alimentar animais silvestres na floresta com salgadinhos faz bem para eles.',
            correct: false,
          },
          {
            id: 'preservation_ex6',
            type: EXERCISE_TYPES.COMPLETE_SENTENCE,
            question: 'O mico-leão-dourado é um exemplo de animal que sofre com a perda de seu ___.',
            options: ['aquário', 'habitat natural', 'gaiola', 'deserto'],
            correct: 1,
          },
        ],
      },
      {
        id: 'preservation_3',
        title: 'Combate às Queimadas',
        xpReward: 10,
        exercises: [
          {
            id: 'preservation_ex7',
            type: EXERCISE_TYPES.COMPLETE_SENTENCE,
            question: 'Qual a principal causa humana de incêndios florestais no inverno?',
            options: ['Sol forte', 'Soltar balões e queimar lixo perto de matas', 'Cair folhas secas', 'Vento gelado'],
            correct: 1,
          },
          {
            id: 'preservation_ex8',
            type: EXERCISE_TYPES.TRUE_FALSE,
            question: 'A fumaça das queimadas faz mal para os pulmões dos animais e dos humanos.',
            correct: true,
          },
          {
            id: 'preservation_ex9',
            type: EXERCISE_TYPES.COMPLETE_SENTENCE,
            question: 'As florestas queimadas demoram muitos ___ para se recuperar.',
            options: ['dias', 'meses', 'anos', 'minutos'],
            correct: 2,
          },
        ],
      },
      {
        id: 'preservation_4',
        title: 'Unidades de Conservação',
        xpReward: 10,
        exercises: [
          {
            id: 'preservation_ex10',
            type: EXERCISE_TYPES.COMPLETE_SENTENCE,
            question: 'O que são Parques Nacionais?',
            options: ['Parques de diversão com montanha-russa', 'Áreas de terra protegidas por lei para salvar a natureza', 'Zoológicos urbanos', 'Condomínios fechados'],
            correct: 1,
          },
          {
            id: 'preservation_ex11',
            type: EXERCISE_TYPES.TRUE_FALSE,
            question: 'É permitido caçar e cortar árvores dentro de reservas ecológicas protegidas.',
            correct: false,
          },
          {
            id: 'preservation_ex12',
            type: EXERCISE_TYPES.COMPLETE_SENTENCE,
            question: 'Os fiscais ambientais ajudam a combater o desmatamento ___.',
            options: ['legal', 'ilegal', 'planejado', 'colorido'],
            correct: 1,
          },
        ],
      },
      {
        id: 'preservation_5',
        title: 'Poluição Zero',
        xpReward: 10,
        exercises: [
          {
            id: 'preservation_ex13',
            type: EXERCISE_TYPES.COMPLETE_SENTENCE,
            question: 'Onde devemos descartar pilhas e baterias velhas?',
            options: ['No lixo orgânico da cozinha', 'Em postos de coleta específicos para lixo eletrônico', 'No quintal', 'No rio'],
            correct: 1,
          },
          {
            id: 'preservation_ex14',
            type: EXERCISE_TYPES.TRUE_FALSE,
            question: 'Sacolas plásticas jogadas no mar podem matar tartarugas que as confundem com águas-vivas.',
            correct: true,
          },
          {
            id: 'preservation_ex15',
            type: EXERCISE_TYPES.COMPLETE_SENTENCE,
            question: 'Jogar lixo na rua entope bueiros e causa ___ nas cidades durante as chuvas.',
            options: ['seca', 'enchentes', 'neve', 'furacões'],
            correct: 1,
          },
        ],
      },
    ],
  },
  sustainability: {
    id: 'sustainability',
    title: 'Sustentabilidade',
    icon: '♻️',
    color: '#00897B',
    lessons: [
      {
        id: 'sustainability_1',
        title: 'Os 3 Rs da Natureza',
        xpReward: 10,
        exercises: [
          {
            id: 'sustainability_ex1',
            type: EXERCISE_TYPES.COMPLETE_SENTENCE,
            question: 'Quais são os 3 Rs da sustentabilidade?',
            options: ['Correr, Rir e Roubar', 'Reduzir, Reutilizar e Reciclar', 'Ralar, Rimar e Reter', 'Reler, Reter e Remar'],
            correct: 1,
          },
          {
            id: 'sustainability_ex2',
            type: EXERCISE_TYPES.TRUE_FALSE,
            question: 'Reduzir significa comprar menos coisas desnecessárias para gerar menos lixo.',
            correct: true,
          },
          {
            id: 'sustainability_ex3',
            type: EXERCISE_TYPES.COMPLETE_SENTENCE,
            question: 'Usar um pote de sorvete para guardar comida é um exemplo de ___.',
            options: ['reduzir', 'reutilizar', 'reciclar', 'desperdiçar'],
            correct: 1,
          },
        ],
      },
      {
        id: 'sustainability_2',
        title: 'Coleta Seletiva',
        xpReward: 10,
        exercises: [
          {
            id: 'sustainability_ex4',
            type: EXERCISE_TYPES.COMPLETE_SENTENCE,
            question: 'Qual material deve ser jogado na lixeira amarela?',
            options: ['Vidro', 'Metal', 'Papel', 'Plástico'],
            correct: 1,
          },
          {
            id: 'sustainability_ex5',
            type: EXERCISE_TYPES.TRUE_FALSE,
            question: 'A lixeira vermelha serve para descartar papéis de escritório.',
            correct: false, // Vermelha é Plástico
          },
          {
            id: 'sustainability_ex6',
            type: EXERCISE_TYPES.COMPLETE_SENTENCE,
            question: 'Garrafas e potes que quebram devem ir para a lixeira de cor ___.',
            options: ['azul', 'verde', 'amarela', 'cinza'],
            correct: 1, // Verde é Vidro
          },
        ],
      },
      {
        id: 'sustainability_3',
        title: 'Energias Limpas',
        xpReward: 10,
        exercises: [
          {
            id: 'sustainability_ex7',
            type: EXERCISE_TYPES.COMPLETE_SENTENCE,
            question: 'Qual dessas é uma fonte de energia renovável e limpa?',
            options: ['Carvão mineral', 'Energia solar (painéis que captam sol)', 'Petróleo', 'Óleo diesel'],
            correct: 1,
          },
          {
            id: 'sustainability_ex8',
            type: EXERCISE_TYPES.TRUE_FALSE,
            question: 'A energia eólica é gerada através da força do vento.',
            correct: true,
          },
          {
            id: 'sustainability_ex9',
            type: EXERCISE_TYPES.COMPLETE_SENTENCE,
            question: 'As energias limpas não emitem gases que causam o efeito ___.',
            options: ['estufa', 'dominó', 'sonoro', 'visual'],
            correct: 0,
          },
        ],
      },
      {
        id: 'sustainability_4',
        title: 'Tempo de Decomposição',
        xpReward: 10,
        exercises: [
          {
            id: 'sustainability_ex10',
            type: EXERCISE_TYPES.COMPLETE_SENTENCE,
            question: 'Quanto tempo uma garrafa de plástico demora para sumir na natureza?',
            options: ['2 meses', 'Mais de 400 anos', '1 ano', '50 anos'],
            correct: 1,
          },
          {
            id: 'sustainability_ex11',
            type: EXERCISE_TYPES.TRUE_FALSE,
            question: 'O papel se decompõe muito mais rápido na natureza do que o vidro.',
            correct: true,
          },
          {
            id: 'sustainability_ex12',
            type: EXERCISE_TYPES.COMPLETE_SENTENCE,
            question: 'O vidro é um material que pode demorar até ___ anos para se decompor.',
            options: ['100', '1000', 'indeterminado / milhares de', '5'],
            correct: 2,
          },
        ],
      },
      {
        id: 'sustainability_5',
        title: 'Consumo Consciente',
        xpReward: 10,
        exercises: [
          {
            id: 'sustainability_ex13',
            type: EXERCISE_TYPES.COMPLETE_SENTENCE,
            question: 'O que é uma "Ecobag"?',
            options: ['Uma mochila de couro', 'Uma sacola de pano reutilizável para compras', 'Uma sacola plástica descartável', 'Uma mala de viagem'],
            correct: 1,
          },
          {
            id: 'sustainability_ex14',
            type: EXERCISE_TYPES.TRUE_FALSE,
            question: 'Deixar lâmpadas acesas em cômodos vazios ajuda o meio ambiente.',
            correct: false,
          },
          {
            id: 'sustainability_ex15',
            type: EXERCISE_TYPES.COMPLETE_SENTENCE,
            question: 'Comprar produtos de produtores locais diminui a poluição do ___ de transporte.',
            options: ['navio', 'frete / caminhão', 'avião', 'trem'],
            correct: 1,
          },
        ],
      },
      {
        id: 'sustainability_6',
        title: 'Educação Ambiental',
        xpReward: 10,
        exercises: [
          {
            id: 'sustainability_ex16',
            type: EXERCISE_TYPES.MULTIPLE_CHOICE,
            question: 'Quantas árvores são poupadas se 1 tonelada de papel for reciclada?',
            options: ['Nenhuma', '1000 árvores', '1 árvore', 'Entre 14 e 17 árvores'],
            correct: 3,
          },
          {
            id: 'sustainability_ex17',
            type: EXERCISE_TYPES.MULTIPLE_CHOICE,
            question: 'Por que se ensina educação ambiental nas escolas?',
            options: [
              'Porque ela contribui para melhorar os hábitos sustentáveis das famílias e da comunidade',
              'Porque ela incentiva hábitos sedentários'
            ],
            correct: 0,
          },
          {
            id: 'sustainability_ex18',
            type: EXERCISE_TYPES.MULTIPLE_CHOICE,
            question: 'O que é consumo consciente?',
            options: [
              'Consumir tudo de uma única vez',
              'Nunca consumir nada',
              'Consumir com responsabilidade, pensando nos impactos ambientais, sociais e econômicos'
            ],
            correct: 2,
          },
        ],
      },
    ],
  },
};

export const getModules   = () => Object.values(LESSON_DATA);
export const getModule    = (id) => LESSON_DATA[id] || null;
export const getLessonById = (moduleId, lessonId) =>
  LESSON_DATA[moduleId]?.lessons.find(l => l.id === lessonId) || null;