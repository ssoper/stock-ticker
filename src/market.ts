import { DateTime } from 'luxon'

const zone = 'America/New_York'

/**
 * @param current
 * @returns boolean
 */
export const isHeatMapAvailable = (current: DateTime = DateTime.local().setZone(zone)): boolean => {
  const opening = DateTime.local().setZone(zone).set({ hour: 9, minute: 45 })
  const closing = DateTime.local().setZone(zone).set({ hour: 17, minute: 59 })

  return ((current > opening) && (current < closing))
}
