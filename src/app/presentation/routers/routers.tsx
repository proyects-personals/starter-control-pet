import React from 'react';
import RouterOnboarding from './router-onboarding';

const Routes: React.FC = () => {
  // Aquí es donde luego manejarás la lógica de Auth
  return <RouterOnboarding />;
};

// React.memo es excelente para evitar re-renders innecesarios en la navegación
export default React.memo(Routes);