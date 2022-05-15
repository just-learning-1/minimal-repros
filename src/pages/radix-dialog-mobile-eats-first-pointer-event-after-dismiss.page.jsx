import React from 'react'

import * as DialogPrimitive from '@radix-ui/react-dialog'
import Head from 'next/head'
import Link from 'next/link'

import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '../base/Dialog'

export default function RadixDialogMobileIssue() {
  const projectDir = process.env.PATH_BASE || ''
  
  return (
    <>
      <Head>
        <title>
          Issue: Radix Dialog on Mobile eats first pointer event after dismiss
        </title>
        <meta
          name="description"
          content="Issue: Radix Dialog on Mobile eats first pointer event after dismiss"
        />
      </Head>
      <div>
        <Link
          href="/"
          as={`${projectDir}/`}
        >
          <a>Back to Home</a>
        </Link>
        <h2>Issue: Radix Dialog on Mobile eats first pointer event after dismiss</h2>
        <ol>
          <li>
            In a mobile browser, or in Firefox with Touch Emulation enabled,
            click the following button to open the Radix UI Dialog.
          </li>
          <li>
            <DialogPrimitive.Root>
              <DialogPrimitive.Trigger asChild>
                <button type="button">
                  Tap Me, then Tap Me again after dismissing the dialog
                </button>
              </DialogPrimitive.Trigger>
              <DialogPrimitive.Portal>
                <DialogPrimitive.Overlay
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    bottom: 0,
                    left: 0,
                    position: 'fixed',
                    right: 0,
                    top: 0,
                    zIndex: '101',
                  }}
                />
                <DialogPrimitive.Content
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '12px',
                    boxShadow: 'hsl(187 22% 7% / 35%) 0px 10px 38px -10px,'
                              + 'hsl(187 22% 7% / 20%) 0px 10px 20px -15px',
                    height: 'auto',
                    left: '50%',
                    position: 'fixed',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    maxWidth: '85vw',
                    width: '75%',
                    zIndex: '101',
                  }}
                >
                  <DialogPrimitive.Close>Dismiss</DialogPrimitive.Close>
                  <DialogPrimitive.Description>
                    Now dismiss this dialog, then try tapping the earlier button again
                  </DialogPrimitive.Description>
                </DialogPrimitive.Content>
              </DialogPrimitive.Portal>
            </DialogPrimitive.Root>
          </li>
          <li>
            <strong>Result: </strong>
            The first tap on any interactive element on the page gets eaten after dialog dismiss.
          </li>
          <li>
            <strong>Expected: </strong>
            Interactive elements should be interactable right away.
          </li>
          <li>
            <Dialog>
              <DialogTrigger asChild>
                <button type="button">
                  Here is a second button whose pointer event also gets eaten
                </button>
              </DialogTrigger>
              <DialogContent>
                Now dismiss this dialog, then try tapping the earlier button again
              </DialogContent>
            </Dialog>
          </li>
        </ol>
      </div>
    </>
  )
}
