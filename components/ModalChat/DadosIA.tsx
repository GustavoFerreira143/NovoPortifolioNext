import React from 'react'
import { PorterStemmerPt } from 'natural'
import { useState } from 'react';

export function DadosIA() {

const [input, setInput] = useState("");

let dadosIA = [];

// Carrega o arquivo JSON com perguntas e respostas
fetch('/conversas.json')
  .then(res => res.json())
  .then(json => {
    dadosIA = json;
  });

const stopwords = ["o", "a", "de", "que", "é", "em", "e", "para", "com", "como", "você", "seu", "sua"];

function normalizar(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // remover acentos
    .replace(/[^\w\s]/gi, "") // remover pontuação
    .split(" ")
    .filter(p => !stopwords.includes(p)) // remover palavras irrelevantes
    .map(p => p.length > 5 ? p.slice(0, 5) : p) // pseudo-stemming
    .join(" ");
}

// Similaridade por palavras em comum
function calcularSimilaridadePalavras(a, b) {
  const palavrasA = normalizar(a).split(" ");
  const palavrasB = normalizar(b).split(" ");
  const comuns = palavrasA.filter(p => palavrasB.includes(p));
  return comuns.length / Math.max(palavrasA.length, palavrasB.length);
}

// Distância de Levenshtein
function distanciaLevenshtein(a, b) {
  const m = a.length;
  const n = b.length;
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const custo = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + custo
      );
    }
  }

  return dp[m][n];
}

function similaridadeLevenshtein(a, b) {
  const normA = normalizar(a);
  const normB = normalizar(b);
  const dist = distanciaLevenshtein(normA, normB);
  const maior = Math.max(normA.length, normB.length);
  return 1 - dist / maior;
}

// Combinação ponderada dos métodos
function pontuacaoFinal(userInput, baseInput) {
  const simPalavras = calcularSimilaridadePalavras(userInput, baseInput);
  const simLevenshtein = similaridadeLevenshtein(userInput, baseInput);

  // Peso ajustável entre métodos
  return (0.6 * simPalavras) + (0.4 * simLevenshtein);
}

// Função principal de resposta
function obterResposta(entradaUsuario) {
  let melhorMatch = null;
  let melhorScore = 0;

  for (let item of dadosIA) {
    const score = pontuacaoFinal(entradaUsuario, item.input);
    if (score > melhorScore) {
      melhorScore = score;
      melhorMatch = item;
    }
  }

  if (melhorScore > 0.3) {
    return melhorMatch.output;
  } else {
    return "Putz, essa não sei responder, gostária de perguntar outra coisa?";
  }
}
    return { obterResposta };
}


