import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'

let darkModeStore = (set) => ({
  dark: false,
  toggleDarkMode: () => set((state) => ({ dark: !state.dark })),
})

let modalStore = (set) => ({
  isModalOpen: false,
  toggleModalState: () => set((state) => ({ isModalOpen: !state.isModalOpen }))
})

modalStore = devtools(modalStore)

darkModeStore = devtools(darkModeStore)
darkModeStore = persist(darkModeStore, { name: 'darkmode_setting'})

export const useModalStore = create(modalStore)
export const useDarkModeStore = create(darkModeStore)