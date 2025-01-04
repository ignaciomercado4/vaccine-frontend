import axios from "axios";

function DeleteDrugModal({ drug, closeModal }) {
    const handleSubmit = async () => {
        if (!drug || !drug.ID) return;

        try {
            await axios.delete(`http://localhost:8080/api/drugs/${drug.ID}`,
                {headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${sessionStorage.getItem("jwtToken")}`
                }
            });
            location.reload();
        } catch (error) {
            console.error("Error deleting the drug:", error);
            alert("Failed to delete the drug. Please try again.");
        }
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Delete Drug</h2>
            <p className="mb-4 text-gray-700">
                Are you sure you want to delete the drug <strong>{drug?.name}</strong> (ID: {drug?.ID})?
            </p>
            <div className="flex justify-end space-x-4">
                <button
                    onClick={closeModal}
                    className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                >
                    Cancel
                </button>
                <button
                    onClick={handleSubmit}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                    Delete
                </button>
            </div>
        </div>
    );
}

export default DeleteDrugModal;
