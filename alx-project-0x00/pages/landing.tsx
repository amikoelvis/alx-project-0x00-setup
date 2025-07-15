import Button from "@/components/Button";
import Card from "@/components/Card";

const Landing: React.FC = () => {
    return (
        <div>
            <h1 className=" text-xl font-extralight">Landing Page</h1>
            <Card />
            <div className="mt-6 space-x-3">
                {/* Small Buttons with different shapes */}
                <Button title="Small Rounded" styles="text-sm rounded-sm" />
                <Button title="Small Medium" styles="text-sm rounded-md" />
                <Button title="Small Full" styles="text-sm rounded-full" />
            </div>

            <div className="mt-4 space-x-3">
                {/* Medium Buttons */}
                <Button title="Medium Rounded" styles="text-base rounded-sm" />
                <Button title="Medium Medium" styles="text-base rounded-md" />
                <Button title="Medium Full" styles="text-base rounded-full" />
            </div>

            <div className="mt-4 space-x-3">
                {/* Large Buttons */}
                <Button title="Large Rounded" styles="text-lg px-6 py-3 rounded-sm" />
                <Button title="Large Medium" styles="text-lg px-6 py-3 rounded-md" />
                <Button title="Large Full" styles="text-lg px-6 py-3 rounded-full" />
            </div>
        </div>
    )
}

export default Landing;