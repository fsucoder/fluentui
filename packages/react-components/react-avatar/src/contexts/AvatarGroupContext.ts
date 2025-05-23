import { createContext } from '@fluentui/react-context-selector';
import type { Context } from '@fluentui/react-context-selector';
import type { AvatarGroupContextValue } from './AvatarGroupContext.types';

/**
 * AvatarGroupContext is provided by AvatarGroup, and is consumed by Avatar to determine default values of some props.
 */
export const AvatarGroupContext: Context<AvatarGroupContextValue> = createContext({});
