import Link from 'next/link';

export default function World() {
    return (
        <div className="border-btn">
            <Link href={'/hello'} title='Go Back'>Previous</Link>
        </div>
    )
}