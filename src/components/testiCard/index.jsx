import TestiData from "../TestiData";

const TestiCard = ({name, rate, testimoni}) => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-4">
            <p>{name}</p>
            <h2 className="text-xl font-bold mt-2">{rate}</h2>
            <p className="text-gray-600">{testimoni}</p>
        </div>
    )
}

export default TestiCard;