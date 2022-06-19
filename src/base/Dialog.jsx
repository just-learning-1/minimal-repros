/* eslint-disable max-len */
//
// Dialog
//
import React from 'react'

import * as DialogPrimitive from '@radix-ui/react-dialog'

import { keyframes, styled } from '../../stitches.config'

export function Dialog({ children, ...props }) {
  return (
    <DialogRoot {...props}>
      <Overlay />
      {children}
    </DialogRoot>
  )
}

const DialogRoot = styled(DialogPrimitive.Root, {})

const fadeIn = keyframes({ from: { opacity: '0' }, to: { opacity: '1' } })
const fadeOut = keyframes({ from: { opacity: '1' }, to: { opacity: '0' } })
const Overlay = styled(DialogPrimitive.Overlay, {
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  bottom: 0,
  left: 0,
  position: 'fixed',
  right: 0,
  top: 0,
  zIndex: '1000',
  '&[data-state="open"]': {
    animation: `${fadeIn} 500ms cubic-bezier(0.22, 1, 0.36, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${fadeOut} 500ms cubic-bezier(0.22, 1, 0.36, 1)`,
  },
})

export const DialogContent = React.forwardRef(({ children, ...props }, forwardedRef) => (
  <DialogContentContainer {...props} ref={forwardedRef}>
    <DialogHeaderBar>
      <CloseButton aria-label="close" asChild>
        <button type="button">
          Dismiss
        </button>
      </CloseButton>
    </DialogHeaderBar>
    <DialogContentBody>
      {children}
    </DialogContentBody>
  </DialogContentContainer>
))
DialogContent.displayName = 'DialogContent'

const slideIn = keyframes({
  from: { transform: 'translate3d(0%,100%,0)' },
  to: { transform: 'translate3d(0%,0%,0)' },
})
const slideOut = keyframes({
  from: { transform: 'translate3d(0%,0%,0)' },
  to: { transform: 'translate3d(0%,100%,0)' },
})
const slideInDesktop = keyframes({
  from: { transform: 'translate3d(-50%,50%,0)' },
  to: { transform: 'translate3d(-50%,-50%,0)' },
})
const slideOutDesktop = keyframes({
  from: { transform: 'translate3d(-50%,-50%,0)' },
  to: { transform: 'translate3d(-50%,50%,0)' },
})
const DialogContentContainer = styled(DialogPrimitive.Content, {
  backgroundColor: '#ffffff',
  borderRadius: '0px',
  boxShadow: 'hsl(187 22% 7% / 35%) 0px 10px 38px -10px,'
             + 'hsl(187 22% 7% / 20%) 0px 10px 20px -15px',
  height: '100vh',
  left: '0%',
  maxWidth: '100vw',
  minWidth: '200px',
  position: 'fixed',
  top: '0%',
  width: '100%',
  willChange: 'transform',
  zIndex: '1001',
  '&:focus': { outline: 'none' },
  '&[data-state="open"]': {
    animation: `${slideIn} 500ms cubic-bezier(0.22, 1, 0.36, 1),`
               + `${fadeIn} 500ms cubic-bezier(0.22, 1, 0.36, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${slideOut} 500ms cubic-bezier(0.22, 1, 0.36, 1),`
               + `${fadeOut} 300ms cubic-bezier(0.22, 1, 0.36, 1)`,
  },

  '@desktop': {
    borderRadius: '12px',
    height: 'auto',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '85vw',
    width: '75%',
    '&[data-state="open"]': {
      animation: `${slideInDesktop} 500ms cubic-bezier(0.22, 1, 0.36, 1),`
                + `${fadeIn} 500ms cubic-bezier(0.22, 1, 0.36, 1)`,
    },
    '&[data-state="closed"]': {
      animation: `${slideOutDesktop} 500ms cubic-bezier(0.22, 1, 0.36, 1),`
                + `${fadeOut} 300ms cubic-bezier(0.22, 1, 0.36, 1)`,
    },
  },
})

const DialogHeaderBar = styled('div', {
  height: '24px',
  padding: '$dialogPadding',
  position: 'relative',
  width: 'auto',
})

const DialogContentBody = styled('div', {
  $$headerHeight: 'calc($space$iconLength + ($space$dialogPadding * 2))',
  maxHeight: 'calc(100vh - $$headerHeight)',
  overflow: 'scroll',
  paddingBottom: '$dialogPadding',
  paddingX: '$space$dialogPadding',
  position: 'relative',
  width: 'auto',
  '@desktop': {
    maxHeight: 'calc(85vh - $$headerHeight)',
  },
})

const CloseButton = styled(DialogPrimitive.Close, {
  position: 'relative',
})

export const DialogClose = DialogPrimitive.Close
export const DialogDescription = DialogPrimitive.Description
export const DialogTitle = DialogPrimitive.Title
export const DialogTrigger = DialogPrimitive.Trigger
