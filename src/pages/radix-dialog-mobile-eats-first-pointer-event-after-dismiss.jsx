import React from 'react'

import * as Dialog from '@radix-ui/react-dialog'
import Head from 'next/head'
import Link from 'next/link'

export default function RadixDialogMobileIssue() {
  const projectDir = '/minimal-repros'
  
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
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <button type="button">
                  Tap Me, then Tap Me again after dismissing the dialog
                </button>
              </Dialog.Trigger>
              <Dialog.Content>
                <Dialog.Description>
                  Now dismiss this dialog, then try tapping the earlier button again
                </Dialog.Description>
              </Dialog.Content>
            </Dialog.Root>
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
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <button type="button">
                  Here is a second button whose pointer event also gets eaten
                </button>
              </Dialog.Trigger>
              <Dialog.Content>
                <Dialog.Description>
                  Now dismiss this dialog, then try tapping the earlier button again
                </Dialog.Description>
              </Dialog.Content>
            </Dialog.Root>
          </li>
        </ol>
      </div>
    </>
  )
}
