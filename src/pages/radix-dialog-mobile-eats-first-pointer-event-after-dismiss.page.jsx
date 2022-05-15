import React from 'react'

import * as DialogPrimitive from '@radix-ui/react-dialog'
import Head from 'next/head'
import Link from 'next/link'
import SyntaxHighlighter from 'react-syntax-highlighter'

import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '../base/Dialog'

export default function RadixDialogMobileIssue() {
  const projectDir = process.env.NEXT_PUBLIC_PATH_BASE || ''
  const codeForFirstDialog = `// from this page
<Dialog>
  <DialogTrigger asChild>
    <button type="button">
      Tap Me, then Tap Me Again after dismissing the dialog
    </button>
  </DialogTrigger>
  <DialogContent>
    Now dismiss this dialog, then try tapping the earlier button again
  </DialogContent>
</Dialog>

// from Dialog.jsx
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
))`
  const codeForSecondDialog = `// from this page
<Dialog>
  <DialogTrigger asChild>
    <button type="button">
      Here is a second button whose pointer event also gets eaten
    </button>
  </DialogTrigger>
  <DialogPrimitive.Content style={{ /* ... */ }}>
    <DialogPrimitive.Close asChild>
      <button type="button">Dismiss</button>
    </DialogPrimitive.Close>
    Now dismiss this dialog, then try tapping the earlier button again
    </DialogPrimitive.Content>
</Dialog>`
  
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
            View the source code for this page&nbsp;
            <a href="https://github.com/just-learning-1/minimal-repros/blob/master/src/pages/radix-dialog-mobile-eats-first-pointer-event-after-dismiss.page.jsx">
              here
            </a>
          </li>
          <li>
            Open this page in a mobile browser or in Firefox with Touch Emulation enabled
          </li>
          <li>
            Tap the following button to open the Radix UI Dialog:
          </li>
          <li>
            <Dialog>
              <DialogTrigger asChild>
                <button type="button">
                  #1: First tap after dismiss is eaten
                </button>
              </DialogTrigger>
              <DialogContent>
                Now dismiss this dialog, then try tapping the earlier button again
              </DialogContent>
            </Dialog>
          </li>
          <li>
            After dismissing the dialog, try tapping the same (or a different) button again
          </li>
          <li>
            <strong>Result: </strong>
            The first tap after dismissing the dialog is stolen!
          </li>
          <li>
            <strong>Investigation: </strong>
            I discovered the following is still set on the body tag after dismiss until the next tap is received:
            <br />
            <code>{`<body style="pointer-events: none;">`}</code>
          </li>
          <li>
            <strong>However! </strong>
            If I change the implementation of
            <strong> DialogContent </strong>
            from this:
          </li>
          <li>
            <SyntaxHighlighter language="javascript">
              {codeForFirstDialog}
            </SyntaxHighlighter>
          </li>
          <li>
            To this:
          </li>
          <li>
            <SyntaxHighlighter language="javascript">
              {codeForSecondDialog}
            </SyntaxHighlighter>
          </li>
          <li>
            Like so:
            <br />
            <Dialog>
              <DialogTrigger asChild>
                <button type="button">
                  #2: Stolen tap is fixed! But I do not understand why
                </button>
              </DialogTrigger>
              <DialogPrimitive.Content
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '12px',
                  boxShadow: 'hsl(187 22% 7% / 35%) 0px 10px 38px -10px,'
                            + 'hsl(187 22% 7% / 20%) 0px 10px 20px -15px',
                  height: 'auto',
                  left: '50%',
                  padding: '24px',
                  position: 'fixed',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  maxWidth: '85vw',
                  width: '75%',
                  zIndex: '101',
                }}
              >
                <DialogPrimitive.Close asChild>
                  <button type="button" display="block">Dismiss</button>
                </DialogPrimitive.Close>
                <div>
                  Now dismiss this dialog, then try tapping the earlier button again
                </div>
              </DialogPrimitive.Content>
            </Dialog>

          </li>
          <li>
            <strong>The problem goes away! </strong>
            The first tap after dismiss is not invalidated.
          </li>
          <li>
            Only difference is the second version swaps a
            <code> React.forwardRef </code>
            styled version of the Dialog Content element with the
            <code> DialogPrimitive.Content </code>
            element directly
          </li>
          <li>
            The curious thing is, the implementation of the first dialog is modeled almost identically to the
            <strong> Radix UI Design System Dialog. </strong>
            Compare the two Dialog implementations:
            <ol>
              <ol>
                <a href="https://github.com/radix-ui/design-system/blob/master/components/Dialog.tsx">
                  radix-ui/design-system/.../Dialog.tsx
                </a>
              </ol>
              <ol>
                <a href="https://github.com/just-learning-1/minimal-repros/blob/master/src/base/Dialog.jsx">
                  just-learning-1/minimal-repros/.../Dialog.jsx
                </a>
              </ol>
            </ol>
          </li>
          <li>
            I am new to coding, and I cannot for the life of me figure out why this is happening :(
          </li>
        </ol>
      </div>
    </>
  )
}
