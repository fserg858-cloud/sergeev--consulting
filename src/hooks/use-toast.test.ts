import { expect, test, describe, mock } from "bun:test"

// Mock dependencies since they are missing in the environment
mock.module("react", () => ({
  useState: (initial: any) => [initial, () => {}],
  useEffect: () => {},
}))

mock.module("@/components/ui/toast", () => ({}))

import { reducer, TOAST_LIMIT } from "./use-toast"

describe("use-toast reducer", () => {
  const initialState = { toasts: [] }

  test("ADD_TOAST adds a toast and respects TOAST_LIMIT", () => {
    const toast1 = { id: "1", title: "Toast 1", open: true } as any
    const action1 = { type: "ADD_TOAST", toast: toast1 } as any

    let state = reducer(initialState, action1)
    expect(state.toasts).toHaveLength(1)
    expect(state.toasts[0]).toEqual(toast1)

    const toast2 = { id: "2", title: "Toast 2", open: true } as any
    const action2 = { type: "ADD_TOAST", toast: toast2 } as any

    state = reducer(state, action2)
    expect(state.toasts).toHaveLength(TOAST_LIMIT)
    expect(state.toasts[0]).toEqual(toast2)
  })

  test("UPDATE_TOAST updates an existing toast", () => {
    const toast1 = { id: "1", title: "Toast 1", open: true } as any
    const state = { toasts: [toast1] }

    const action = {
      type: "UPDATE_TOAST",
      toast: { id: "1", title: "Updated Toast 1" }
    } as any

    const newState = reducer(state, action)
    expect(newState.toasts[0].title).toBe("Updated Toast 1")
    expect(newState.toasts[0].open).toBe(true)
  })

  test("DISMISS_TOAST sets open to false for a specific toast", () => {
    const toast1 = { id: "1", title: "Toast 1", open: true } as any
    const state = { toasts: [toast1] }

    const action = { type: "DISMISS_TOAST", toastId: "1" } as any

    const newState = reducer(state, action)
    expect(newState.toasts[0].open).toBe(false)
  })

  test("DISMISS_TOAST sets open to false for all toasts when toastId is undefined", () => {
    const toast1 = { id: "1", title: "Toast 1", open: true } as any
    const toast2 = { id: "2", title: "Toast 2", open: true } as any
    const state = { toasts: [toast1, toast2] }

    const action = { type: "DISMISS_TOAST" } as any

    const newState = reducer(state, action)
    expect(newState.toasts[0].open).toBe(false)
    expect(newState.toasts[1].open).toBe(false)
  })

  test("REMOVE_TOAST removes a specific toast", () => {
    const toast1 = { id: "1", title: "Toast 1", open: true } as any
    const state = { toasts: [toast1] }

    const action = { type: "REMOVE_TOAST", toastId: "1" } as any

    const newState = reducer(state, action)
    expect(newState.toasts).toHaveLength(0)
  })

  test("REMOVE_TOAST removes all toasts when toastId is undefined", () => {
    const toast1 = { id: "1", title: "Toast 1", open: true } as any
    const toast2 = { id: "2", title: "Toast 2", open: true } as any
    const state = { toasts: [toast1, toast2] }

    const action = { type: "REMOVE_TOAST" } as any

    const newState = reducer(state, action)
    expect(newState.toasts).toHaveLength(0)
  })
})
