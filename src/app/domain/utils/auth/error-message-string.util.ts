import { MESSAGE_PREFIX_LENGTH, PATTERN_NOT_FOUND } from '@domain';
import { errorMapTranslatedUtil } from './error-map-translated.util';

export function errorMesaggeStringUtil(error: unknown): string {
  const mapError: Error =
    typeof error === 'string' ? new Error(error) : errorMapTranslatedUtil(error);

  let message: string = mapError.message;
  const patternIndex: number = message.lastIndexOf(': ');

  if (patternIndex !== PATTERN_NOT_FOUND) {
    message = message.substring(patternIndex + MESSAGE_PREFIX_LENGTH);
  }

  return message;
}