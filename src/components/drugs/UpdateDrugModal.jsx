import axios from "axios";

function UpdateDrugModal({ drug, closeModal }) {
    const handleSubmit = async () => {
        const $UPDATE_DRUG_FORM = document.querySelector("#update-drug-form");

        if (!drug || !drug.ID) {
            alert("No drug selected to update.");
            return;
        }

        let data = {
            name: $UPDATE_DRUG_FORM.name.value,
            approved: $UPDATE_DRUG_FORM.approved.value ? true : false,
            minDose: parseInt($UPDATE_DRUG_FORM.minDose.value),
            maxDose: parseInt($UPDATE_DRUG_FORM.maxDose.value),
            availableAt: new Date($UPDATE_DRUG_FORM.availableAt.value).toISOString(),
        };

        try {
            await axios.put(
                `http://localhost:8080/api/drugs/${drug.ID}`,
                data,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
                    },
                }
            );
            alert("Drug updated successfully!");
            location.reload();
        } catch (error) {
            console.error("Error updating the drug:", error);
            alert("Failed to update the drug. Please try again.");
        }
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Update Drug</h2>
            <form id="update-drug-form" className="space-y-4">
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
                        required
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
                        required
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        <option value="">No</option>
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
                        required
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
                        required
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
                        required
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                {/* submit button */}
                <div className="text-right">
                    <button
                        type="button"
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        onClick={handleSubmit}
                    >
                        Save Changes
                    </button>
                </div>
            </form>
        </div>
    );
}

export default UpdateDrugModal;
