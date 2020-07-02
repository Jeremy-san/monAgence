export interface Property {
  title: string;
  category: string;
  surface: string;
  rooms: string;
  description?: string; // il indique qu'il n'est pas obligatoire
  price: string;
  sold: boolean;
}
