import { IInicioSesionAdapter } from '@application';
import {
  errorMesaggeStringUtil,
  InicioSesionParametersEntity,
  InicioSesionResponseEntity,
  SignUpStepEnum
} from '@domain';
import { signIn, SignInOutput, confirmSignUp, ConfirmSignUpInput, ConfirmSignUpOutput } from 'aws-amplify/auth';

/**
 * InicioSesionAdapter
 *
 * Adaptador de infraestructura responsable del proceso de inicio de sesión
 * utilizando AWS Amplify Auth.
 *
 * Este adaptador:
 * - Traduce las entidades de dominio a parámetros compatibles con AWS Amplify.
 * - Ejecuta la autenticación.
 * - Normaliza y propaga errores de forma controlada.
 *
 * @class InicioSesionAdapter
 * @implements {IInicioSesionAdapter}
 */
export class InicioSesionAdapter implements IInicioSesionAdapter {

  /**
   * Inicia sesión con las credenciales del usuario.
   *
   * @async
   * @param {InicioSesionParametersEntity} params
   * Entidad de dominio que contiene las credenciales del usuario.
   *
   * @returns {Promise<InicioSesionResponseEntity>}
   * Entidad de dominio con el resultado del inicio de sesión.
   *
   * @throws {Error}
   * Error normalizado con mensaje legible para la aplicación.
   */
  public async iniciarSesion(
    params: InicioSesionParametersEntity,
  ): Promise<InicioSesionResponseEntity> {
    try {
      const response = await this.signInWithCredentials(params);
      return this.buildSuccessResponse(response);
    } catch (error: unknown) {
      this.handleError(error);
    }
  }

  /**
 * Confirma el registro de un usuario con su código de verificación.
 * 
 * @param params Contiene username y confirmationCode.
 * @returns ConfirmSignUpOutput si fue exitoso, undefined si falla.
 * @throws Error con el mensaje de AWS Amplify en caso de fallo.
 */
  async confirmarSignUp({
    username,
    confirmationCode,
  }: ConfirmSignUpInput): Promise<ConfirmSignUpOutput | undefined> {
    try {
      return confirmSignUp({
        username,
        confirmationCode,
      });
    } catch (error: unknown) {
      this.handleError(error);
    }
  }

  /**
   * Ejecuta el proceso de autenticación en AWS Amplify.
   *
   * @private
   * @async
   * @param {InicioSesionParametersEntity} params
   * Credenciales del usuario (email y contraseña).
   *
   * @returns {Promise<SignInOutput>}
   * Resultado de la autenticación devuelto por AWS Amplify.
   */
  private async signInWithCredentials(
    params: InicioSesionParametersEntity,
  ): Promise<SignInOutput> {
    const { email, password } = params;

    return signIn({
      username: email,
      password,
      options: {
        authFlowType: SignUpStepEnum.USER_PASSWORD_AUTH,
      },
    });
  }

  /**
   * Construye la respuesta de éxito del inicio de sesión.
   *
   * @private
   * @param {SignInOutput} response
   * Respuesta devuelta por AWS Amplify tras una autenticación exitosa.
   *
   * @returns {InicioSesionResponseEntity}
   * Entidad de dominio con la información del inicio de sesión.
   */
  private buildSuccessResponse(
    response: SignInOutput,
  ): InicioSesionResponseEntity {
    return {
      success: true,
      SignInOutput: response,
    };
  }

  /**
   * Maneja y normaliza los errores producidos durante el inicio de sesión.
   *
   * @private
   * @param {unknown} error
   * Error original capturado durante el proceso.
   *
   * @throws {Error}
   * Error normalizado con mensaje legible.
   *
   * @returns {never}
   */
  private handleError(error: unknown): never {
    const mensaje: string = errorMesaggeStringUtil(error);
    throw new Error(mensaje);
  }
}