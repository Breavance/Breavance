export default function Footer() {
    return (
        <div className="bg-[#A0AAB2] text-center text-base px-5">
            {/* don't recognized the titles, so you use a p */}
            <p className="text-black">Copyright © {new Date().getFullYear()} | Breavance</p>
        </div>
    )
}