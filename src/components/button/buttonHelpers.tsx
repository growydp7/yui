const ButtonTypes = ['default', 'primary', 'ghost', 'dashed', 'link', 'text'] as const
export type ButtonType = typeof ButtonTypes[number]