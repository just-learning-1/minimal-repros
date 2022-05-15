import Link from 'next/link'

export default function Home() {
  const projectDir = process.env.NEXT_PUBLIC_PATH_BASE || ''

  return (
    <div>
      <h1>Issues and Their Minimal Repros</h1>
      <ol>
        <ul>
          <Link
            href="/radix-dialog-mobile-eats-first-pointer-event-after-dismiss"
            as={`${projectDir}/radix-dialog-mobile-eats-first-pointer-event-after-dismiss`}
          >
            <a>Issue: Radix Dialog on mobile eats first pointer event after dismiss</a>
          </Link>
          {' '}
          <em>Created 2022-05-14</em>
        </ul>
      </ol>
    </div>
  )
}
