import Link from 'next/link';

export default function HelloPage({ }) {
    return (
        <div className="h-full w-full flex items-center justify-center border border-blue-400">
            <Link href={'/hello/world'}>
                <h1 className="border-btn">Hello World</h1>
            </Link>

        </div>
    )
} 