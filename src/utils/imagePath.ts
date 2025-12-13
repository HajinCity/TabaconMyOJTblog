/**
 * Get the correct image path for both development and production
 * Uses Vite's BASE_URL which is automatically set based on vite.config.ts
 */
export const getImagePath = (path: string): string => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  // Combine BASE_URL with the path
  return `${import.meta.env.BASE_URL}${cleanPath}`;
};
