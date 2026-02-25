import { SignInOutput } from 'aws-amplify/auth';

export interface InicioSesionResponseEntity {
  success: boolean;
  SignInOutput: SignInOutput;
}