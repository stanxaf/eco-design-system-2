/**
 * Feature flags for the application
 *
 * These flags allow us to enable/disable features across the application
 * without removing code, making it easier to manage feature rollouts and
 * troubleshoot issues.
 */

/**
 * Global Search Feature Flag
 *
 * When disabled, the global search functionality will be completely disabled
 * across the application. This includes:
 * - GlobalSearchProvider and GlobalSearchDialog components
 * - useGlobalSearch hook usage
 * - Keyboard shortcuts (⌘K)
 * - Search input interactions
 *
 * @default false - Disabled for v0 compatibility
 */
export const ENABLE_GLOBAL_SEARCH = false;
