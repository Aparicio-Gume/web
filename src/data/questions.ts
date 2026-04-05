export type QuestionImage = 'netflix' | 'flag' | 'emola';

export interface Question {
  id: number;
  image: QuestionImage;
  question: string;
  options: string[];
  reward: number;
}

export const questions: Question[] = [
  {
    id: 1,
    image: 'flag',
    question: 'Qual é a capital de Moçambique?',
    options: ['Beira', 'Nampula', 'Maputo', 'Manica'],
    reward: 16.88,
  },
  {
    id: 2,
    image: 'flag',
    question: 'Qual é a moeda oficial de Moçambique?',
    options: ['Rand', 'Metical', 'Dólar', 'Euro'],
    reward: 12.45,
  },
  {
    id: 3,
    image: 'netflix',
    question: 'Qual é o nome do CEO da Netflix?',
    options: ['Elon Musk', 'Reed Hastings', 'Jeff Bezos', 'Tim Cook'],
    reward: 10.52,
  },
  {
    id: 4,
    image: 'netflix',
    question: 'Em que ano a Netflix foi fundada?',
    options: ['1997', '2000', '2005', '2010'],
    reward: 11.90,
  },
  {
    id: 5,
    image: 'flag',
    question: 'Qual é o hino nacional de Moçambique?',
    options: ['Pátria Amada', 'Hino da Liberdade', 'Viva Moçambique', 'Terra Nossa'],
    reward: 13.53,
  },
  {
    id: 6,
    image: 'netflix',
    question: 'Qual é a cor principal da Netflix?',
    options: ['Azul', 'Verde', 'Vermelho', 'Amarelo'],
    reward: 10.09,
  },
  {
    id: 7,
    image: 'flag',
    question: 'Quantas províncias tem Moçambique?',
    options: ['8', '10', '11', '13'],
    reward: 15.38,
  },
  {
    id: 8,
    image: 'emola',
    question: 'Qual é o seu método de pagamento favorito?',
    options: ['M-pesa', 'E-mola', 'Cartão', 'PayPal'],
    reward: 13.30,
  },
  {
    id: 9,
    image: 'flag',
    question: 'Qual é a língua oficial de Moçambique?',
    options: ['Inglês', 'Português', 'Francês', 'Espanhol'],
    reward: 9.88,
  },
];

export const INITIAL_BALANCE = 50.00;
