import { InicioSesionParametersEntity, InicioSesionResponseEntity } from "@domain";

/**
 * Interfaz para el adaptador encargado de manejar el inicio de sesión.
 *
 * Define el contrato que cualquier adaptador de autenticación debe cumplir
 * para realizar el proceso de inicio de sesión en el sistema.
 *
 * @interface IInicioSesionAdapter
 */
export abstract class IInicioSesionAdapter {
  /**
   * Inicia sesión con las credenciales del usuario.
   *
   * @async
   * @param {InicioSesionParametersEntity} params - Credenciales del usuario.
   * @param {string} params.email - Correo electrónico del usuario.
   * @param {string} params.password - Contraseña del usuario.
   *
   * @returns {Promise<InicioSesionResponseEntity>} Respuesta con el resultado del inicio de sesión.
   *
   * @throws {Error} Si falla el inicio de sesión.
   */
  abstract iniciarSesion(
    params: InicioSesionParametersEntity,
  ): Promise<InicioSesionResponseEntity>;
}