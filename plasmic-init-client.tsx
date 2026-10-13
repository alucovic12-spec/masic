'use client'

import type { ComponentProps } from 'react'
import { PlasmicRootProvider } from '@plasmicapp/loader-nextjs'
import { PLASMIC } from './plasmic-init'

export function ClientPlasmicRootProvider(
  props: Omit<ComponentProps<typeof PlasmicRootProvider>, 'loader'>
) {
  return <PlasmicRootProvider loader={PLASMIC} {...props} />
}
