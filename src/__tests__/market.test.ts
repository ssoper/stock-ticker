import { describe, expect, test } from '@jest/globals';
import { DateTime } from 'luxon'
import { isHeatMapAvailable } from "../market";

const zone = 'America/New_York';

const getRandomInt = (min: number, max: number): number => {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min) + min);
  }

describe('market heatmap', () => {
    test('available', () => {
        const hour = getRandomInt(10, 18);
        const current = DateTime.local().setZone(zone).set({ hour })
        expect(isHeatMapAvailable(current)).toBe(true);
    })

    test('premarket', () => {
        const hour = getRandomInt(1, 9);
        const current = DateTime.local().setZone(zone).set({ hour })
        expect(isHeatMapAvailable(current)).toBe(false);
    })

    test('after hours', () => {
        const hour = getRandomInt(18, 24);
        const current = DateTime.local().setZone(zone).set({ hour })
        expect(isHeatMapAvailable(current)).toBe(false);
    })
})