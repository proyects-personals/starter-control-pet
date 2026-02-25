import React from 'react';
import RouterOnboarding from './router-onboarding';


const Routes: React.FC = () => {

//   if (isLoading) {
//     return <LoadingFull />;
//   }

//   if (isAuthenticated) {
//     return <AuthRoutes />;
//   }

  return <RouterOnboarding />;
};

export default React.memo(Routes);