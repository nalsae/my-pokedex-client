'use client';

import { ApolloProvider } from '@apollo/client';
import client from '@/api/client';
import { Header } from '@/components';

export default function SearchResultLayout({
  children,
  cards,
}: {
  children: React.ReactNode;
  cards: React.ReactNode;
}) {
  return (
    <ApolloProvider client={client}>
      <Header />
      <div className="container-page">
        <h1 className="sr-only">My Pokedex</h1>
        {children}
        {cards}
      </div>
    </ApolloProvider>
  );
}
