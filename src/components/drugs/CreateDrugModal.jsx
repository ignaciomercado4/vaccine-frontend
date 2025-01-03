async function handleSubmit() {
}

function CreateDrugModal() {
    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Create New Drug</h2>
            <form id="create-drug-form" className="space-y-4">
                {/* drug name */}
                <div>
                    <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                        Drug Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter drug name"
                    />
                </div>

                {/* approved */}
                <div>
                    <label htmlFor="approved" className="block text-gray-700 font-semibold mb-2">
                        Approved
                    </label>
                    <select
                        name="approved"
                        id="approved"
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        <option value="false">No</option>
                        <option value="true">Yes</option>
                    </select>
                </div>

                {/* minimum dose */}
                <div>
                    <label htmlFor="minDose" className="block text-gray-700 font-semibold mb-2">
                        Minimum Dose
                    </label>
                    <input
                        type="number"
                        name="minDose"
                        id="minDose"
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter minimum dose"
                    />
                </div>

                {/* maximum dose */}
                <div>
                    <label htmlFor="maxDose" className="block text-gray-700 font-semibold mb-2">
                        Maximum Dose
                    </label>
                    <input
                        type="number"
                        name="maxDose"
                        id="maxDose"
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter maximum dose"
                    />
                </div>

                {/* available at */}
                <div>
                    <label htmlFor="availableAt" className="block text-gray-700 font-semibold mb-2">
                        Available At
                    </label>
                    <input
                        type="date"
                        name="availableAt"
                        id="availableAt"
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                {/* submit button */}
                <div className="text-right">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        Save Drug
                    </button>
                </div>
            </form>
        </div>
    );
}

export default CreateDrugModal;
