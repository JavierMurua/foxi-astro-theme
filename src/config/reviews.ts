// src/types/reviews.ts

export interface Review {
    "foto de perfil": string;
    "Nombre": string;
    "Fecha": string;
    "Número de estrellas": number;
    "Reseña": string | null; // Puede ser string o null
  }