import React from 'react'

import Head from 'next/head'
import Link from 'next/link'

import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '../base/Dialog'

export default function RadixDialogMobileIssue() {
  const projectDir = process.env.NEXT_PUBLIC_PATH_BASE || ''
  
  return (
    <>
      <Head>
        <title>
          Issue: Radix Dialog in mobile Safari iOS 15 jumps on scroll when address bar height animates
        </title>
        <meta
          name="description"
          content="Issue: Radix Dialog in mobile Safari iOS 15 jumps on scroll when address bar height animates"
        />
      </Head>
      <div>
        <Link
          href="/"
          as={`${projectDir}/`}
        >
          <a>Back to Home</a>
        </Link>
        <h2>Issue: Radix Dialog in mobile Safari iOS 15 jumps on scroll when address bar height animates</h2>
        <ol>
          <li>
            (View the source code for this page&nbsp;
            <a href="https://github.com/just-learning-1/minimal-repros/blob/master/src/pages/radix-dialog-mobile-safari-15-jumps-on-scroll.page.jsx" target="_blank" rel="noopener noreferrer">
              here
            </a>
            )
          </li>
          <li>
            Open this page in mobile Safari running iOS 15+
          </li>
          <li>
            Tap the following button to open the Radix UI Dialog, scroll up and down, and observe the bottom as the Safari address bar height animates:
          </li>
          <li>
            <Dialog>
              <DialogTrigger asChild>
                <button type="button">
                  Tap to open dialog
                </button>
              </DialogTrigger>
              <DialogContent>
                <strong>Instructions: </strong>
                Swipe in this dialog up and down, and observe the bottom as the Safari address bar height animates
                <br />
                <br />
                <strong>Observed: </strong>
                <ul>
                  <li>Height of this dialog &quot;jumps&quot; when the Safari address bar height shrinks down during a swipe up. That is, content beneath the dialog is visible during the address bar animation, when it should not be.</li>
                </ul>
                <br />
                <strong>Important notes:</strong>
                <ul>
                  <li>Happens when the dialog&apos;s contents does not overflow past the viewportal height, but the page beneath&apos;s contents does; the &quot;scrolling&quot; when the dialog is open is of the page underneath</li>
                  <li>Effect is worse when a button on a fixed bottom bar is the DialogTrigger. In that case, the dark overlay beneath the dialog content is also visible.</li>
                </ul>
              </DialogContent>
            </Dialog>
          </li>
          <li>
            <strong>Observed: </strong>
            <ul>
              <li>Height of this dialog &quot;jumps&quot; when the Safari address bar height shrinks down during a swipe up. That is, content beneath the dialog is visible during the address bar animation, when it should not be.</li>
            </ul>
            <br />
            <strong>Important notes:</strong>
            <ul>
              <li>Happens when the dialog&apos;s contents does not overflow past the viewportal height, but the page beneath&apos;s contents does; the &quot;scrolling&quot; when the dialog is open is of the page underneath</li>
              <li>Effect is worse when a button on a fixed bottom bar is the DialogTrigger. In that case, the dark overlay beneath the dialog content is also visible.</li>
            </ul>
          </li>
        </ol>
        <br />
        Adding enough content for this page to scroll:
        <ul>
          <li>abc</li>
          <li>aberdeen</li>
          <li>abilities</li>
          <li>ability</li>
          <li>able</li>
          <li>aboriginal</li>
          <li>abortion</li>
          <li>about</li>
          <li>above</li>
          <li>abraham</li>
          <li>abroad</li>
          <li>abs</li>
          <li>absence</li>
          <li>absent</li>
          <li>absolute</li>
          <li>absolutely</li>
          <li>absorption</li>
          <li>abstract</li>
          <li>abstracts</li>
          <li>abu</li>
          <li>abuse</li>
          <li>ac</li>
          <li>academic</li>
          <li>academics</li>
          <li>academy</li>
          <li>acc</li>
          <li>accent</li>
          <li>accept</li>
          <li>acceptable</li>
          <li>acceptance</li>
          <li>accepted</li>
          <li>accepting</li>
          <li>accepts</li>
          <li>access</li>
          <li>accessed</li>
          <li>accessibility</li>
          <li>accessible</li>
          <li>accessing</li>
          <li>accessories</li>
          <li>accessory</li>
        </ul>
      </div>
    </>
  )
}
