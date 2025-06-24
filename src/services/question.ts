export type Quizz={
  title: string;
  questions: {
    id: number;
    question: string;
    image: string;
    options: {
      id: number;
      name: string;
      alias: string;
    }[];
  }[];
  results: {
    [key: string]: string;
  };
}

export type Results = {
    [key: string]: string;
}
