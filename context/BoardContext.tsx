import { createContext, useContext, useState } from "react";

export const boardContext = createContext<any>([{}, () => {}]);

export function BoardContextProvider({ children }: { children: any }) {

  const [board, setBoard] = useState<{
    id: string;
    name: string;
    description?: string;
  }>();

  const [cards, setCards] = useState<
    {
      title: string;
      description: string;
      tasks: [string];
    }[]
  >();

  return (
    <boardContext.Provider
      value={{ board: [board, setBoard], cards: [cards, setCards] }}
    >
      {children}
    </boardContext.Provider>
  );
}

export function useAppContext() {
  return useContext(boardContext);
}
