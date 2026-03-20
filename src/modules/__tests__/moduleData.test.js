import { describe, it, expect } from 'vitest'
import { modules, getModulesForCourse, getModuleById, getModulesByDay } from '../moduleData'

describe('moduleData', () => {
  it('exports a non-empty modules array', () => {
    expect(Array.isArray(modules)).toBe(true)
    expect(modules.length).toBeGreaterThan(0)
  })

  it('every module has required fields', () => {
    modules.forEach((m) => {
      expect(m).toHaveProperty('id')
      expect(m).toHaveProperty('code')
      expect(m).toHaveProperty('title')
      expect(m).toHaveProperty('courseTypes')
      expect(m).toHaveProperty('dayNumber')
      expect(m).toHaveProperty('sequence')
      expect(Array.isArray(m.courseTypes)).toBe(true)
      expect(m.courseTypes.length).toBeGreaterThan(0)
    })
  })

  it('has no duplicate module IDs', () => {
    const ids = modules.map((m) => m.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  describe('getModulesForCourse', () => {
    it('returns only full course modules for "full"', () => {
      const fullModules = getModulesForCourse('full')
      fullModules.forEach((m) => {
        expect(m.courseTypes).toContain('full')
      })
      expect(fullModules.length).toBeGreaterThan(0)
    })

    it('returns only refresher modules for "refresher"', () => {
      const refresherModules = getModulesForCourse('refresher')
      refresherModules.forEach((m) => {
        expect(m.courseTypes).toContain('refresher')
      })
      expect(refresherModules.length).toBeGreaterThan(0)
    })

    it('returns modules sorted by dayNumber then sequence', () => {
      const sorted = getModulesForCourse('full')
      for (let i = 1; i < sorted.length; i++) {
        const prev = sorted[i - 1]
        const curr = sorted[i]
        if (prev.dayNumber === curr.dayNumber) {
          expect(curr.sequence).toBeGreaterThanOrEqual(prev.sequence)
        } else {
          expect(curr.dayNumber).toBeGreaterThanOrEqual(prev.dayNumber)
        }
      }
    })
  })

  describe('getModuleById', () => {
    it('returns a module when found', () => {
      const mod = getModuleById('O1_1')
      expect(mod).not.toBeNull()
      expect(mod.id).toBe('O1_1')
      expect(mod.title).toBe('Physiology Review')
    })

    it('returns null for unknown ID', () => {
      expect(getModuleById('NONEXISTENT')).toBeNull()
    })
  })

  describe('getModulesByDay', () => {
    it('groups modules by day label', () => {
      const grouped = getModulesByDay('full')
      expect(grouped).toHaveProperty('Monday')
      expect(Array.isArray(grouped['Monday'])).toBe(true)
      expect(grouped['Monday'].length).toBeGreaterThan(0)
    })
  })
})
